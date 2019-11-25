import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import Github from '../../img/github.png';
import Email from '../../img/email.png';
import Linkedin from '../../img/linkedin-logo.png'
import './contact.scss'

const Contact = () => {

    return (
        <div className="contact-container">
            <div className="contact-card">
                    <div className="contact-left">
                        <ScrollableAnchor id={'contact'}>
                            <h2>Contact</h2>
                        </ScrollableAnchor>
                        <p>
                        Email me any questions. I would be happy to answer your questions or set up a meeting with you. Let’s build something awesome together!
                        </p>
                    </div>
                    <div className="contact-right">
                        <h2>Contact Info</h2>
                        <div>
                            <a href="https://github.com/annsuparada" target="_blank"><img src={Github} /></a>
                            <p>annsuparada</p>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/ann-suparada" target="_blank"><img src={Linkedin} /></a>
                            <p>Suparada Saitalae</p>
                        </div>
                        <div>
                            <img src={Email} />
                            <p>ann.suparada@gmail.com</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Contact;
