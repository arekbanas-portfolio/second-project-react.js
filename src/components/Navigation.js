import React from 'react';
import {Link} from "react-scroll";
import {useTranslation} from 'react-i18next';

const Navigation = (props) => {
    const { t, i18n } = useTranslation();
    return (
        <nav aria-labelledby="mainNav" role="navigation">
            <div>
                <button onClick={props.click} className={props.active ? 'hamburger active' : 'hamburger'}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div className={props.active ? 'nav-container active' : 'nav-container'}>
                <div className="main-nav">
                    <div className={props.active ? "main-nav__select-lng active" : "main-nav__select-lng"}>
                        <i className="fa fa-language"></i>
                        <select onClick={props.hide}>
                            <option className="option1" onClick={() => i18n.changeLanguage('pl')}>PL</option>
                            <option className="option2" onClick={() => i18n.changeLanguage('en')}>EN</option>
                        </select>
                    </div>
                    <ul className={props.active ? 'menu active' : 'menu'}>
                        <li>MENU</li>
                        <span className={props.active ? 'border active' : 'border'}></span>
                        <li role="presentation">
                        <Link onClick={props.click}
                            activeClass="active"
                            to="header"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration= {1000}>
                        {t('homepage')}
                        </Link></li>
                        
                        <li role="presentation">
                        <Link onClick={props.click}
                            activeClass="active"
                            to="about-container"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration= {1000}>
                        {t('about')}
                        </Link></li>
                        
                        <li role="presentation">
                        <Link onClick={props.click}
                            activeClass="active"
                            to="applications"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration= {1000}>
                        {t('applications')}
                        </Link></li>

                        <li role="presentation">
                        <Link onClick={props.click}
                            activeClass="active"
                            to="form-contact-wrapper"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {1000}>
                        {t('contact')}
                        </Link></li>
                    </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navigation;