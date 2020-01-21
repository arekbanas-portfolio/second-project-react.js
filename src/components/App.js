import React, {Component} from 'react';
import './css/App.css';
import { SemipolarLoading } from 'react-loadingg';
import Header from './Header';
import Navigation from './Navigation';
import About from './About';
import Technologies from './Technologies';
import Applications from './Applications';
import Contact from './Contact';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        loading: true,
        active: false,
      }
  }

  componentDidMount() {
    this.handleLoading = setTimeout(() => this.setState({loading: false}), 1500)
  }

  componentWillUnmount() {
    if(this.handleLoading) {
      clearInterval(this.handleLoading)
    }
  }
  
  toggleHamburger = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (
      <>
      {this.state.loading ? <SemipolarLoading color="rgba(0,0,0,0.8)" size="large"/> : <div className="app">
        <nav>
          {<Navigation click={this.toggleHamburger} active={this.state.active}/>}
        </nav>
        <div>
          <header>
            {<Header/>}
          </header>
          <main>
            {<About/>}
          </main>
          <section>
            {<Technologies/>}
          </section>
          <section>
            {<Applications/>}
          </section>
          <section>
            {<Contact/>}
          </section>
          <footer>
            {<Footer/>}
          </footer>
          </div>
        </div>}
      </>
    )
  }
}

export default App;
