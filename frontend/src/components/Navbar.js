import React from 'react';
import './Navbar.css'

function navbar() {
    return (
        <div className='navBar'>
            <ul>
                <li><a href="/" className='no-underline'><span className='title-box'>home</span></a></li>
                <li><a href="/products" className='no-underline'><span className='title-box'>products</span></a></li>
                <li><a href="/about" className='no-underline'><span className='title-box'>about me</span></a></li>
                <li><a href="/contact" className='no-underline'><span className='title-box'>contact</span></a></li>
            </ul>
        </div>
    );
}

export default navbar;