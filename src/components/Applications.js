import React, {Component} from 'react';
import WeatherApp from './WeatherApp';
import {Link} from 'react-router-dom';
import { Translation } from 'react-i18next';

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
            <section className="applications">
                <div className="applications__title">
                    <Translation>{t => <h1>{t('app')}</h1>}</Translation>
                </div>
                <div className="card">
                    <div onClick={this.toggleApp} className={activeApp ? "card__face card__face1 active" : "card__face card__face1"}>
                        <div className={activeApp ? "card__content active" : "card__content"}>
                            <Translation>{t => <h3>{t('weather-app')}</h3>}
                            </Translation>
                        </div>
                    </div>
                    <div className={activeApp ? "card__face card__face2 active" : "card__face card__face2"}>
                        <div className={activeApp ? "card__content active" : "card__content"}>
                            {showApp ? <WeatherApp/> : <Translation>{t => <p>{t('weather-app-content')}</p>}</Translation>}
                            <button className="button weather-button" onClick={this.handleShow}>{showApp ? <Translation>{t => <>{t('hide')}</>}</Translation> : <Translation>{t => <>{t('show')}</>}</Translation>}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div onClick={this.toggleApp2} className={activeApp2 ? "card__face card__face1 active" : "card__face card__face1"}>
                        <div className={activeApp2 ? "card__content active" : "card__content"}>
                            <Translation>{t => <h3>{t('recipe-app')}</h3>}
                            </Translation>
                        </div>
                    </div>
                    <div className={activeApp2 ? "card__face card__face2 active" : "card__face card__face2"}>
                        <div className={activeApp2 ? "card__content active" : "card__content"}>
                            <Translation>{t => <p>{t('recipe-app-content')}
                            </p>}</Translation>
                            <button className="button">
                                <Link to="/recipe-app">
                                    <Translation>{t => <>{t('show')}</>}
                                    </Translation>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Applications;