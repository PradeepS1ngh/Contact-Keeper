import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
            <div class="container-fluid">
            <Link to='/' className='navbar-brand'>Contact-Keeper</Link>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <Link to='/' className='nav-link active'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about' className='nav-link'>About</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/register' className='nav-link'>Register</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/login' className='nav-link'>Log-In</Link>
                </li>
            </ul>
            </div>
        </nav>
    );
}
export default Navbar;