import React, { useState, useContext } from 'react'
import ContactContext from '../../Context/Contacts/ContactContext'

const ContactForm = () => {

    const contactContext = useContext(ContactContext);
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    })
    const { name, email, phone, type } = contact;

    const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        contactContext.addContact(contact);
        setContact({
            name: '',
            email: '',
            phone: '',
            type: 'personal'
        })
    }
    return (
        <form onSubmit={onSubmit}>
            <h1 className='text-center bg-primary text-light'>Add Contact</h1>
            <div className="customformContainer">
                <div>
                    <label className='form-label m-3'>Name</label>
                    <input type="text" className='form-control' name='name' value={name} onChange={onChange} />
                </div>
                <div>
                    <label className='form-label m-3'>Email</label>
                    <input type="text" className='form-control' name='email' value={email} onChange={onChange} />
                </div>
                <div>
                    <label className='form-label m-3'>Phone Number</label>
                    <input type="text" className='form-control' name='phone' value={phone} onChange={onChange} />
                </div>
                <div >
                    <label className='form-label m-3'>Contact Type</label>
                    <div className='d-flex justify-content-around'>
                        <div >
                            <label className='form-check-label m-lg-2'>Personal</label>
                            <input type="radio" checked={type === 'personal'} name='type' value='personal' onChange={onChange} />
                        </div>
                        <div>
                            <label className='form-check-label m-lg-2'>Professional</label>
                            <input type="radio" checked={type === 'professional'} name='type' value='professional' onChange={onChange} />
                        </div>
                    </div>
                </div>
                <button className='btn btn-primary w-100 m-lg-3'> Submit </button>
            </div>

        </form>
    );
}

export default ContactForm;