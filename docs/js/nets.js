<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title lang="en">GroundForge: nets</title>
    <style>
        figure { display: inline-block; margin: 10px; vertical-align: top; }
        .intro { width: 37em; }
        pre { display: inline-block; margin: 0 0.3em 0 0.3em; }
        td { border: solid 1px; padding: 0.3em; }
        table { margin-left: 2.5em; border-collapse: collapse; }
        span { color: red }
    </style>
    <script src="js/d3.v4.min.js" type="text/javascript"></script>
    <script src="js/GroundForge-opt.js" type="text/javascript"></script>
    <script src="js/nets.js" type="text/javascript"></script>
    <link rel="icon" type="image/png" sizes="32x32" href="/GroundForge/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/GroundForge/favicon/favicon-16x16.png">
</head>
<body onload="load()">
<div class="intro">
    <p>
        Examples of the
        <a href="https://d-bl.github.io/MAE-gf/docs/counting#results" target="_blank"
        >words</a> you can put after "<code>?b=</code>" at the end of the current page adress.
    </p>
    <p>
        Follow the links to:
    </p>
    <ul>
        <li>
            tweak the patterns such as apply colors to threads
        </li>
        <li>
            try another "<code>dbpq</code>" configuration:
            adjust the address of the followed link as suggested by the table.
            Providing all "<code>dbpq</code>" combinations would make this page too slow.
        </li>
    </ul>
<table>
    <tr><td>stitch<br>arrangement<br>x = d, p or q</td><td>page address contains</td><td>remarks</td></tr>
    <tr><td><pre>bb
xx</pre></td><td><code>b1=b&c1=b&b2=x&c2=x</code></td><td>provided</td></tr>
    <tr><td><pre>bx
bx</pre></td><td><code>b1=b&<span>b2</span>=b&<span>c1</span>=x&c2=x</code></td><td rowspan="2">DIY, changed parts in red</td></tr>
    <tr><td><pre>bx
xb</pre></td><td><code>b1=b&<span>c2</span>=b&b2=x&<span>c1</span>=x</code></td></tr>
    <tr><td><pre>bp
qd</pre></td><td><code>b1=b&c2=q&c1=p&b2=d</code></td><td>provided</td></tr>
    <tr><td colspan="3">stitch labels:<br><pre>b1,c1
b2,c2</pre></td></tr>
</table>
</div>
<div id="diagrams"></div>
</body>
</html>
