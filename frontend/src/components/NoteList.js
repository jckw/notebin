import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/NoteList.css";
import { NoteItem } from "./NoteItem";
import { Plus } from "react-feather";

export class NoteList extends Component {
    render() {
        const selectedID = this.props.selectedID;
        const folderID = "JHhaf883kKj3s";
        const notes = this.props.notes;
        const noteItems = notes.map(note => (
                <li key={note.id}>
                    <a className={note.id === selectedID ? "selected" : null}>
                        <NoteItem note={note}/>
                    </a>
                </li>
            )
        );

        return (
            <ul className="NoteList">
                <li className="FindFolder">
                    <div className="input-group">
                        <input className="form-input" type="text" placeholder="Folder ID"/>
                        <button className="btn btn-primary input-group-btn">Find</button>
                    </div>
                    {folderID ? <small className="folderID">Current folder: <code>{folderID}</code></small> : null}
                </li>
                <li className="AddNote"><a><Plus/></a></li>
                {noteItems}
            </ul>
        )
    }
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired
    })).isRequired
};
