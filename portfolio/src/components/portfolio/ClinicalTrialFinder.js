import React from 'react';
import { Card, Icon } from 'antd';
import ClinicalTrial from '../../img/clinicaltrial.png'

const { Meta } = Card;


const ClinicalTrialFinder = () => {

    return (
        <>
            <Card
                cover={
                <img
                    alt="Clinical Trial Finder"
                    src={ClinicalTrial}
                />
                }
                actions={[
                <a href="https://github.com/build-week-072019-clinical-trial-finder/clinical-trial-finder-FE" target="_blank">
                    <Icon type="github" key="github" />
                </a>,
                <a href="https://clinical-trial-finder.netlify.com/" target="_blank">
                    <Icon type="global" key="global" />
                </a>
                ]}
            >
                <Meta
                title={<h6>Clinical Trials Finder</h6>}
                description={
                    <p>Using React/Redux for front end and Semantic UI for responsive user interface. Worked directly with 
                    data scientist, back end and UI developers to make a better web application for users.
                    </p>}
                />
            </Card>
       </>
    )
} 

export default ClinicalTrialFinder;
