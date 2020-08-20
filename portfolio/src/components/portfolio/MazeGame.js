import React from 'react';
import { Card, Icon } from 'antd';

const { Meta } = Card;


const MazeGame = () => {

    return (
        <>
            <Card
                cover={
                <img
                    alt="Node JS"
                    src={`https://res.cloudinary.com/dejr86qx8/image/upload/c_scale,w_600/v1582335476/game_sopq8t.png`}
                />
                }
                actions={[
                <a href="https://github.com/Cakewalk-CS/CS-Build-Week-1" target="_blank" rel="noopener noreferrer">
                    <Icon type="github" key="github" />
                </a>,
                 <a href="https://cocky-davinci-344c63.netlify.com/" target="_blank" rel="noopener noreferrer">
                    <Icon type="global" key="global" />
                </a>
           
                ]}
            >
                <Meta
                title={<h6>Ori's Galaxy Quest</h6>}
                description={
                    <div>
                        <p>
                        A maze game for children with a galaxy theme and cartoon character. It can move 4 directions to get out of the maze.
                        </p>
                        <p>
                        Used <b>Python, Django, and PosgreSQL</b> to developed APIs for a web application.  Worked directly with front-end and UI developers.
                        </p>
                    </div>
                    }
                />
            </Card>
       </>
    )
} 

export default MazeGame;
