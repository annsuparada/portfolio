import React from "react";
import RecipeFinder from "./RecipeFinder";
import TheObservatory from "./TheObservatory";
import Perflo from "./Perflo";
import D2d from "./D2d";
import "./portfolio.scss";

const Portfolio = () => {
  return (
    <>
      <div className="protfolio-container" id="portfolio">
        <h1>Skills</h1>
        <div className="skills">
          <div>
            <p>HTML5</p>
          </div>
          <div>
            <p>CSS</p>
          </div>
          <div>
            <p>Javascript</p>
          </div>
          <div>
            <p>React</p>
          </div>
          <div>
            <p>Redux</p>
          </div>
          <div>
            <p>Bootstrap</p>
          </div>
          <div>
            <p>Node JS</p>
          </div>
          <div>
            <p>Express</p>
          </div>
          <div>
            <p>Postgres</p>
          </div>
          <div>
            <p>Python</p>
          </div>
          <div>
            <p>Django</p>
          </div>
          <div>
            <p>Flask</p>
          </div>
          <div>
            <p>Shopify</p>
          </div>
          <div>
            <p>MongoDB</p>
          </div>
          <div>
            <p>Mongoose</p>
          </div>
        </div>
        <h1>Portfolio</h1>
        <div className="card-wrapper">
            <D2d />
            <RecipeFinder />
            <TheObservatory />
            <Perflo />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
