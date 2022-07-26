import "./App.css";

import React from "react";

function App() {
  const [weatherData, setWeatherData] = React.useState(null);
  const [latitude, setLatitude] = React.useState("");
  const [longitude, setLongitude] = React.useState("");

  const getWeatherData = () => {
    if (latitude != "" && longitude != "") {
      fetch("/weatherData")
        .then((response) => response.json())
        .then((data) => setWeatherData(data))
        .catch((err) => console.error(err));

      console.log("weatherData:");
      console.log(weatherData);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
        <form>
          <label htmlFor="latitude">Latitude</label>
          <input
            type="number"
            id="latitude"
            onChange={(event) => setLatitude(event.target.value)}
            required
          ></input>
          <br />
          <label htmlFor="longitude">Longitude</label>
          <input
            type="number"
            id="longitude"
            onChange={(event) => setLongitude(event.target.value)}
            required
          ></input>
          <br />
        </form>
        <button type="submit" onClick={getWeatherData}>
          Get Weather
        </button>
      </header>
    </div>
  );
}

export default App;
