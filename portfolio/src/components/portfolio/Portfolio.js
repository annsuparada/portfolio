import React from 'react';
import SpeakOut from './SpeakOut';
import WarStories from './WarStories'
import ClinicalTrialFinder from './ClinicalTrialFinder'
import NodeJs from './NodeJs';

import './portfolio.scss'



const Portfolio = () => {

    return (
        <>
        <div className="protfolio-container" id="portfolio">
                <h1 >Portfolio</h1>
            <div className="card-wrapper">
                <SpeakOut />
                <ClinicalTrialFinder />
                <WarStories />
            </div>
            <div className="card-wrapper">
                <NodeJs />
            </div>
        </div>
       </>
    )
} 

export default Portfolio;
