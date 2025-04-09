import React, { useState, useEffect } from "react";
import "../styles/WeatherCard.css"; // ✅ CSS Import

const WeatherCard = ({ weather }) => {
  const [isFahrenheit, setIsFahrenheit] = useState(false);
  const [weatherClass, setWeatherClass] = useState("default-bg");
  const [currentTime, setCurrentTime] = useState("");

  if (!weather || !weather.main || !weather.weather) return null;

  // ✅ Temperature Conversion Function
  const convertTemp = (tempC) => (isFahrenheit ? (tempC * 9) / 5 + 32 : tempC);

  // useEffect(() => {
  //   if (!weather.weather || weather.weather.length === 0) return;

  //   const mainWeather = weather.weather[0].main;
  //   const hours = new Date().getHours();
  //   const isDay = hours >= 6 && hours < 19;

  //   let baseClass = "default-bg";

  //   if (mainWeather.includes("Clear")) baseClass = "clear";
  //   else if (mainWeather.includes("Clouds")) baseClass = "cloudy";
  //   else if (mainWeather.includes("Rain")) baseClass = "rain";
  //   else if (mainWeather.includes("Snow")) baseClass = "snow";
  //   else if (mainWeather.includes("Thunderstorm")) baseClass = "thunderstorm";
  //   else if (["Mist", "Haze", "Fog"].includes(mainWeather)) baseClass = "haze";
  //   else baseClass = "default-bg";

  //   const finalClass = `${isDay ? "day" : "night"}-${baseClass}`;

  //   setWeatherClass(finalClass);
  // }, [weather]);

  const getBackgroundClass = (main, desc, hours) => {
    const isSunrise = hours >= 5 && hours < 7;
    const isSunset = hours >= 17 && hours < 19;
    const isDay = hours >= 6 && hours < 19;

    if (isSunrise) return "sunrise";
    if (isSunset) return "sunset";

    switch (main) {
      case "clear":
        return isDay ? "day-clear" : "night-clear";
      case "clouds":
        if (desc.includes("few"))
          return isDay ? "day-cloudy-light" : "night-cloudy-light";
        return isDay ? "day-cloudy-heavy" : "night-cloudy-heavy";
      case "rain":
        return "rain-light";
      case "drizzle":
        return isDay ? "day-drizzle" : "night-drizzle";
      case "thunderstorm":
        return isDay ? "day-thunderstorm" : "night-thunderstorm";
      case "snow":
        return isDay ? "day-snow" : "night-snow";
      case "mist":
      case "haze":
      case "fog":
        return isDay ? "day-haze" : "night-haze";
      case "dust":
      case "sand":
      case "ash":
      case "squall":
      case "tornado":
        return "sandstorm";
      default:
        return "default-bg";
    }
  };

  // useEffect(() => {
  //   if (!weather.weather || weather.weather.length === 0) return;

  //   const mainWeather = weather.weather[0].main.toLowerCase();
  //   const description = weather.weather[0].description.toLowerCase();
  //   const hours = new Date().getHours();

  //   const isSunrise = hours >= 5 && hours < 7;
  //   const isSunset = hours >= 17 && hours < 19;
  //   const isDay = hours >= 6 && hours < 19;

  //   let baseClass = "default-bg";

  //   if (isSunrise) {
  //     baseClass = "sunrise";
  //   } else if (isSunset) {
  //     baseClass = "sunset";
  //   } else if (mainWeather === "clear") {
  //     baseClass = isDay ? "day-clear" : "night-clear";
  //   } else if (mainWeather === "clouds") {
  //     // Check for intensity using description
  //     if (description.includes("few")) {
  //       baseClass = isDay ? "day-cloudy-light" : "night-cloudy-light";
  //     } else {
  //       baseClass = isDay ? "day-cloudy-heavy" : "night-cloudy-heavy";
  //     }
  //   } else if (mainWeather === "rain") {
  //     baseClass = "rain-light";
  //   } else if (mainWeather === "thunderstorm") {
  //     baseClass = "thunderstorm";
  //   } else if (mainWeather === "snow") {
  //     baseClass = "snow";
  //   } else if (["mist", "haze", "fog"].includes(mainWeather)) {
  //     baseClass = "haze";
  //   } else if (
  //     ["dust", "sand", "ash", "squall", "tornado"].includes(mainWeather)
  //   ) {
  //     baseClass = "sandstorm";
  //   } else {
  //     baseClass = "default-bg";
  //   }

  //   setWeatherClass(baseClass);
  // }, [weather]);
  useEffect(() => {
    if (!weather.weather || weather.weather.length === 0) return;

    const main = weather.weather[0].main.toLowerCase();
    const desc = weather.weather[0].description.toLowerCase();
    const hours = new Date().getHours();

    const backgroundClass = getBackgroundClass(main, desc, hours);
    setWeatherClass(backgroundClass);
  }, [weather]);

  // 🕒 Time Update
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12;

      setCurrentTime(`${formattedHours}:${minutes} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  // 📅 Date Formatter
  const formatDate = () => {
    const now = new Date();
    const options = { month: "short", day: "numeric" };
    const formattedDate = now.toLocaleDateString("en-US", options);
    const weekday = now.toLocaleDateString("en-US", { weekday: "short" });

    return `${formattedDate} ${weekday}`;
  };

  // 🌅 Day/Night Background
  const getTimeBasedClass = () => {
    const hours = new Date().getHours();
    return hours >= 6 && hours < 19 ? "day-bg" : "night-bg";
  };

  const windSpeedKph = (weather.wind.speed * 3.6).toFixed(2);

  return (
    <div className={`weather-card ${getTimeBasedClass()} ${weatherClass}`}>
      <div className="weather-header">
        <p>Current Weather | {currentTime}</p>

        <div className="toggle" onClick={() => setIsFahrenheit(!isFahrenheit)}>
          <span className={isFahrenheit ? "active" : ""}>°F</span>
          <div className={`toggle-btn ${isFahrenheit ? "toggled" : ""}`}></div>
        </div>
      </div>

      <div className="weather-content">
        <div className="weather-left">
          <h2 className="location">{weather.name}</h2>

          <div className="temp-icon">
            {weather.weather[0].icon && (
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
                className="weather-icon"
              />
            )}
            <p className="temp">
              {Math.round(convertTemp(weather.main.temp))}°
              {isFahrenheit ? "F" : "C"}
            </p>
          </div>

          <div className="date">
            <p>
              {formatDate()} | {Math.round(convertTemp(weather.main.temp_max))}°
              /{Math.round(convertTemp(weather.main.temp_min))}°
            </p>
          </div>

          <p className="description">{weather.weather[0].description}</p>
        </div>

        <div className="weather-right">
          <p className="feels-like">
            Feels like {Math.round(convertTemp(weather.main.feels_like))}°
          </p>
          <div className="temp-range">
            <span>🔺 H {Math.round(convertTemp(weather.main.temp_max))}°</span>
            <span>🔻 L {Math.round(convertTemp(weather.main.temp_min))}°</span>
          </div>

          <div className="extra-details">
            <p>
              💧 Humidity <span>{weather.main.humidity}%</span>
            </p>
            <p>
              💨 Wind <span>{windSpeedKph} km/h</span>
            </p>
            <p>
              🌡️ Pressure <span>{weather.main.pressure} hPa</span>
            </p>
            <p>
              ☁️ Cloud Cover <span>{weather.clouds.all}%</span>
            </p>
            <p>
              🔭 Visibility <span>{weather.visibility / 1000} km</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
