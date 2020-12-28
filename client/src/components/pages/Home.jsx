import React ,{useContext , useEffect}from 'react'
import Contact from '../Contact/Contact'
import ContactForm from '../Contact/ContactForm'
import ContactFilter from '../Contact/ContactFilter'

import AuthContext from '../../Context/Auth/AuthContext';

const Home = () => {

    const authContext = useContext(AuthContext)

    useEffect(() => {
        authContext.loadUser();
        //eslint-disable-next-line
    }, [])
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