import React from 'react';
import WarStories from './WarStories'
import NodeJs from './NodeJs';
import MazeGame from './MazeGame'
import RecipeFinder from './RecipeFinder';
import TheObservatory from './TheObservatory';
import './portfolio.scss'



const Portfolio = () => {

    return (
        <>
        <div className="protfolio-container" id="portfolio">
                <h1 >Portfolio</h1>
            <div className="card-wrapper">
                <RecipeFinder />
                <TheObservatory />
            </div>
            <div className="card-wrapper">
                <NodeJs />
                <MazeGame />
            </div>
            <div className="card-wrapper">
                <WarStories />
            </div>
        </div>
       </>
    )
} 

export default Portfolio;
