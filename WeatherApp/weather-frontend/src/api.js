const BASE_URL = process.env.REACT_APP_API_URL;

export const getWeatherByCoords = async (lat, lon) => {
  const response = await fetch(
    `${BASE_URL}/weather/coords?lat=${lat}&lon=${lon}`
  );
  return response.json();
};

export const getWeatherByCity = async (city) => {
  const response = await fetch(`${BASE_URL}/weather/city?city=${city}`);
  return response.json();
};

export const getWeeklyForecast = async (lat, lon) => {
  const response = await fetch(
    `${BASE_URL}/weather/forecast?lat=${lat}&lon=${lon}`
  );
  return response.json();
};

export const signupUser = async (userData) => {
  const response = await fetch(`${BASE_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return response.json();
};

export const loginUser = async (userData) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return response.json();
};
export const getHourlyForecast = async (lat, lon) => {
  const response = await fetch(
    `${BASE_URL}/weather/hourly?lat=${lat}&lon=${lon}`
  );
  return response.json();
};
