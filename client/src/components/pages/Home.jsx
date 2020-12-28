import React from 'react'
import Contact from '../Contact/Contact'
import ContactForm from '../Contact/ContactForm'
import ContactFilter from '../Contact/ContactFilter'
const Home = () => {
    return ( 
        <>
            <div className="customHome" style={{marginTop:"20px"}}>
                <div className="col customform " style={{marginRight:"50px"}}>
                    <ContactForm />
                </div>
                <div className='col ' style={{marginLeft:"50px"}}>
                    < ContactFilter />
                    <Contact />
                </div>
            </div>
        </>
    );
}

export default Home;