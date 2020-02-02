import React from 'react';

const Header = (props) => {
    return (
        <header onChange={props.opacity} className="header">
            <h1>Arkadiusz Banaś</h1>
            <h2>Junior Front-End Developer</h2>
                <ul className="header__socials">
                    <li><a name="facebook" href="https://www.facebook.com/arek.banas.9?ref=bookmarks"><i className="fa fa-facebook"></i></a>
                    </li>
                    <li><a name="linkedin" href="https://www.linkedin.com/in/arek-bana%C5%9B-6071a8180/"><i className="fa fa-linkedin"></i></a>
                    </li>
                    <li><a name="github" href="https://github.com/arekbanas-portfolio?tab=repositories"><i className="fa fa-github"></i></a>
                    </li>
                </ul>
                <div className="header__wave header__wave1"></div>
                <div className="header__wave header__wave2"></div>
                <div className="header__wave header__wave3"></div>
                <div className="header__wave header__wave4"></div>
        </header>
      );
}
 
export default Header;