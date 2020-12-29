import React, { useContext, useEffect } from 'react'
import {Link} from 'react-router-dom'
import lock from './lock.png'
import unlock from './unlock.png'

import AuthContext from '../../Context/Auth/AuthContext';
const MainHome = () => {

    const authContext = useContext(AuthContext)

    useEffect(() => {
        authContext.loadUser();
        //eslint-disable-next-line
    }, [])

    return (
        <>
            <div className='homecontainer'>
                <div className='subContainer'>
                    <img src={authContext.isAuthenticated ? unlock : lock} alt="Image" />
                    <div className='info text-light'>
                        <h1>Welcome,</h1>
                        <p>Store contact informations about your friend and family</p>
                        <Link to='/gettingStarted' className='text-light' ><button >Start</button></Link>
                        <Link to='/login' className='text-light' ><button >LogIn</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainHome;