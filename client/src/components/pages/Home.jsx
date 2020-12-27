import React from 'react'
import Contact from '../Contact/Contact'

const Home = () => {
    return ( 
        <>
            <div className="row" style={{marginTop:"20px"}}>
                <div className="col"></div>
                <div className='col'>
                    <Contact />
                </div>
            </div>
        </>
    );
}

export default Home;