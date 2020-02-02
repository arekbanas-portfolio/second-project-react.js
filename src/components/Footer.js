import React, {Component} from 'react';
import {gsap, TimelineLite, Power1} from 'gsap/dist/gsap';

class Footer extends Component {
    constructor(props) {
        super(props);
            this.cloudFirst = null;
            this.cloudSecond = null;
            this.lightning = null;
            this.phoneNumber = null;
            this.socials = null;
            this.tl = new TimelineLite({paused: true});
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

        if ((window.innerWidth >= 768 && window.innerWidth <= 992 && window.scrollY > footerSection.offsetTop -600) || window.scrollY > footerSection.offsetTop - 420 || window.scrollY > footerSection.offsetTop - 500) {
            gsap.to(this.phoneNumber, {y: -20, opacity: 1, duration: 1, delay: .5})
            gsap.to(this.socials, {y: -20, opacity: 1, duration: 1, delay: 1})
            
            this.tl.resume();
        } else {
            gsap.to(this.phoneNumber, {y: 0, opacity: 0, duration: 1, delay: .5})
            gsap.to(this.socials, {y: 0, opacity: 0, duration: 1, delay: 1})
        }
    }
    
    render() {
        return (
            <footer className="footer">
                <div>
                    <div ref={div => this.cloudFirst = div} className="footer__cloud footer__cloud-first"></div>
                    <div ref={div => this.cloudSecond = div} className="footer__cloud footer__cloud-second"></div>
                    <div ref={div => this.lightning = div} className="footer__lightning"></div>
                </div>
                
                <div className="footer-content">
                    <h1 ref={h1 => this.phoneNumber = h1} className="footer-content__phone-number">
                    <a href="tel:+48790737819">+48 790737819</a>
                    </h1>
                    
                    <ul ref={ul => this.socials = ul} className="footer-content__socials">
                        <li><a name="facebook" href="https://www.facebook.com/arek.banas.9?ref=bookmarks"><i className="fa fa-facebook"></i></a>
                        </li>
                        <li><a name="facebook" href="https://www.linkedin.com/in/arek-bana%C5%9B-6071a8180/"><i className="fa fa-linkedin"></i></a>
                        </li>
                        <li><a name="facebook" href="https://github.com/arekbanas-portfolio?tab=repositories"><i className="fa fa-github"></i></a>
                        </li>
                    </ul>
                    
                    <h3 className="footer-content__copyright">Arkadiusz Banaś &copy;. Wszelkie prawa zastrzeżone</h3>
                </div>
            </footer>
         );
    }
}
 
export default Footer;