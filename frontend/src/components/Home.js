import React from 'react';
import './Home.css';
import coverimg from '../images/cover-pic.png'

function Home() {
    return (
        <div className="home-container">
            <img src={coverimg} alt="desc" className="left-image" />

            <div className="home-content">

            </div>
        </div>
    );
}

export default Home;