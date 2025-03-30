import React from 'react';
import './WeatherCard.css';

// ✅ Import your custom weather images
import clearImg from '../assets/weatherImages/clear.png';
import cloudsImg from '../assets/weatherImages/clouds.png';
import rainImg from '../assets/weatherImages/rain.png';
import snowImg from '../assets/weatherImages/snow.png';
import thunderstormImg from '../assets/weatherImages/thunderstorm.png';
import mistImg from '../assets/weatherImages/mist.png';
import defaultImg from '../assets/weatherImages/default.png';

const WeatherCard = ({ weatherData }) => {
  const {
    name,
    main: { temp, humidity },
    weather,
    wind: { speed },
  } = weatherData;

  const condition = weather[0].main;

  // ✅ Match condition to image
  const getImageForCondition = (condition) => {
    switch (condition.toLowerCase()) {
      case 'clear':
        return clearImg;
      case 'clouds':
        return cloudsImg;
      case 'rain':
        return rainImg;
      case 'snow':
        return snowImg;
      case 'thunderstorm':
        return thunderstormImg;
      case 'mist':
      case 'fog':
      case 'haze':
        return mistImg;
      default:
        return defaultImg;
    }
  };

  const weatherImage = getImageForCondition(condition);

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      
      {/* ✅ Use custom weather image */}
      <img src={weatherImage} alt={condition} className="weather-image" />

      <div className="weather-info">
        <p><strong>🌤️Condition:</strong> {condition}</p>
        <p><strong>🌡️Temperature:</strong> {temp} °C</p>
        <p><strong>💧Humidity:</strong> {humidity}%</p>
        <p><strong>🍃Wind Speed:</strong> {speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherCard;
