import React from 'react'
import Home from '../../img/home.png'
import { Link } from "react-scroll";
import './footerBar.scss'

const FooterBar = () => {

    return (
        <div className="footer">
            <p>Coppyright 2019</p>
            <Link activeClass="active"
                to="header"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={1000}
            >
                <img src={Home} />
            </Link>
            <p>Suparada Saitalae</p>
        </div>
    )
}

export default FooterBar;
