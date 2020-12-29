import React, { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../Context/Auth/AuthContext";
import ContactContext from "../../Context/Contacts/ContactContext";

const Navbar = () => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, logOut, user } = authContext;
    const contactContext = useContext(ContactContext);
    const { clearContacts } = contactContext;

    const onLogOUT = () => {
        console.log("logout");
        logOut();
        clearContacts();
    };

    const authUser = (
        <>
            <li className="nav-item">
                Hello , {user && <span className="text-light">{user.name}</span>}
            </li>
            <li className="nav-item pl-md-5">
                <i className="fas fa-sign-out-alt"></i>
                <a onClick={onLogOUT} href="#"> 
                    <span>Log-Out</span>
                </a>
            </li>
        </>
    );
    const guestUser = (
        <>
            <li className="nav-item">
                <Link to="/register" className="nav-link">
                    Register
        </Link>
            </li>
            <li className="nav-item">
                <Link to="/login" className="nav-link">
                    Log-In
        </Link>
            </li>
        </>
    );

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <Link to="/" className="navbar-brand">
                    Contact-Keeper
        </Link>
                <ul className="navbar-nav">
                    {/* <li className='nav-item'>
                        <Link to='/' className='nav-link active'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-link'>About</Link>
                    </li> */}
                    {isAuthenticated ? authUser : guestUser}
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;
