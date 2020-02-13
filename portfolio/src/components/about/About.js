import React from 'react'
import Ann from '../../img/ann.png';
import './about.scss';

const About = () => {

    return (
        <div className="about-background" id="about">
            <div className="about-container">
                <div className="left">
                    <img src={Ann} />
                </div>
                <div className="right">
                    <h2>About </h2>
                    <p>Hi, I am a full-stack web developer from Tulsa, Oklahoma. My mission is to deliver the best functional and responsive web applications for clients.
                    </p>
                    <p>I have experience with  HTML5, CSS/SASS/LESS, Javascript, React, Redux, Node JS, Express, Postgres, Python, Django, Flask and website design. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;
