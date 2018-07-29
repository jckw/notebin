import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/NoteItem.css";
import smartTruncate from "smart-truncate";
import { FileText } from "react-feather";

export class NoteItem extends Component {
    render() {
        const note = this.props.note;

        return (
            <div className="NoteItem">
                <FileText className="TypeIcon"/><p>{note.text.length > 3 ? smartTruncate(note.text, 30) : note.text}</p>
            </div>
        )
    }
}

NoteItem.propTypes = {
    note: PropTypes.object.isRequired
};
