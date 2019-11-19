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
                <Menu.Item key="1">PORTFOLIO</Menu.Item>
                <Menu.Item key="2">ABOUT</Menu.Item>
                <Menu.Item key="3">CONTACT</Menu.Item>
            </Menu>
        </>
    )
} 

export default NavBar;
