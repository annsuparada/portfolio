import React from 'react';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import FooterBar from './components/footer/FooterBar';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

const Container = () => {

    return (
        <>
            <Layout>
                <Header >
                    <NavBar />
                </Header>
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
