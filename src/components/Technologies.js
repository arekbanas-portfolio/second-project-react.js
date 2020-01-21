import React, {Component} from 'react';
import BackgroundVideo from './images/Forest.mp4'

class Technologies extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            technologies: ['HTML5', 'CSS3 (SCSS)', 'BEM', 'GSAP', 'JavaScript (ES6)', 'jQuery', 'React.js'],
            show: '',
            loopNum: 0,
            isDeleting: false,
            typingSpeed: 100,
            cursor: '|',
            active: false
        }
    }

    componentDidMount() {
        this.typeWriter = setInterval(this.addLetter, 100);
        this.cursorTyping = setInterval(this.cursorAnimation, 500);
    }

    componentWillUnmount() {
        clearInterval(this.typeWriter);
    }

    addLetter = () => {
        const {technologies, show, loopNum, isDeleting} = this.state;
        const index = loopNum % technologies.length;
        const fullText = technologies[index];

        this.setState({
            show: isDeleting ? fullText.substring(0, show.length - 1) : fullText.substring(0, show.length + 1),
            typingSpeed: isDeleting ? 40 : 100
        })

        if (!isDeleting & show === fullText) {
            setTimeout(() => this.setState({isDeleting: true}), 500);
        } else if (isDeleting && show === '') {
            this.setState({
                isDeleting: false,
                loopNum: loopNum + 1
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
        const {cursor, active} = this.state;

        return ( 
            <section className="technologies-container">
                <h2>Technolgie:</h2>
                <h3>{this.state.show}
                <span className={active ? 'cursor active' : 'cursor'}>{cursor}</span>
                </h3>
                <video src={BackgroundVideo} autoPlay loop playsInline muted>
                </video>
            </section>
         );
    }
}
 
export default Technologies;