import React from 'react';
import { Card, Icon } from 'antd';

const { Meta } = Card;


const ClinicalTrialFinder = () => {

    return (
        <>
            <Card
                cover={
                    <img
                        alt="Clinical Trial Finder"
                        src={`https://res.cloudinary.com/dejr86qx8/image/upload/c_scale,w_600/v1582335474/clinicaltrial_cavpjm.png`}
                    />
                }
                actions={[
                    <a href="https://github.com/build-week-072019-clinical-trial-finder/clinical-trial-finder-FE" target="_blank" rel="noopener noreferrer">
                        <Icon type="github" key="github" />
                    </a>,
                    <a href="https://clinical-trial-finder.netlify.com/" target="_blank" rel="noopener noreferrer">
                        <Icon type="global" key="global" />
                    </a>
                ]}
            >
                <Meta
                    title={<h6>Clinical Trials Finder</h6>}
                    description={
                        <div>
                            <p>
                            A web application that helps patients connect with potentially life-saving cutting-edge empirical treatments.
                            </p>
                            <p>Using <b>React/Redux</b> for front end and <b>Semantic UI</b> for responsive user interface. Worked directly with
                            data scientists, back-end and UI developers to make a better web application for users.
                            </p>
                        </div>

                    }
                />
            </Card>
        </>
    )
}

export default ClinicalTrialFinder;
