import React, {Component} from 'react';
import {TimelineLite, Power1} from 'gsap/dist/gsap';

class Footer extends Component {
    constructor(props) {
        super(props);
            this.cloudFirst = null;
            this.cloudSecond = null;
            this.lightning = null;
            this.tl = new TimelineLite({paused: true});

            this.state = {
                active: false
            }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.animate);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.animate);
    }

    animate = () => {
        const footerSection = document.querySelector('.footer')
        
        this.tl.add('run');
        this.tl.to(this.cloudFirst, 3, {x: 150, y: 3, ease: Power1.easeInOut});
        this.tl.to(this.cloudFirst, 2, {x: 230, y: -3, delay: -1});
        this.tl.to(this.cloudFirst, 1, {opacity: .4, delay: -1});
        
        this.tl.to(this.cloudSecond, 3, {x: -150, y: -4, ease: Power1.easeInOut}, 'run');
        this.tl.to(this.cloudSecond, 2, {x: -230, y: 4, delay: -2});
        this.tl.to(this.cloudSecond, 1, {opacity: .4, delay: -1});

        this.tl.to(this.lightning, 1, {opacity: .4, delay: 2}, 'run');
        this.tl.to(this.lightning, 1, {opacity: 0, delay: -1.7},);

        if ((window.innerWidth >= 768 && window.innerWidth <= 992) && window.scrollY > footerSection.offsetTop -600 || (window.scrollY > footerSection.offsetTop - 420 || window.scrollY > footerSection.offsetTop - 500)) {
            this.tl.resume();
            this.setState({
                active: true
            })
        } else {
            this.setState({
                active: false
            })
        }
    }
    
    render() {
        const {active} = this.state; 
        return (
            <footer className="footer">
                <div>
                    <div ref={div => this.cloudFirst = div} className="footer__cloud footer__cloud-first"></div>
                    <div ref={div => this.cloudSecond = div} className="footer__cloud footer__cloud-second"></div>
                    <div ref={div => this.lightning = div} className="footer__lightning"></div>
                </div>
                
                <div className="footer-content">
                    <h2 className={active ?  'footer-content__phone-number active' : 'footer-content__phone-number'}>
                    <a href="tel:+48790737819">+48 790737819</a>
                    </h2>
                    
                    <ul className={active ? "footer-content__socials active" : "footer-content__socials"}>
                        <li><a href="https://www.facebook.com/arek.banas.9?ref=bookmarks"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        </li>
                        <li><a href="https://www.linkedin.com/in/arek-bana%C5%9B-6071a8180/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                        </li>
                        <li><a href="https://github.com/arekbanas-portfolio?tab=repositories"><i className="fa fa-github" aria-hidden="true"></i></a>
                        </li>
                    </ul>
                    
                    <h5 className="footer-content__copyright">Arkadiusz Banaś &copy;. Wszelkie prawa zastrzeżone</h5>
                </div>
            </footer>
         );
    }
}
 
export default Footer;