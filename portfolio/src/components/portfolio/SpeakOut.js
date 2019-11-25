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
                title={<h6>Title</h6>}
                description={<p>This is the description This is the description This is the description This is the description This is the description</p>}
                />
            </Card>
       </>
    )
} 

export default SpeakOut;
