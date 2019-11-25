import React from 'react'
import { Button } from 'antd';
import './header.scss'

const Header = () => {

    return (
        <>
            <div className="heading">
                <div className="text-header">
                    <h1>Ann Suparada Keller</h1>
                    <h4>Full-Stack Web Developer</h4>
                    <Button type="primary">Contact</Button>
                </div>
                
            </div>
       </>
    )
} 

export default Header;
