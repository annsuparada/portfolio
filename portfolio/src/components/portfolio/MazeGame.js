import React from 'react';
import { Card, Icon } from 'antd';
import game from '../../img/game.png'

const { Meta } = Card;


const MazeGame = () => {

    return (
        <>
            <Card
                cover={
                <img
                    alt="Node JS"
                    src={game}
                />
                }
                actions={[
                <a href="https://github.com/Cakewalk-CS/CS-Build-Week-1" target="_blank">
                    <Icon type="github" key="github" />
                </a>,
                 <a href="https://cocky-davinci-344c63.netlify.com/" target="_blank">
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
                        Using <b>Python, Django, and PosgreSQL</b> to developed APIs for a web application.  Worked directly with front-end and UI developers.
                        </p>
                    </div>
                    }
                />
            </Card>
       </>
    )
} 

export default MazeGame;
