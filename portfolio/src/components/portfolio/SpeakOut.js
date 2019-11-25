import React from 'react';
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;


const SpeakOut = () => {

    return (
        <>
            <Card
                cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
                }
                actions={[
                <Icon type="github" key="github" />,
                <Icon type="global" key="global" />,
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
