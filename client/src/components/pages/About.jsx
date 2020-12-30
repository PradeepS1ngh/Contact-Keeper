import React from 'react'

const About = () => {
    return ( 
        <div className='text-light aboutContainer'>
            <h3> This is a Web Application Using <span className='textYellow' style={{fontSize:"80px"}}>MERN StacK</span> for Creating ,Listing and Storing Contact </h3>
            <ul>
                <li>Application have <span className='textYellow'>Login/Signup</span> Cappabilities</li>
                <li><span className='textYellow'>No</span> Google Auth , <span className='textYellow'>No</span> firebaseAuth , <span className='textYellow'>No</span> any Auth is used for Authentication </li>
                <li>Authentication is done using <span className='textYellow'>Json Web Token</span> </li>
                <li>Application have a Contact form ,from where the user can add contatcs and can Update or Delete the Older Contacts</li>
                <li>Technologies Used : <span className='textYellow'>ExpressJS, ReactJS, NodeJS, MongoDB, HTML, CSS </span></li>
            </ul>
        </div>
    );
}

export default About;