import React, { Component } from "react";
import "../styles/NoteViewer.css";
import { changeNoteText } from "../actions";
import { connect } from "react-redux";

class NoteViewer extends Component {
    handleChange(e) {
        e.preventDefault();
        if(this.props.id === undefined) return;
        this.props.onTextChange(e.target.value)
    }

    render() {
        return (
            <div className="NoteViewer">
                <textarea
                    disabled={this.props.id === undefined}
                    value={this.props.text}
                    onChange={this.handleChange.bind(this)}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.selected.id,
        text: state.selected.text
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTextChange: (text) => {
            console.log("changing text!");
            dispatch(changeNoteText(text))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteViewer)