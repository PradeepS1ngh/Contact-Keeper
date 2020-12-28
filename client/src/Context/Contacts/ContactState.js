import { React, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';

import ContactContext from "./ContactContext";
import ContactReducer from "./ContactReducer";
import { 
    ADD_CONTACT,
    DELETE_CONTACT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_CURRENT,
    SET_CURRENT,
    CLEAR_FILTER,
} from "../types";

const ContextState = (props) => {
    const initialState = {
        contacts : [
            {
                id : 1,
                name : 'Pradeep',
                email : 'prdp@gmail.com',
                phone : '111-111-1111',
                type : 'personal'
            },
            {
                id : 2,
                name : 'Hradeep',
                email : 'hrdp@gmail.com',
                phone : '111-111-2222',
                type : 'professional'
            },
            {
                id : 3,
                name : 'Gulshan',
                email : 'mehto@gmail.com',
                phone : '222-111-1111',
                type : 'personal'
            }
        ],
        current : null,
        filtered : null,
    }
    
    const [state , dispatch] = useReducer(ContactReducer,initialState);
    // Actions

    //Add Contact
    const addContact = contact => {
        contact.id = uuidv4()
        dispatch({ type : ADD_CONTACT , payload: contact});
    }
    // Delete Contact
    const deleteContact = id => {
        dispatch({type : DELETE_CONTACT , payload : id});
    }

    // Set Current Contact
    const setContact = contact => {
        dispatch ({type : SET_CURRENT , payload:contact});
    }
    // Clear Current Contact
    const clearContact = () => {
        dispatch({type : CLEAR_CURRENT});
    }
    //Update Contact
    const updateContact = contact => {
        dispatch({type: UPDATE_CONTACT , payload:contact});
    }
    //Filter Contact
    const filterContact = text => {
        dispatch({type : FILTER_CONTACTS , payload : text});
    }
    
    // Clear Filter
    const clearFilter = () => {
        dispatch({type : CLEAR_FILTER })
    }
    return (
        <ContactContext.Provider value={{
            contacts : state.contacts,
            current : state.current,
            filtered : state.filtered,
            addContact,
            deleteContact,
            setContact,
            clearContact,
            updateContact,
            filterContact,
            clearFilter
        }}>
            {props.children}
        </ContactContext.Provider>
    )
};

export default ContextState;
