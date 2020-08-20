import React from 'react';
import { Card, Icon } from 'antd';

const { Meta } = Card;


const WarStories = () => {

    return (
        <>
            <Card
                cover={
                    <img
                        alt="War Stories"
                        src={`https://res.cloudinary.com/dejr86qx8/image/upload/c_scale,w_600/v1582335467/css3_ojw5ac.png`}
                    />
                }
                actions={[
                    <a href="https://github.com/correlates-of-war-build-week/COW-User-Interface" target="_blank" rel="noopener noreferrer">
                        <Icon type="github" key="github" />
                    </a>,
                    <a href="https://warstories.netlify.com/" target="_blank" rel="noopener noreferrer">
                        <Icon type="global" key="global" />
                    </a>
                ]}
            >
                <Meta
                    title={<h6>War Stories</h6>}
                    description={
                        <div>
                            <p>
                                A web application about war stats and provide you with a percentage of how likely your region will be in war.
                            </p>
                            <p>
                                Used pure  <b>HTML5, CSS and JavaScript</b>. Designed responsive website for landing page and about page.  Worked directly with data scientist, front end,  back end developers.
                            </p>
                        </div>
                    }
                />
            </Card>
        </>
    )
}

export default WarStories;
