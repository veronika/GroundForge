/*
 Copyright 2017 Jo Pol
 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program. If not, see http://www.gnu.org/licenses/gpl.html
*/
package dibl;

import scala.collection.Seq;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

public class Demo4Java {

  private static final File dir = new File("target/test/pattern/");

  public static void main(String[] args) throws Throwable {
    //noinspection ResultOfMethodCallIgnored
    dir.mkdirs();

    // TODO loop over a few more examples, see the demo section of the tiles page
    String urlQuery = "patchWidth=11&patchHeight=12"
        + "&footside=-7,B4,17,17&tile=B-C-,---5,C-B-,-5--&headside=4-,7C,48,48"
        + "&footsideStitch=ctctt&tileStitch=ctct&headsideStitch=ctctt"
        + "&shiftColsSW=0&shiftRowsSW=4&shiftColsSE=4&shiftRowsSE=4";

    generateDiagrams(urlQuery);
  }

  private static void generateDiagrams(String urlQuery) throws IOException {
    Diagram pairDiagram = NewPairDiagram.create(Config.create(urlQuery));

    // TODO make a copy of the node sequence using diagram.node(i).withLocation(x,y)
    Seq<NodeProps> nudgedPairNodes = pairDiagram.nodes();

    Diagram nudgedPairDiagram = new Diagram(nudgedPairNodes, pairDiagram.links());
    write("pairs", "1px", nudgedPairDiagram);
    Diagram threadDiagram = ThreadDiagram.create(nudgedPairDiagram);

    // TODO nudge the nodes (as above)
    write("threads", "2px", threadDiagram);

    // TODO apply nudging and create a thread diagram for this Droste diagram
    write("droste-pairs", "1px", PairDiagram.create("ctct", threadDiagram));
  }

  private static void write(String fileName, String strokeWidth, Diagram diagram)
      throws IOException {
    File file = new File(dir + "/" + fileName + ".svg");
    String svg = D3jsSVG.render(diagram, strokeWidth, true, 744, 1052, 0d);
    new FileOutputStream(file).write((D3jsSVG.prolog() + svg).getBytes());
  }
}
