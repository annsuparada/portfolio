import React from 'react';
import { Card, Icon, Avatar } from 'antd';
import SpeakOut from './SpeakOut';
import WarStories from './WarStories'
import ClinicalTrialFinder from './ClinicalTrialFinder'
import './portfolio.scss'



const Portfolio = () => {

    return (
        <>
        <div className="protfolio-container">
        <h1>Portfolio</h1>
        <div className="card-wrapper">
            <SpeakOut />
            <ClinicalTrialFinder />
            <WarStories />
        </div>

        </div>
       </>
    )
} 

export default Portfolio;
