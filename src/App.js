import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '0963e7dea5df366e323be49f54cf2194';

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  //Async, Await, Fetch API
  getWeather = async (e) => {    
    e.preventDefault(); // Prevent page refresh
    const city = e.target.city.value;
    const country = e.target.country.value;
    const api_call = await fetch(
        `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    if (city && country && data.cod !== '404') {
      console.log(data);
      // New state values for valid city and country
      this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ''
    })
    } else if (data.cod === "404") {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: data.message.toUpperCase()
      })
    } 
  }
  render() {
    return (
      <div className="main">
        <div className="container">               
        <Titles />               
        <Form getWeather={this.getWeather} />
        <Weather 
          temperature={this.state.temperature} 
          humidity={this.state.humidity}
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
          error={this.state.error}
          />             
      </div>
      </div>
    );
  }
};

export default App;