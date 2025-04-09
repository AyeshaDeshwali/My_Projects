import React from "react";

import "../styles/ForecastCard.css";
const ForecastCard = ({ forecast }) => {
  // Function to get day name
  const getDayName = (dateString, index) => {
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    if (index === 0) return "Today";
    if (index === 1) return "Tomorrow";
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  // Custom weather icons (Emojis)
  const icons = {
    Clear: "☀️",
    Clouds: "☁️",
    Rain: "🌧️",
    Drizzle: "🌦️",
    Thunderstorm: "⛈️",
    Snow: "❄️",
    Mist: "🌫️",
    Smoke: "💨",
    Haze: "🌁",
    Fog: "🌫️",
    Dust: "🏜️",
    Sand: "🏝️",
    Ash: "🌋",
    Squall: "🌬️",
    Tornado: "🌪️",
  };

  return (
    <div className="forecast-container">
      <h3>Weekly Forecast</h3>
      <div className="forecast-grid">
        {forecast.slice(0, 7).map((day, index) => (
          <div key={index} className="forecast-card">
            <p className="day-name">{getDayName(day.dt_txt, index)}</p>
            <p className="temperature">{Math.round(day.main.temp)}°C</p>
            <p className="weather-description">
              {day.weather[0].description} {icons[day.weather[0].main] || "❓"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastCard;
