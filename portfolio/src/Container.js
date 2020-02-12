import React from 'react';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import FooterBar from './components/footer/FooterBar';
import { Layout } from 'antd';

const {Footer, Content } = Layout;

const Container = () => {

    return (
        <>
            <Layout>
                <NavBar />
                <Content style={{ marginTop: 64, }}>
                    <Home />
                </Content>
                <Footer>
                    <FooterBar />
                </Footer>
            </Layout>
        </>
    )
} 

export default Container;
