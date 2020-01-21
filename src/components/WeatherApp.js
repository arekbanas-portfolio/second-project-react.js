import React, {Component} from 'react';
import { SemipolarLoading } from 'react-loadingg';

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
                        <h2>Pogoda dla: {result}</h2>
                        <img src={iconurl} alt={icon_alt} className="weather-app__icon"/>
                        <div><h3>Wschód słońca:</h3><h4>{sunriseTime}</h4></div>
                        <div><h3>Zachód słońca:</h3><h4>{sunsetTime}</h4></div>
                        <div><h3>Temperatura:</h3><h4>{temperature} &deg;C</h4></div>
                        <div><h3>Odczuwalna:</h3><h4>{temperature_feels} &deg;C</h4></div>
                        <div><h3>Temp. min.:</h3><h4>{temperature_min} &deg;C</h4></div>
                        <div><h3>Temp. max:</h3><h4>{temperature_max} &deg;C</h4></div>
                        <div><h3>Ciśnienie:</h3><h4>{pressure} hPa</h4></div>
                        <div><h3>Wiatr:</h3><h4>{windSpeed} km/h</h4></div>
                    </div>}
                </div>
            )
        }
        
        return ( 
            <div className="weather-app">
                <form onSubmit={this.handleCitySubmit}>
                    <input 
                    type="text" 
                    placeholder="Wpisz miasto"
                    value={value}
                    onChange={this.handleInputChange}/>
                    <button className="button active">Wyszukaj</button>
                </form>
                <div className="weather-app__result">
                    {city !== '' && error ? `Brak informacji o: ${city}` : content}
                </div>
            </div>

         );
    }
}
 
export default WeatherApp;