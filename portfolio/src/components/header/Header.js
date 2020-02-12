import React from 'react'
import { Link } from "react-scroll";
import { Button } from 'antd';
import './header.scss'

const Header = () => {

    return (
        <>
            <div className="heading" id="header">
                <div className="text-header">
                    <h1>Suparada Saitalae</h1>
                    <h4>Full-Stack Web Developer</h4>

                    <Button type="primary">
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
                    </Button>

                </div>

            </div>
        </>
    )
}

export default Header;
