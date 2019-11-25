import React from 'react';
import { Card, Icon } from 'antd';
import Css from '../../img/css3.png'

const { Meta } = Card;


const WarStories = () => {

    return (
        <>
            <Card
                cover={
                <img
                    alt="War Stories"
                    src={Css}
                />
                }
                actions={[
                <a href="https://github.com/correlates-of-war-build-week/COW-User-Interface" target="_blank">
                    <Icon type="github" key="github" />
                </a>,
                <a href="https://warstories.netlify.com/" target="_blank">
                    <Icon type="global" key="global" />
                </a>
                ]}
            >
                <Meta
                title={<h6>War Stories</h6>}
                description={<p>
                   Using pure  HTML5, CSS and JavaScript. Designed responsive website for landing page and about page.  Worked directly with data scientist, front end,  back end developers. 
                    </p>}
                />
            </Card>
       </>
    )
} 

export default WarStories;
