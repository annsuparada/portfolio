import React from 'react'
import { Row, Col } from 'antd';
import Ann from '../../img/ann.png';
import './about.scss';

const About = () => {

    return (
        <div className="about-background">
            <div className="about-container">
                <div className="left">
                    <img src={Ann} />
                </div>
                <div className="right">
                    <h2>About </h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </div>
    )
}

export default About;
