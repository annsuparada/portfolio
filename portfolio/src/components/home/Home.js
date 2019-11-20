import React from 'react';
import Header from '../header/Header';
import About from '../about/About';
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contact/Contact';

import './home.scss'

const Home = () => {

    return (
        <>
            <Header />
            <About />
            <Portfolio />
            <Contact />
       </>
    )
} 

export default Home;
