import React, { Component } from "react";
import "../styles/App.css";
import NoteList from "./NoteList";
import NoteViewer from "./NoteViewer";

class App extends Component {
    render() {
        return (
            <section className="App">
                <NoteList/>
                <NoteViewer/>
            </section>
        )
    }
}


export default App;
