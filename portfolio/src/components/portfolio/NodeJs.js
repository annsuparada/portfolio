import React from 'react';
import { Card, Icon } from 'antd';
import NodeJsImg from '../../img/node-js.png'

const { Meta } = Card;


const NodeJs = () => {

    return (
        <>
            <Card
                cover={
                <img
                    alt="Node JS"
                    src={NodeJsImg}
                />
                }
                actions={[
                <a href="https://github.com/bw-party-planner/backend" target="_blank">
                    <Icon type="github" key="github" />
                </a>,
                // <a href="#" target="_blank">
                //     <Icon type="global" key="global" />
                // </a>
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

export default NodeJs;
