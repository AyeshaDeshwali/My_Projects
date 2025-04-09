import React, { useState, useEffect } from "react";
import "./styles/WeatherApp.css";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import HourlyForecastCard from "./components/HourlyForecastCard";

import {
  getWeatherByCoords,
  getWeatherByCity,
  getWeeklyForecast,
  getHourlyForecast,
} from "./api";

const WeatherApp = ({ onAuthSuccess }) => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [hourlyData, setHourlyData] = useState(null); // ✅ ADD THIS

  useEffect(() => {
    const updateClock = () => {
      setCurrentTime(new Date());
    };
    const interval = setInterval(updateClock, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  // const getBackgroundClass = () => {
  //   const hours = currentTime.getHours();
  //   if (hours >= 6 && hours < 18) {
  //     return "day-bg"; // Din ka background
  //   } else {
  //     return "night-bg"; // Raat ka background
  //   }
  // };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const data = await getWeatherByCoords(
            position.coords.latitude,
            position.coords.longitude
          );
          setWeather(data);

          const forecastData = await getWeeklyForecast(
            data.coord.lat,
            data.coord.lon
          );
          setForecast(
            forecastData.list.filter((item) => item.dt_txt.includes("12:00:00"))
          );

          const hourly = await getHourlyForecast(
            data.coord.lat,
            data.coord.lon
          );
          setHourlyData(hourly.hourly.slice(0, 6));
        } catch (error) {
          setError("Error fetching weather data.");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError("Please allow location access or enter a city manually.");
        setLoading(false);
      }
    );
  }, []);

  const handleCitySearch = async () => {
    if (!city) return;
    setLoading(true);
    try {
      const data = await getWeatherByCity(city);
      if (data.cod === 200) {
        setWeather(data);
        setCity("");
        setError("");

        const forecastData = await getWeeklyForecast(
          data.coord.lat,
          data.coord.lon
        );
        setForecast(
          forecastData.list.filter((item) => item.dt_txt.includes("12:00:00"))
        );

        const hourly = await getHourlyForecast(data.coord.lat, data.coord.lon);
        setHourlyData(hourly.list.slice(0, 6));
      } else {
        setError("City not found!");
      }
    } catch (error) {
      setError(""); //Failed to fetch weather data.
    } finally {
      setLoading(false);
    }
  };

  // const handleLogout = () => {
  //   const confirmLogout = window.confirm("Are you sure you want to logout?");
  //   if (confirmLogout) {
  //     localStorage.removeItem("token");
  //     localStorage.removeItem("user");
  //     onAuthSuccess(null);
  //   }
  // };
  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    onAuthSuccess(null);
    setShowLogoutModal(false);
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <div className="container">
      <h1>🌤 Weather App</h1>

      <div className="input-logout-wrapper">
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button className="get-weather-btn" onClick={handleCitySearch}>
            Get Weather
          </button>
          <button className="search-icon-btn" onClick={handleCitySearch}>
            <i className="fas fa-search"></i>
          </button>
        </div>
        {showLogoutModal && (
          <div className="modal-overlay">
            <div className="modal-box">
              <img
                src="https://images.freeimages.com/fic/images/icons/1620/crystal_project/128/exit.png"
                alt="logout-icon"
                className="logout-icon"
              />
              <h3>Logout</h3>
              <p>Are you sure you want to logout?</p>
              <div className="modal-buttons">
                <button className="cancel-btn" onClick={cancelLogout}>
                  Cancel
                </button>
                <button className="confirm-btn" onClick={confirmLogout}>
                  Yes, Logout !
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Logout Buttons */}
        <div className="logout-container">
          <button className="logout-btn logout-text-btn" onClick={handleLogout}>
            Logout
          </button>
          <button className="logout-btn logout-icon-btn" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i>
          </button>
        </div>
      </div>

      {error && (
        <p
          className={`error ${
            error === "City not found!" ? "error-red" : "error-default"
          }`}
        >
          <i className="fas fa-map-marker-alt"></i> {error}
        </p>
      )}

      {loading ? (
        <span className="loader"></span>
      ) : (
        <div>
          {weather && weather.main && (
            <WeatherCard
              weather={weather}
              currentTime={currentTime.toLocaleTimeString()}
            />
          )}
          {forecast && forecast.length > 0 && (
            <ForecastCard forecast={forecast} />
          )}
          {hourlyData && hourlyData.length > 0 ? (
            <HourlyForecastCard hourly={hourlyData} />
          ) : (
            <p className="no-hourly"></p> //Hourly forecast not available.
          )}
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
