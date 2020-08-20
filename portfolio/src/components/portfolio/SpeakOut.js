import React from 'react';
import { Card, Icon } from 'antd';

const { Meta } = Card;


const SpeakOut = () => {

    return (
        <>
            <Card
                cover={
                <img
                    alt="Speak Out"
                    src={`https://res.cloudinary.com/dejr86qx8/image/upload/c_scale,q_58,w_600/v1582335482/speak-out_qbm0wj.png`}
                />
                }
                actions={[
                <a href="https://speakout-now.com/" target="_blank" rel="noopener noreferrer">
                    <Icon type="global" key="global" />
                </a>
                ]}
            >
                <Meta
                title={<h6>Speak Out</h6>}
                description={
                    <div>
                    <p>
                    A language school in Bahrain that provides quality, affordable language learning to the community.   
                    </p>
                    <p> 
                    Using <b>React/Redux</b> for front-end and <b>Styled Components</b>,  
                     <b>Ant Design</b> for UI.  Worked directly with a UX designer. Interviewed stakeholder. 
                      Researched customer and competitor for analysis.
                    </p>
                    </div>
                    }
                />
            </Card>
       </>
    )
} 

export default SpeakOut;
