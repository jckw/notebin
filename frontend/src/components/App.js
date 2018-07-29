import React, { Component } from "react";
import "../styles/App.css";
import { NoteList } from "./NoteList";
import { NoteViewer } from "./NoteViewer";

class App extends Component {
    render() {
        const notes = [
            {
                id: 1,
                datetime: "2018-07-29T09:01:33+00:00",
                text: "This is a small-sized note.\nIt has some newline characters in it too!"
            },
            {
                id: 2,
                datetime: "2018-07-28T19:51:12+00:00",
                text: "😀 This note has an emoji in it too!"
            },
            {
                id: 3,
                datetime: "",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum condimentum malesuada. Nunc ornare quis magna ut condimentum. Vivamus eleifend, augue in pulvinar placerat, lectus sem aliquam erat, bibendum tincidunt neque neque id ex. Integer convallis ligula nisl, vitae facilisis metus pretium non. Aliquam erat volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus tincidunt rhoncus lacinia. Ut vitae lobortis justo. Suspendisse lorem massa, porttitor vitae augue vitae, pellentesque euismod risus. Aenean dui ipsum, eleifend posuere venenatis elementum, ornare vel arcu. Nam sit amet ipsum urna. Cras aliquet auctor felis, sed venenatis mi condimentum ut. Curabitur feugiat sollicitudin sem, nec aliquam purus lobortis ac. Etiam vel posuere risus. Morbi interdum vel sapien vel feugiat. Aliquam at ante a ante tempus dapibus eget non nulla.\n" + "\n" +
                "Mauris nec blandit augue. Maecenas semper nibh ac nulla placerat, id mollis lectus egestas. Sed ac odio a magna sollicitudin aliquet. Duis lacus tortor, rhoncus a ultrices lobortis, posuere a purus. Sed quis rutrum nulla. Integer velit massa, pharetra ut purus condimentum, convallis tempus magna. Vestibulum consequat augue neque, sit amet venenatis leo rutrum sed. Phasellus posuere, ante a elementum dictum, diam nunc faucibus elit, vel semper dui ante at tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ac dolor consectetur, lacinia dui lobortis, dapibus nibh. Sed dictum, tellus luctus fermentum blandit, tortor augue viverra nulla, et iaculis augue sapien ac erat. Aenean in pharetra dolor.\n" +
                "\n" +
                "Fusce hendrerit, sem eget lacinia vulputate, lectus quam rutrum libero, eget auctor nibh orci eu lacus. Mauris rhoncus, dui vitae vulputate porta, purus lorem tincidunt justo, eu blandit velit lectus at mauris. Vivamus molestie nulla sed gravida fringilla. Praesent leo arcu, viverra a mauris a, sodales accumsan orci. Sed tincidunt gravida justo sit amet maximus. Aliquam placerat purus est, a interdum sapien laoreet ac. Morbi velit metus, lacinia quis aliquam sit amet, efficitur a nunc. Praesent finibus venenatis enim, nec aliquam diam iaculis nec. Pellentesque ornare quis eros et venenatis. Integer ut mi id neque mollis maximus. Morbi sit amet dapibus nulla. Nam non molestie mauris. Mauris placerat nisi ut elit pretium, ut rutrum justo feugiat. Sed ultricies varius dapibus.\n" +
                "\n" +
                "Duis tempor vitae ipsum quis vehicula. Nullam pretium rhoncus ligula et molestie. Pellentesque pellentesque, orci non gravida vestibulum, ligula tellus convallis lacus, vitae sodales dolor dolor sed nulla. In est ligula, tempus quis nisl at, consequat fringilla nibh. Integer in elit vitae nulla hendrerit interdum. Vivamus fringilla ultricies hendrerit. Nunc accumsan justo mauris. Fusce eget feugiat sapien. Vivamus condimentum aliquet nulla nec interdum. Fusce orci quam, facilisis in suscipit vel, sodales in tortor.\n" +
                "\n" +
                "Morbi neque nibh, ullamcorper quis molestie ac, sodales in risus. Nulla nibh elit, maximus quis nibh a, aliquet efficitur diam. Nulla rhoncus posuere massa id dapibus. Nam convallis id libero ac aliquet. In fermentum erat nisl, ut interdum nibh sagittis eget. In eget urna a ante pretium pulvinar vitae id tellus. Maecenas dignissim gravida sem, non condimentum mi blandit quis. Nam eleifend massa at ultrices sagittis."
            }
        ];

        const selectedID = 3;
        const selected = notes.find(note => note.id === selectedID);

        return (
            <section className="App">
                <NoteList notes={notes} selectedID={selectedID}/>
                <NoteViewer note={selected}/>
            </section>
        )
    }
}

export default App;
