import React, { useState, useEffect } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard";
import Spinner from "./components/Spinner";

// App.jsx mein change karo
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Agar missing ho toh error dikha do
if (!API_KEY) {
  console.error("VITE_WEATHER_API_KEY is not set!");
}

function App() {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (city.length < 2) {
        setSuggestions([]);
        return;
      }

      try {
        const response = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`
        );
        const data = await response.json();
        setSuggestions(data);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };

    const debounce = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounce);
  }, [city]);

  const fetchWeather = async (selectedCity) => {
    if (!selectedCity.trim()) return;

    setWeatherData(null);
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/weather?city=${selectedCity}`
      );

      if (!response.ok) {
        throw new Error("City not found or server error");
      }

      const data = await response.json();
      setWeatherData(data);
      setSuggestions([]);
    } catch (error) {
      console.error("Error fetching weather:", error);
      setError(error.message);
    }

    setLoading(false);
  };

  const handleSuggestionClick = (name) => {
    setCity("");
    setSuggestions([]);
    fetchWeather(name);
  };

  return (
    <div className="app-wrapper">
      <div className="app-container">
        <h1>🌤️ Weather Finder</h1>

        <div className="search-box">
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchWeather(city)}
          />
          <button onClick={() => fetchWeather(city)}>Search</button>

          {suggestions.length > 0 && (
            <ul className="suggestions-list">
              {suggestions.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(item.name)}
                >
                  {item.name}, {item.state ? item.state + ", " : ""}
                  {item.country}
                </li>
              ))}
            </ul>
          )}
        </div>

        {error && <p className="error-msg">⚠️ {error}</p>}
        {loading && <Spinner />}
        {weatherData && <WeatherCard weatherData={weatherData} />}
      </div>
    </div>
  );
}

export default App;
