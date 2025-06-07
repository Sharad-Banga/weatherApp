import React, { useState } from "react";
import "./index.css";

const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    if (!city) return;
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      console.error("Error fetching weather:", err);
    }
  };

  return (
    <div className="app">
      <h2>🌤 Weather App</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Search</button>
      </div>

      {weather && weather.main && (
        <div className="weather-info">
          <h3>📍 {weather.name}</h3>
          <p>🌥 {weather.weather[0].description}</p>
          <p>🌡 Temperature: {weather.main.temp} °C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
        </div>
      )}

      <footer className="footer">
        <p>Developed by Sneha & Vishali 💙</p>
      </footer>
    </div>
  );
}

export default App;
