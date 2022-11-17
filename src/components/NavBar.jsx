import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
// import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h4><Link className='link' to='/'>Home</Link></h4>
            <h4><Link className='link' to='/community'>Community</Link></h4>
            <h4><Link className='link' to='/create'>Create Member</Link></h4>
        </nav>
    )
}

export default Navbar;