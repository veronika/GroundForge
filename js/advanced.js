function load() {
  fullyTransparant = document.getElementById('transparency').value
  document.getElementById('pairs').innerHTML = ""
  document.getElementById('threads').innerHTML = ""
  var stackAsBricks = document.getElementById('bricks').checked
  var nrOfRows = document.getElementById('rows').value
  var nrOfCols = document.getElementById('cols').value
  var shiftLeft = document.getElementById('left').value
  var shiftUp = document.getElementById('up').value
  var matrix = document.getElementById('matrix').value
  var stitches = document.getElementById('stitches').value
  var data = dibl.D3Data().get(matrix, nrOfRows, nrOfCols, shiftLeft, shiftUp, stitches, stackAsBricks)
  var pairScale = document.getElementById('pairScale').value * 1
  var threadScale = 0.6 //document.getElementById('threadScale').value * 1
  diagram.showGraph({
    container: '#pairs',
    width: document.getElementById('pairWidth').value,
    height:  document.getElementById('pairHeight').value,
    nodes: data.pairNodes,
    links: data.pairLinks,
    scale: pairScale,
    transform: "translate(0,0)scale(" + pairScale + ")",
  })
  diagram.showGraph({
    threadColor: '#color',
    container: '#threads',
    width: document.getElementById('threadWidth').value,
    height:  document.getElementById('threadHeight').value,
    nodes: data.threadNodes,
    links: data.threadLinks,
    scale: threadScale,
    transform: "translate(0,0)scale(" + threadScale + ")",
  })
}
function init() {
  var location = (window.location.href + "").replace("#","")
  var patterns = new dibl.PatternSheet(2, "height='210mm' width='297mm'")
  if (location.indexOf("?") >= 0) {
    location.replace(/[?&]+([^=&]+)(=([^&]*))?/gi, function(m,key,m2,value) {

        // fill form
        var fields = document.getElementsByName(key)
        var val = decodeURIComponent(value).replace(/[+]/g, " ")
        if (fields.length > 0) {
          if (fields[0].type!="checkbox")
            fields[0].value = val
          else {
            val = val.toLowerCase().trim()
            fields[0].checked = (!value || val=='on' || val=='true' || val == '')
          }
        }
        // create pattern sheet
        if (key && key == 'matrix') {
           var rows = val.split(/[^-0-9A-D]+/)
           var m = val.replace(/[^-0-9A-D]+/g,'')
           patterns.add(m, location.indexOf('&bricks') >= 0, rows.length, rows[0].length)
        }
        else if (key && key == 'patch') {
           var patchArgs = val.split(";")
           var rows = patchArgs[0].split(/[^-0-9A-D]+/)
           var m = patchArgs[0].replace(/[^-0-9A-D]+/g,'')
           patterns.add(m, patchArgs[1]=='bricks', rows.length, rows[0].length)
        }
    })
  }
  document.getElementById("sheet").innerHTML = patterns.toSvgDoc().trim()
}
