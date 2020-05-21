import React, { Component } from 'react';
import { getWeatherData } from './api';
import { Canvas } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lon: null,
      weather: null,
    };
  }

  async componentDidMount() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async pos => {
        this.setState({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        });

        const weatherData = await getWeatherData(this.state.lat, this.state.lon);
        this.setState({
          weather: weatherData,
        });
      });  
    }
  }

  render() {
    return (
      <div className="App">
        <Canvas geolocation={this.state.geolocation} weather={this.state.weather} />
      </div>
    );
  }
}

export default App;
