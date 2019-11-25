import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import Ann from '../../img/ann.png';
import './about.scss';

const About = () => {

    return (
        <ScrollableAnchor id={'about'}>
        <div className="about-background">
            <div className="about-container">
                <div className="left">
                    <img src={Ann} />
                </div>
                <div className="right">
                    <h2>About </h2>
                    <p>Full-stack web developer with experience in HTML5, CSS/SASS/LESS, Javascript, React, Redux, Node JS, Express, Postgres  and website design. Strong creative, analytical, collaboration skills.
                    My mission is to provide the best websites for clients.
                    </p>
                </div>
            </div>
        </div>
        </ScrollableAnchor>
    )
}

export default About;
