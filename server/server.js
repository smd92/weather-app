const express = require("express");
const data = require("./data");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/weatherData", (req, res) => {
  const weatherData = data.getWeatherData({ latitude: 35, longitude: 139 });
  res.send(weatherData);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
