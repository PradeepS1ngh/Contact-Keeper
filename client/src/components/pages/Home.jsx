import React from 'react'
import Contact from '../Contact/Contact'
import ContactForm from '../Contact/ContactForm'
const Home = () => {
    return ( 
        <>
            <div className="customHome" style={{marginTop:"20px"}}>
                <div className="col customform">
                    <ContactForm />
                </div>
                <div className='col  '>
                    <Contact />
                </div>
            </div>
        </>
    );
}

export default Home;