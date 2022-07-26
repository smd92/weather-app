require("dotenv").config();
const axios = require("axios");

const getWeatherData = async (location) => {
  try {
    const apiKey = process.env.OPENWEATHERKEY;
    const latitude = location.latitude;
    const longitude = location.longitude;

    const weatherData = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    );
    return weatherData;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getWeatherData };
