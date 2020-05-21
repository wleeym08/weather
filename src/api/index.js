import axios from 'axios';
import api_key from './auth';

const api = "https://api.openweathermap.org/data/2.5/weather?";

export const getWeatherData = async (lat, lon) => {
  try {
    const { data: { name, weather, main: { temp } } } = 
      await axios.get(`${api}lat=${lat}&lon=${lon}&appid=${api_key}`);
    return {
      city: name,
      weather: weather[0].description,
      temp: Math.round(temp - 273.15),
      icon: weather[0].icon,
    };
  } catch (error) {
    return new Error('Failed to get weather data!');
  }
}