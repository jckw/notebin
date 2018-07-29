import React, { Component } from "react";
import "../styles/NoteViewer.css";

export class NoteViewer extends Component {
    render() {
        return (
            <div className="NoteViewer">
                <textarea value={this.props.note.text}/>
            </div>
        )
    }
}
