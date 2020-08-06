function clickedDot(linkElement) {
    var dotId = linkElement.getElementsByTagName("circle")[0].attributes["id"].value
    var dot = document.getElementById(dotId)
    var color = document.getElementById("color").value
    var stitch = document.getElementById("stitch").value
    dot.getElementsByTagName("title")[0].innerHTML = `${dotId} : ${stitch} (not yet part of custom link)`
    dot.style = `fill:${color};opacity:0.65`
}
function clickedLink(linkElement) {
    var lineId = linkElement.getElementsByTagName("line")[0].attributes["id"].value
    var link = document.getElementById("customlink")
    var weight = document.querySelector('input[name = "weight"]:checked').value
    var topolinks = TopoLink.changeWeight(lineId, weight, link.href.replace(/.*=/,""))
    link.href = "?topo=" + topolinks
    showDiagram(topolinks)
}
function load() {
    var urlQuery = location.search.substr(1)
    var topolinks = typeof urlQuery === "undefined" || urlQuery.trim() == ""
        ? "b4,a1,lo,ri;d4,a1,lo,li;b2,a3,lo,ri;d2,a3,lo,li;a1,b1,lo,li;b4,b1,ro,ri;b1,b2,lo,li;c1,b2,lo,ri;a3,b4,lo,li;c3,b4,lo,ri;b1,c1,ro,li;d4,c1,ro,ri;b2,c3,ro,li;d3,c3,lo,ri;a1,d2,ro,ri;c1,d2,ro,li;a3,d3,ro,ri;d2,d3,ro,li;c3,d4,ro,li;d3,d4,ro,ri"
        : TopoLink.asString(TopoLink.fromUrlQuery(urlQuery))
    document.getElementById("customlink").href = "?topo=" + topolinks
    showDiagram(topolinks)
}
function showDiagram(linkdefs) {
    var elem =  document.getElementById("diagram")
    var links = TopoLink.fromString(linkdefs)
    var data = Data.create(links)
    console.log(data.toString())
    if (data.length == 0) {
        elem.outerHTML = "<p><strong>whoops</strong></p>"
    } else {
//        var deltas = array2mat(rand(data.length,2)) // TODO infinite nullspace(array2mat(data))
//        elem.innerHTML = SvgPricking.create(links, deltas)
    }
}
function setDownloadContent (linkNode) {
  var svg = document.getElementById("diagram").innerHTML
  linkNode.href = 'data:image/svg+xml,' + encodeURIComponent('<!--?xml version="1.0" encoding="UTF-8" standalone="no"?-->' + svg)
}
