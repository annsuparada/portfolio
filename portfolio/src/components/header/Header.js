import React from 'react'
import { Button } from 'antd';
import ScrollableAnchor from 'react-scrollable-anchor'
import './header.scss'

const Header = () => {

    return (
        <>
            <div className="heading">
                <div className="text-header">
                    <h1>Suparada Saitalae</h1>
                    <h4>Full-Stack Web Developer</h4>
                    
                    <Button type="primary"><a href='#contact'>Contact</a></Button>
                   
                </div>
                
            </div>
       </>
    )
} 

export default Header;
