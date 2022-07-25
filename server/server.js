const express = require("express");
const data = require("./data");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/weatherData", (req, res) => {
  data
    .getWeatherData({ latitude: 35, longitude: 139 })
    .then((response) => response.json())
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
