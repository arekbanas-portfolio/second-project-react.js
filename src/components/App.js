import React, {Component} from 'react';
import './css/App.css';
import Header from './Header';
import Navigation from './Navigation';
import About from './About';
import Technologies from './Technologies';
import Applications from './Applications';
import Contact from './Contact';
import Footer from './Footer';
import { LoopCircleLoading } from 'react-loadingg';
import { Preloader, Placeholder } from 'react-preloading-screen';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        active: false,
      }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.changeOpacity);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeOpacity);
  }

  changeOpacity = (props) => {
    const header = document.querySelector("header");
    let scrollPosition = window.scrollY;
    const height = header.offsetHeight;
    let calc = 1 - scrollPosition / height;

    header.style.opacity = calc;

    if (calc > 1) {
      header.style.opacity = 1;
    } else if (calc < 0) {
      header.style.opacity = 0;
    }
  }
  
  toggleHamburger = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (
      <Preloader>
      <div className="app">
        {<Navigation click={this.toggleHamburger} active={this.state.active}/>}
        {<Header opacity={this.changeOpacity}/>}
        <main className="desktop-wrapper">
          <About/>
          <Technologies/>
          <Applications/>
          <Contact/>
        </main>
        <Footer/>
      </div>
      <Placeholder>
        <span><LoopCircleLoading color="rgba(0,0,0,0.8)" size="large"/></span>
      </Placeholder>
      </Preloader>
    )
  }
}

export default App;
