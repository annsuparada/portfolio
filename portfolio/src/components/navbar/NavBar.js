import React from 'react'
import { Link } from "react-scroll";
import './navbar.scss'

const NavBar = () => {

    return (
        <div className="nav">
            <Link 
                to="about"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-100}
                duration={1000}
            >
                About
            </Link>
            <Link 
                to="portfolio"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-50}
                duration={1000}
            >
                Portfolio
            </Link>
            <Link 
                to="contact"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={1000}
            >
                Contact
            </Link>

        </div>
    )
}

export default NavBar;
