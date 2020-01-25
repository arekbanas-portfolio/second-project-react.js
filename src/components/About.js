import React, {Component} from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
          text: 'Witam, mam na imię Arek. Chciałbym zacząć prację jako Junior Front-End Developer. Jest to mój drugi projekt wykonany przy użyciu biblioteki React. W niedalekiej przyszłości, myślę zrobić tą stronę dwujęzyczna, oraz oczywiście dołożyć nowe aplikacje. Jeżeli zainteresował Cię mój projekt zapraszam do kontaktu. Pozdrawiam.',
          index: 0,
          show: '',
          cursor: '|',
          active: false,
          section: false,
        }
    }
      
    componentDidMount() {
      window.addEventListener('scroll', this.addSection);
      this.typeWriter = setInterval(this.addLetter, 20);
      this.cursorTyping = setInterval(this.cursorAnimation, 500);
    }
      
    componentWillUnmount() {
      window.removeEventListener('scroll', this.addSection);
      clearInterval(this.typeWriter);
    }

    addSection = () => {
      const sectionAbout = document.querySelector('.about-container');
      
      if(window.scrollY > sectionAbout.offsetTop + 200) {
        this.setState({
          section: true,
        })
      } else {
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
            <main className='about-container'>
                <div className={section ? 'my-image active' : 'my-image'}>
                  <span className={section ? 'border-image active' : 'border-image'}>
                  </span>
                </div>
                <div className={section ? 'type-writer active' : 'type-writer'}>{show}
                  <span className={active ? 'cursor active' : 'cursor'}>{cursor}</span>
                </div>
                <div className="first-project"><a href="http://www.arekbanas-portfolio.cba.pl">PIERWSZY PROJEKT (jQuery)</a></div>
            </main>
        );
    }
}
 
export default About;