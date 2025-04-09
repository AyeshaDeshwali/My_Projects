// components/HourlyForecastCard.js
import React from "react";
import "../styles/HourlyForecastCard.css";

const HourlyForecastCard = ({ hourly }) => {
  const formatHour = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="hourly-forecast">
      {hourly.map((hour, index) => (
        <div key={index} className="hour-card">
          <p>{formatHour(hour.dt)}</p>
          <img
            src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
            alt="icon"
          />
          <p>{Math.round(hour.temp)}°C</p>
        </div>
      ))}
    </div>
  );
};

export default HourlyForecastCard;
