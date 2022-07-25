require("dotenv").config();
const axios = require("axios");

const getWeatherData = (location) => {
  const apiKey = process.env.OPENWEATHERKEY;
  const latitude = location.latitude;
  const longitude = location.longitude;

  const weatherData = axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => err);

  return weatherData;
};

module.exports = { getWeatherData };
