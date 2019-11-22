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
                title="Card title"
                description="This is the description This is the description This is the description This is the description This is the description "
                />
            </Card>
       </>
    )
} 

export default ClinicalTrialFinder;
