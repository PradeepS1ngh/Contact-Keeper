import { 
    ADD_CONTACT,
    DELETE_CONTACT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_CURRENT,
} from "../types";

export default (state, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state , contacts : [...state.contacts , action.payload ]
            }
        case DELETE_CONTACT:
            return {
                ...state , contacts : state.contacts.filter( contact => { return contact.id !== action.payload} )
            }
        default:
            return state;
    }
}