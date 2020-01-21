import React from 'react';
import {Link} from "react-scroll";

const Navigation = (props) => {
    return (
        <nav>
            <div>
                <div onClick={props.click} className={props.active ? 'hamburger active' : 'hamburger'}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={props.active ? 'nav-container active' : 'nav-container'}>
                <div className="main-nav">
                    <ul className={props.active ? 'menu active' : 'menu'}>
                        <li>MENU</li>
                        <span className={props.active ? 'border active' : 'border'}></span>
                        <li><Link onClick={props.click}
                            activeClass="active"
                            to="header"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration= {1000}>
                        STRONA GŁÓWNA</Link></li>
                        <li><Link onClick={props.click}
                            activeClass="active"
                            to="about-container"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration= {1000}>
                        O MNIE</Link></li>
                        <li><Link onClick={props.click}
                            activeClass="active"
                            to="applications"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration= {1000}>
                        APLIKACJE</Link></li>
                        <li><Link onClick={props.click}
                            activeClass="active"
                            to="form-contact-wrapper"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration= {1000}>
                        KONTAKT</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navigation;