import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import SpeakOut from './SpeakOut';
import WarStories from './WarStories'
import ClinicalTrialFinder from './ClinicalTrialFinder'
import NodeJs from './NodeJs';

import './portfolio.scss'



const Portfolio = () => {

    return (
        <>
        <div className="protfolio-container">
            <ScrollableAnchor id={'portfolio'}>
                <h1>Portfolio</h1>
            </ScrollableAnchor>
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
