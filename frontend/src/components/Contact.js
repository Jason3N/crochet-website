import React from 'react'
import myGMail from '../images/gmail_logo.png'
import myVenmo from '../images/venmo_logo.png'
import myInsta from '../images/insta_logo.png'

function Contact(){
    return(
        <div className = 'container-box-for-contact'>
            <div className = 'header-text helvetica-font'>
                contact me!
            </div>
            <div className = 'contact-container helvetica-font'>
                <div className = 'contact-item'>
                    <img className = 'insta_logo' src={myInsta} alt = 'description'/>
                    instagram: @feliloops
                </div>
                <div className = 'contact-item' style = {{marginTop: '2.3%'}}>
                    <img className = 'venmo_logo' src={myVenmo} alt = 'description'/>
                    venmo: @feliciafeng
                </div>
                <div className = 'contact-item' style = {{marginTop: '2.9%'}}>
                    <img className = 'gmail_logo' src={myGMail} alt = 'description'/>
                    gmail: feliloops@gmail.com
                </div>
            </div>
        </div>
    )
}

export default Contact;