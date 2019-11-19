import React from 'react';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

const Container = () => {

    return (
        <>
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <NavBar />
                </Header>
                <Content style={{ marginTop: 64, }}>
                    <Home />
                </Content>
            </Layout>
        </>
    )
} 

export default Container;
