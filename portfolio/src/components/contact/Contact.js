import React from 'react';
import { Icon, Row, Col } from 'antd';
import './contact.scss'



const Contact = () => {

    return (
        <div className="contact-container">
            <div className="contact-card">
                    <div className="contact-left">
                        <h1>Contact</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                    </p>
                    </div>
                    <div className="contact-right">
                        <h2>Contact Info</h2>
                        <Icon type="github" />
                        <Icon type="linkedin" />
                        <Icon type="mail" />
                    </div>
            </div>
        </div>
    )
}

export default Contact;
