import React, {Component} from 'react';
import WeatherApp from './WeatherApp';
import {Link} from 'react-router-dom';

class Applications extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            activeApp: false,
            activeApp2: false,
            showApp: false,
         }
    }

    toggleApp = () => {
        this.setState({
          activeApp: !this.state.activeApp
        })
      }
    
      toggleApp2 = () => {
        this.setState({
          activeApp2: !this.state.activeApp2
        })
      }

      handleShow = () => {
          this.setState({
              showApp: !this.state.showApp
          })
      }

    render() { 
        const {activeApp, activeApp2, showApp} = this.state;
        return ( 
            <section>
            <div className="applications">
                <div className="applications__title"><h2>Aplikacje:</h2></div>
                    <div className="card">
                        <div onClick={this.toggleApp} className={activeApp ? "card__face card__face1 active" : "card__face card__face1"}>
                            <div className={activeApp ? "card__content active" : "card__content"}>
                                <h3>POGODOWA</h3>
                            </div>
                        </div>
                        <div className={activeApp ? "card__face card__face2 active" : "card__face card__face2"}>
                            <div className={activeApp ? "card__content active" : "card__content"}>
                                {showApp ? <WeatherApp/> : <p>Aplikacja pogodowa, wykorzystująca dane z API.</p>}
                                <button className="button" onClick={this.handleShow}>{showApp ? "UKRYJ" : "POKAŻ"}</button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div onClick={this.toggleApp2} className={activeApp2 ? "card__face card__face1 active" : "card__face card__face1"}>
                            <div className={activeApp2 ? "card__content active" : "card__content"}>
                                <h3>Recipe App</h3>
                            </div>
                        </div>
                        <div className={activeApp2 ? "card__face card__face2 active" : "card__face card__face2"}>
                            <div className={activeApp2 ? "card__content active" : "card__content"}>
                                <p>Wyszukiwarka przepisów również korzystająca z API. (wer. ANG)</p>
                                <button className="button">
                                    <Link to="/recipe-app">WEJDŹ</Link>
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
        );
    }
}

export default Applications;