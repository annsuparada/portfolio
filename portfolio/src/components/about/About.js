import React from 'react'
import './about.scss';

const About = () => {

    return (
        <div className="about-background" id="about">
            <div className="about-container">
                <div className="left">
                    <img alt="Ann" src={`https://res.cloudinary.com/dejr86qx8/image/upload/c_scale,w_200/v1582335476/ann_oqdzcv.png`} />
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