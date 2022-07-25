require("dotenv").config();
const axios = require("axios");

const getWeatherData = async (location) => {
  const apiKey = process.env.OPENWEATHERKEY;
  const latitude = location.latitude;
  const longitude = location.longitude;

  const weatherData = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
  );
  
  console.log(weatherData.ok)
  return weatherData;
};

module.exports = { getWeatherData };
