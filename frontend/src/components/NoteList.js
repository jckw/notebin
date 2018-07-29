import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/NoteList.css";
import { NoteItem } from "./NoteItem";
import { Plus } from "react-feather";
import { CHANGE_FOLDER, changeFolder } from "../actions";
import { connect } from "react-redux";

class NoteList extends Component {
    render() {
        const selectedID = this.props.selectedID;
        const folderID = this.props.folderID;
        const notes = this.props.notes;

        const noteItems = notes.map(note => (
                <li key={note.id}>
                    <a className={note.id === selectedID ? "selected" : null}>
                        <NoteItem note={note}/>
                    </a>
                </li>
            )
        );

        let input;

        return (
            <ul className="NoteList">
                <li className="FindFolder">
                    <div className="input-group">
                        <input
                            className="form-input"
                            type="text"
                            placeholder="Folder ID"
                            ref={node => input = node}/>
                        <button
                            className="btn btn-primary input-group-btn"
                            onClick={(e) => {
                                e.preventDefault();
                                this.props.changeFolder(input.value);
                            }}>Find</button>
                    </div>
                    {folderID ? <small className="folderID">Current folder: <code>{folderID}</code></small> : null}
                </li>
                <li className="AddNote"><a><Plus/></a></li>
                {noteItems}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state.folder.notes,
        folderID: state.folder.id,
        selectedID: state.selected.id
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeFolder: (folderID) => {
            dispatch(changeFolder(folderID))
        }
    }
};

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired
    })).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteList)
