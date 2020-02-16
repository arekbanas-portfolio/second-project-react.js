import React, {Component} from 'react';
import myImg from './images/me.jpg';
import {gsap} from 'gsap/dist/gsap';
import { Translation } from 'react-i18next';

class About extends Component {
    constructor(props) {
        super(props);
        this.myImage = null;
        this.border = null;
        this.content = null;
        this.btn = null;
    }
      
    componentDidMount() {
      window.addEventListener('scroll', this.addSection);
    }
      
    componentWillUnmount() {
      window.removeEventListener('scroll', this.addSection);
    }

    addSection = () => {
      const sectionAbout = document.querySelector('.about-container');
      
      if(window.scrollY > sectionAbout.offsetTop - 350 || (window.scrollY > sectionAbout.offsetTop - 400 && window.innerWidth >= 992)) {
        gsap.to(this.myImage, {x: -10, opacity: 1, duration: 1});
        gsap.to(this.border, {x: -30, opacity: 1, duration: .5});
      } else {
        gsap.to(this.myImage, {x: 0, opacity: 0, duration: .5});
        gsap.to(this.border, {x: 0, opacity: 0, duration: .5});
      }

      if(window.scrollY > sectionAbout.offsetTop - 200  || (window.scrollY > sectionAbout.offsetTop - 300 && window.innerWidth >= 992)) {
        gsap.to(this.content, {x: 0, opacity: 1, duration: 1});
      } else {
        gsap.to(this.content, {x: -10, opacity: 0, duration: .5});
      }

      if(window.scrollY > sectionAbout.offsetTop  || (window.scrollY > sectionAbout.offsetTop - 200 && window.innerWidth >= 992)) {
        gsap.to(this.btn, {y: 0, opacity: 1, duration: 1});
      } else {
        gsap.to(this.btn, {y: 10, opacity: 0, duration: .5});
      }
    }
    

    render() {
        return ( 
            <div className='about-container'>
                <picture className='my-image'>
                  <img ref={img => this.myImage = img} src={myImg} alt="Me"/>
                  <span ref={span => this.border = span} className='border-image'>
                  </span>
                </picture>
                <article className='type-writer' ref={article => this.content = article}>
                  <Translation>{t => <p>{t('about-me')}</p>}
                  </Translation>
                </article>
                <button ref={button => this.btn = button} className="first-project">
                  <a href="http://www.arekbanas-portfolio.cba.pl">
                  <Translation>{t => <>{t('first-project')}</>}</Translation></a>
                </button>
            </div>
        );
    }
}
 
export default About;