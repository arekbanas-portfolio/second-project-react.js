import React, {Component} from 'react';
import { SemipolarLoading } from 'react-loadingg';
import { Translation } from 'react-i18next';

class WeatherApp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: '',
            city: '',
            result: '',
            temp: '',
            temp_feels: '',
            temp_min: '',
            temp_max: '',
            sunrise: '',
            sunset: '',
            pressure: '',
            wind: '',
            icon: '',
            icon_alt: '',
            error: false,
            loader: false
         }
    }

handleInputChange = (e) => {
    this.setState({
        value: e.target.value
    })
}

handleCitySubmit = (e) => {
    e.preventDefault();
    const APIkey = 'c088de3f8e5b557ade3694c89f7738f4'
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIkey}&units=metric`

    fetch(API)
    .then(response => {
        if(response.ok) {
            return response
        }
        throw Error("Błąd połączenia")
    })
    .then(response => response.json())
    .then(response => {
        this.setState({
            loader: true
        })
        setTimeout(()=> {
            this.setState({
                loader: false
            })
        }, 1000)
        this.setState({
            error: false,
            result: response.name,
            temp: response.main.temp,
            temp_feels: response.main.feels_like,
            temp_min: response.main.temp_min,
            temp_max: response.main.temp_max,
            sunrise: response.sys.sunrise,
            sunset: response.sys.sunset,
            pressure: response.main.pressure,
            wind: response.wind.speed,
            icon: response.weather[0].icon,
            icon_alt: response.weather[0].description,
            city: this.state.value,
            value: ''
        })
    })
    .catch(error => {
        this.setState({
            error: true,
            city: this.state.value,
            value: ''
        })
    })
}

    render() {
        const {loader, error, sunrise, sunset, temp, temp_feels, temp_min, temp_max, pressure, wind, city, icon, icon_alt, result, value} = this.state;

        let content = null;

        if(!error && city) {
            const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
            const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
            const temperature = Math.floor(temp);
            const temperature_feels = Math.floor(temp_feels);
            const temperature_min = Math.floor(temp_min);
            const temperature_max = Math.floor(temp_max);
            const windSpeed = Math.floor(wind * 3.6);
            const iconurl = `https://openweathermap.org/img/w/${icon}.png`;

            content = (
                <div>
                    {loader ? <div className="loader">
                        <SemipolarLoading color="rgba(255,255,255,0.8)" size="large"/></div> : <div className="weather-app__content">
                        <h1>
                        <Translation>{t => <>{t('weather')}</>}
                        </Translation>{result}
                        </h1>
                        <img src={iconurl} alt={icon_alt} className="weather-app__icon"/>
                        <div>
                        <Translation>{t => <h2>{t('sunrise')}</h2>}
                        </Translation><h3>{sunriseTime}</h3>
                        </div>
                        <div>
                        <Translation>{t => <h2>{t('sunset')}</h2>}
                        </Translation><h3>{sunsetTime}</h3>
                        </div>
                        <div>
                        <Translation>{t => <h2>{t('temperature')}</h2>}
                        </Translation><h3>{temperature} &deg;C</h3>
                        </div>
                        <div>
                        <Translation>{t => <h2>{t('feels')}</h2>}
                        </Translation><h3>{temperature_feels} &deg;C</h3>
                        </div>
                        <div>
                        <h2>Temp. min.:</h2><h3>{temperature_min} &deg;C</h3>
                        </div>
                        <div><h2>Temp. max:</h2><h3>{temperature_max} &deg;C</h3></div>
                        <div>
                        <Translation>{t => <h2>{t('pressure')}</h2>}
                        </Translation><h3>{pressure} hPa</h3>
                        </div>
                        <div>
                        <Translation>{t => <h2>{t('wind')}</h2>}
                        </Translation><h3>{windSpeed} km/h</h3>
                        </div>
                    </div>}
                </div>
            )
        }
        
        return ( 
            <div className="weather-app">
                <form onSubmit={this.handleCitySubmit}>
                    <input 
                    type="text"
                    value={value}
                    onChange={this.handleInputChange}/>
                    <button className="button weather-button">
                        <Translation>{t => <>{t('search')}</>}
                        </Translation>
                    </button>
                </form>
                <div className="weather-app__result">
                    {city !== '' && error ? 
                    <Translation>{t => <>{t('no-informations')} {city}</>}</Translation> : content}
                </div>
            </div>

         );
    }
}
 
export default WeatherApp;