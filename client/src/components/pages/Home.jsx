import React from 'react'
import Contact from '../Contact/Contact'
import ContactForm from '../Contact/ContactForm'
const Home = () => {
    return ( 
        <>
            <div className="customHome" style={{marginTop:"20px"}}>
                <div className="col customform " style={{marginRight:"50px"}}>
                    <ContactForm />
                </div>
                <div className='col ' style={{marginLeft:"50px"}}>
                    <Contact />
                </div>
            </div>
        </>
    );
}

export default Home;