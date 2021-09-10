import React from 'react';
import { Card, Icon } from 'antd';

const { Meta } = Card;


const RecipeFinder = () => {

    return (
        <>
            <Card
                cover={
                    <img
                        alt="Clinical Trial Finder"
                        src="https://res.cloudinary.com/dejr86qx8/image/upload/v1597960724/recipeFinder_vrragu.jpg"
                    />
                }
                actions={[
                    <a href="https://github.com/annsuparada/recipe-search" target="_blank" rel="noopener noreferrer">
                        <Icon type="github" key="github" />
                    </a>,
                    <a href="https://myrecipefinder.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <Icon type="global" key="global" />
                    </a>
                ]}
            >
                <Meta
                    title={<h6>Recipe Finder</h6>}
                    description={
                        <div>
                            <p>
                            A recipe search web application that provides directions, ingredients, recipes, and nutritional facts. Users can search by ingredients, nutrition, calories and avoid food allergies.  
                            </p>
                            <p>Used <b>React/Redux</b> for front end and <b>Ant Design</b> for responsive user interface. 
                            Display and layout the information received from a 3rd party APIs.
                            CRUD operations drive the application. Created pages that complete all CRUD operations.
                            </p>
                        </div>

                    }
                />
            </Card>
        </>
    )
}

export default RecipeFinder;
