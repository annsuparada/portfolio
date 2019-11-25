import React from 'react'
import { Menu } from 'antd';
import './navbar.scss'

const NavBar = () => {

    return (
        <>
            <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1"><a href='#portfolio'>PORTFOLIO</a></Menu.Item>
                <Menu.Item key="2"><a href='#about'>ABOUT</a></Menu.Item>
                <Menu.Item key="3"><a href='#contact'>CONTACT</a></Menu.Item>
            </Menu>
        </>
    )
} 

export default NavBar;
