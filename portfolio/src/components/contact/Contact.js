import React from 'react';
import { Icon, Row, Col } from 'antd';
import Github from '../../img/github.png';
import Email from '../../img/email.png';
import Linkedin from '../../img/linkedin-logo.png'
import './contact.scss'

const Contact = () => {

    return (
        <div className="contact-container">
            <div className="contact-card">
                    <div className="contact-left">
                        <h2>Contact</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                        </p>
                    </div>
                    <div className="contact-right">
                        <h2>Contact Info</h2>
                        <div>
                            <a href="https://github.com/annsuparada" target="_blank"><img src={Github} /></a>
                            <p>annsuparada</p>
                        </div>
                        <div>
                            <a><img src={Linkedin} /></a>
                            <p>Suparada Saitalae</p>
                        </div>
                        <div>
                            <a><img src={Email} /></a>
                            <p>ann.suparada@gmail.com</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Contact;
