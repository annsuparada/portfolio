import React from 'react';
import RecipeFinder from './RecipeFinder';
import TheObservatory from './TheObservatory';
import './portfolio.scss'
import { Tag } from 'antd';


const Portfolio = () => {

    return (
        <>

            <div className="protfolio-container" id="portfolio">
                    <h1>Skills</h1>
                <div className="skills">
                    <div>HTML5</div>
                    <div>CSS</div>
                    <div>Javascript</div>
                    <div>React</div>
                    <div>Redux</div>
                    <div>Node JS</div>
                    <div>Express</div>
                    <div>Postgres</div>
                    <div>Python</div>
                    <div>Django</div>
                    <div>Flask</div>
                    <div>Shopify</div>
                </div>
                <h1 >Portfolio</h1>
                <div className="card-wrapper">
                    <RecipeFinder />
                    <TheObservatory />
                </div>

            </div>
        </>
    )
}

export default Portfolio;
