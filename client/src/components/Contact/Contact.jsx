import React, { useContext } from 'react'
import ContactContext from '../../Context/Contacts/ContactContext'
import ContactItem from './ContactItem'


const Contact = () => {
    const contactContext = useContext(ContactContext);
    const { contacts } = contactContext;
    console.log(contacts);
    return (
        <>
        {contacts.map( (contact) => {
            return <ContactItem key={contact.id} contact={contact}/>
        })}
        </>
    )
}

export default Contact;