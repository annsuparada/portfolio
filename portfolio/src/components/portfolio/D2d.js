import React from 'react';
import { Card, Icon } from 'antd';

const { Meta } = Card;


const D2d = () => {

    return (
        <>
            <Card
                cover={
                    <img
                        alt="Draft2Digital"
                        src="https://res.cloudinary.com/dejr86qx8/image/upload/v1631284662/d2d_kou7qh.jpg"
                    />
                }
                actions={[
                    <a href="√" target="_blank" rel="noopener noreferrer">
                        <Icon type="global" key="global" />
                    </a>
                ]}
            >
                <Meta
                    title={<h6>Draft2Digital</h6>}
                    description={
                        <div>
                            <p>
                            A publishing company provides a simple process to turn authors' documents into professionally-formatted ebooks and release them through all the industry's most powerful sales channels.
                            </p>
                            <p>
                            Develop server-side and client-side features using <b>React, Redux, Python, and Django</b>. Maintain existing features such as document conversion, ebook generation, ebook, and metadata distribution to third parties. Implement new features as the company continues to grow.
                            </p>
                        </div>

                    }
                />
            </Card>
        </>
    )
}

export default D2d;
