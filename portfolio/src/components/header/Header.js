import React from 'react'
import { Button } from 'antd';
import './header.scss'

const Header = () => {

    return (
        <>
            <div className="heading">
                <div className="text-header">
                    <h1>Ann Suparada Keller</h1>
                    <h2>Full-Stack Web Developer</h2>
                    <Button type="primary">Contact</Button>
                </div>
                
            </div>
       </>
    )
} 

export default Header;
