const express = require("express");
const data = require("./data");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/weatherData", async (req, res) => {
  try {
    const weatherData = await data.getWeatherData({
      latitude: req.query.latitude,
      longitude: req.query.longitude,
    });
    res.send(weatherData.data);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
