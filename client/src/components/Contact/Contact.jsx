import React, { useContext } from 'react'
import ContactContext from '../../Context/Contacts/ContactContext'
import ContactItem from './ContactItem'

//Transition
import { CSSTransition, TransitionGroup } from 'react-transition-group';



const Contact = () => {
    const contactContext = useContext(ContactContext);
    const { contacts, filtered } = contactContext;

    if (contacts.length == 0) {
        return <h4 className='text-center'>Please Add a Contact</h4>
    }
    return (
        <TransitionGroup> {filtered !== null ?
            filtered.map((contact) => {
                return <CSSTransition key={contact.id} timeout={500} classNames="alert" >
                            <ContactItem  contact={contact} />
                        </CSSTransition>
            }) : contacts.map((contact) => {
                return <CSSTransition key={contact.id} timeout={500} classNames="alert" >
                            <ContactItem  contact={contact} />
                        </CSSTransition>
            })}
        </TransitionGroup>
    )
}

export default Contact;