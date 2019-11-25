import React from 'react'
import Home from '../../img/home.png'
import { goToTop } from 'react-scrollable-anchor'
import './footerBar.scss'

const FooterBar = () => {

    return (
        <div className="footer">
            <p>Coppyright 2019</p>
            <img src={Home} onClick={goToTop} />
            <p>Suparada Saitalae</p>
        </div>
    )
} 

export default FooterBar;
