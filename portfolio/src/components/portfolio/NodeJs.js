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
           
                ]}
            >
                <Meta
                title={<h6>Node JS</h6>}
                description={
                    <div>
                        <p>
                            Developed APIs for party planner web application. Features are shopping list, to-do list, budget list, and category.
                        </p>
                        <p>
                            Using <b>Node JS, Express, PosgreSQL</b> build content management system. Created custom authentication using <b>JSON Web token</b>.  Worked directly with front end and UI developers.
                        </p>
                    </div>
                    }
                />
            </Card>
       </>
    )
} 

export default NodeJs;
