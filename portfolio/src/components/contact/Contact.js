import React from 'react';
import Github from '../../img/github.png';
import Email from '../../img/email.png';
import Linkedin from '../../img/linkedin-logo.png'
import './contact.scss'

const Contact = () => {

    return (
        <div className="contact-container" id="contact">
            <div className="contact-card"  >
                    <div className="contact-left">
                            <h2>Contact</h2>
                        <p>
                        Email me any questions. I would be happy to answer your questions or set up a meeting with you. Let’s build something awesome together!
                        </p>
                    </div>
                    <div className="contact-right">
                        <h2>Contact Info</h2>
                        <div>
                            <a href="https://github.com/annsuparada" target="_blank" rel="noopener noreferrer"><img src={Github} alt="GitHub logo" /></a>
                            <p>annsuparada</p>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/ann-suparada" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="Linkedin logo" /></a>
                            <p>Ann Keller</p>
                        </div>
                        <div>
                            <a href="mailto: ann.suparada@gmail.com">
                            <img src={Email} alt="email logo"/>
                            </a>
                            <p>ann.suparada@gmail.com</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Contact;
