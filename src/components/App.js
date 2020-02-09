import React, {Component} from 'react';
import './css/App.css';
import Header from './Header';
import Navigation from './Navigation';
import About from './About';
import Technologies from './Technologies';
import Applications from './Applications';
import Contact from './Contact';
import Footer from './Footer';
import { SemipolarLoading } from 'react-loadingg'

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        active: false,
        loader: undefined
      }
  }

  componentDidMount() {
    document.addEventListener("readystatechange", this.showContent);
    window.addEventListener("scroll", this.changeOpacity);
  }

  componentWillUnmount() {
    document.removeEventListener("readystatechange", this.showContent);
    window.removeEventListener("scroll", this.changeOpacity);
  }

  showContent = () => {
    switch (document.readyState) {
      case "interactive":
        this.setState({
          loader: true
        })
        break;
      case "complete":
        this.setState({
          loader: false
        })
        break;
      default:
        break;
    }
  }

  changeOpacity = (props) => {
    let header = document.querySelector(".header");
    let scrollPosition = window.scrollY;
    let height = header.offsetHeight;
    let calc = 1 - scrollPosition / height;

    header.style.opacity = calc;

    if (calc > 1) {
      header.style.opacity = 1;
    } else if (calc < 0) {
      header.style.opacity = 0;
    }
  }
  
  toggleHamburger = (props) => {
    this.setState({
      active: !this.state.active
    })
  }

  hideSelected = (props) => {
    const options = document.querySelectorAll("option")
    options.forEach(option => {
      if (option.selected) {
        option.style.display = "none"
      } else {
        option.style.display = "block"
      }
    })
  }

  render() {
    return (
      <>
      {this.state.loader ? <SemipolarLoading color="rgba(0,0,0,0.8)" size="large"/> : <div className="app">
        {<Navigation click={this.toggleHamburger} active={this.state.active} hide={this.hideSelected}/>}
        {<Header opacity={this.changeOpacity}/>}
        <main className="desktop-wrapper">
          <About/>
          <Technologies/>
          <Applications/>
          <Contact/>
        </main>
        <Footer/>
      </div>}
      </>
    )
  }
}

export default App;
