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
                    <p>I'm a Full-Stack Developer with 3+ years of hands-on experience,
            dedicated to designing, developing, and implementing innovative
            applications and solutions using a diverse range of technologies and
            programming languages. My mission is to deliver exceptional,
            functional, and responsive web applications that exceed client
            expectations and drive their success.</p>
                </div>
            </div>
        </div>
    )
}

export default About;
