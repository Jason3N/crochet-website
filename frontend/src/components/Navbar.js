import React from 'react';
import './Navbar.css'
import Logo from '../images/feliloops_logo.png'

function Navbar() {
    return (
        <div className='navBar'>
            <ul>
                <li><a href="/" className='no-underline'><span className='title-box'>home</span></a></li>
                <li><a href="/products" className='no-underline'><span className='title-box'>products</span></a></li>
                <img className = 'logo' src={Logo} alt = 'description'/>
                <li><a href="/about" className='no-underline'><span className='title-box'>about me</span></a></li>
                <li><a href="/contact" className='no-underline'><span className='title-box'>contact</span></a></li>
            </ul>
        </div>
    );
}

export default Navbar;