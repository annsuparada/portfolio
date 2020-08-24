import React from 'react'
import Home from '../../img/home.png'
import { Link } from "react-scroll";
import './footerBar.scss'

const FooterBar = () => {

    return (
        <div className="footer">
            <div className="footer-box">
            <p>Coppyright 2020</p>
            <Link activeClass="active"
                to="header"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={1000}
                >
                <img src={Home} alt="home logo"/>
            </Link>
            <p>Ann Keller</p>
                </div>
        </div>
    )
}

export default FooterBar;
