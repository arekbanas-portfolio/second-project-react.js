import React, {Component} from 'react';
import myImg from './images/me.jpg';
import {gsap} from 'gsap/dist/gsap';

class About extends Component {
    constructor(props) {
        super(props);
        this.myImage = null;
        this.border = null;
        
        this.state = {
          text: 'Jestem Arek. Moim celem jest zostać Junior Front-End Developerem. Oto mój drugi projekt wykonany przy użyciu biblioteki React - niebawem ulepszę go o wersję w języku angielskim oraz z pewnością rozbuduję o nowe aplikacje. Jeżeli widzisz we mnie potencjał - zapraszam do kontaktu.',
          index: 0,
          show: '',
          cursor: '|',
          active: false,
          section: false,
        }
    }
      
    componentDidMount() {
      window.addEventListener('scroll', this.addSection);
      this.typeWriter = setInterval(this.addLetter, 30);
      this.cursorTyping = setInterval(this.cursorAnimation, 500);
    }
      
    componentWillUnmount() {
      window.removeEventListener('scroll', this.addSection);
      clearInterval(this.typeWriter);
      clearInterval(this.cursorTyping);
    }

    addSection = () => {
      const sectionAbout = document.querySelector('.about-container');
      
      if(window.scrollY > sectionAbout.offsetTop - 400) {
        gsap.to(this.myImage, {x: -10, opacity: 1, duration: 1});
        gsap.to(this.border, {x: -30, opacity: 1, duration: .5})

        this.setState({
          section: true,
        })
      } else {
        gsap.to(this.myImage, {x: 0, opacity: 0, duration: .5});
        gsap.to(this.border, {x: 0, opacity: 0, duration: .5})
        
        this.setState({
          section: false,
          show: '',
          index: 0,
        })
      }
    }  
      
    addLetter = () => {
      const index = this.state.index;
      const letter = this.state.text.charAt(index);
      const textlength = this.state.text.length;
      
        if(index <= textlength) {
          this.setState({
            show: this.state.show + letter,
            index: index + 1,
        })
      }
    }

    cursorAnimation = () => {
        this.setState({
        cursor: this.state.cursor,
        active: !this.state.active,
      })
    }

    render() {
      const {show, active, cursor, section} = this.state;
        return ( 
            <div className='about-container'>
                <picture className='my-image'>
                  <img ref={img => this.myImage = img} src={myImg} alt="Me"/>
                  <span ref={span => this.border = span} className='border-image'>
                  </span>
                </picture>
                <article className={section ? 'type-writer active' : 'type-writer'}>     <p>{show}<span className={active ? 'cursor active' : 'cursor'}>        {cursor}</span>
                  </p>
                </article>
                <button className="first-project"><a href="http://www.arekbanas-portfolio.cba.pl">PIERWSZY PROJEKT (jQuery)</a>
                </button>
            </div>
        );
    }
}
 
export default About;