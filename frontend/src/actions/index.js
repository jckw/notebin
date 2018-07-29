export const CHANGE_FOLDER = "CHANGE_FOLDER";
export const CHANGE_NOTE_TEXT = "CHANGE_NOTE_TEXT";
export const SWITCH_NOTE = "SWITCH_NOTE";
export const NEW_NOTE = "NEW_NOTE";

export const changeFolder = (folderID) => {
    return {
        type: CHANGE_FOLDER,
        folderID
    }
};

export const changeNoteText = (text) => {
    return {
        type: CHANGE_NOTE_TEXT,
        text
    }
};

export const newNote = () => {
    return {
        type: NEW_NOTE
    }
};

export const switchNote = (id) => {
    return {
        type: SWITCH_NOTE,
        id
    }
};