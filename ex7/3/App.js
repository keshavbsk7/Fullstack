import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    location: '',
    weatherData: null,
    loading: false,
    error: ''
  };

  handleInputChange = (e) => {
    this.setState({ location: e.target.value });
  };

  fetchWeatherData = async () => {
    const { location } = this.state;
    this.setState({ loading: true, error: '' });
  
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d30bf40b82d67cddb12365a5c6dde6d7&units=metric`);
      const data = await response.json();
  
      if (response.ok) {
        this.setState({ weatherData: data, loading: false });
      } else {
        this.setState({ error: data.message, loading: false });
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      this.setState({ error: 'An error occurred while fetching weather data.', loading: false });
    }
  };
  

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchWeatherData();
  };

  render() {
    const { location, weatherData, loading, error } = this.state;

    return (
      <div className="App">
        <h1>Weather App</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={this.handleInputChange}
          />
          <button type="submit" disabled={loading}>Get Weather</button>
        </form>
        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        {weatherData && (
          <div className="weather-info">
            <h2>Current Weather for {weatherData.name}</h2>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
            {weatherData.weather && weatherData.weather.length > 0 && (
              <p>Condition: {weatherData.weather[0].main}</p>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;
