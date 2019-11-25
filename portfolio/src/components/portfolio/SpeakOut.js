import React from 'react';
import { Card, Icon } from 'antd';
import SpeakOutImg from '../../img/speak-out.png';

const { Meta } = Card;


const SpeakOut = () => {

    return (
        <>
            <Card
                cover={
                <img
                    alt="Speak Out"
                    src={SpeakOutImg}
                />
                }
                actions={[
                <a href="https://speakout-now.com/" target="_blank">
                    <Icon type="global" key="global" />
                </a>
                ]}
            >
                <Meta
                title={<h6>Speak Out</h6>}
                description={<p>
                    Using React/Redux for front end and Styled Components, Ant Design for UI. Worked directly with UX designer. Interviewed stakeholder. Rearched customer and competitor for analysis.
                    </p>}
                />
            </Card>
       </>
    )
} 

export default SpeakOut;
