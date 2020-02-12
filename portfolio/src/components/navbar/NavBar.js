import React from 'react'
import { Link } from "react-scroll";
import './navbar.scss'

const NavBar = () => {

    return (
        <div className="nav">
            <Link activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-30}
                duration={1000}
            >
                About
            </Link>
            <Link activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-50}
                duration={1000}
            >
                Portfolio
            </Link>
            <Link activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={1000}
            >
                Contact
            </Link>

        </div>
    )
}

export default NavBar;
