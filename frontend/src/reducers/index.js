import { CHANGE_FOLDER, CHANGE_NOTE_TEXT, SWITCH_NOTE, NEW_NOTE } from "../actions";

const initialState = {
    folder: {
        id: undefined,
        notes: [],
        fetched: false
    },
    selected: {
        id: undefined,
        text: null
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FOLDER:
            return {
                ...state,
                folder: {
                    ...state.folder,
                    id: action.folderID,
                    fetched: false
                }
            };
        case CHANGE_NOTE_TEXT:
            return {
                ...state,
                selected: {
                    ...state.selected,
                    text: action.text
                }
            };
        case SWITCH_NOTE:
            return {
                ...state,
                selected: {
                    id: action.id,
                    text: state.folder.notes.find(note => note.id === action.id)
                }
            };
        case NEW_NOTE:
            return state;
        default:
            return state;
    }
};

export default reducer