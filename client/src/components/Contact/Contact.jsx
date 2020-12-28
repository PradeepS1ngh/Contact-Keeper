import React, { useContext } from 'react'
import ContactContext from '../../Context/Contacts/ContactContext'
import ContactItem from './ContactItem'


const Contact = () => {
    const contactContext = useContext(ContactContext);
    const { contacts, filtered } = contactContext;

    if(contacts.length == 0){
        return <h4 className='text-center'>Please Add a Contact</h4>
    }
    return (
        <> {filtered !== null ?
            filtered.map((contact) => {
                return <ContactItem key={contact.id} contact={contact} />
            }) : contacts.map((contact) => {
                return <ContactItem key={contact.id} contact={contact} />
            })}

        </>
    )
}

export default Contact;