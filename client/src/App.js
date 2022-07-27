import "./App.css";

import React from "react";

function App() {
  const [weatherData, setWeatherData] = React.useState(null);
  const [latitude, setLatitude] = React.useState("");
  const [longitude, setLongitude] = React.useState("");

  React.useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);

  const getWeatherData = (event, latitude, longitude) => {
    event.preventDefault();
    if (latitude !== "" && longitude !== "") {
      fetch(
        `/weatherData?latitude=${latitude.toString()}&&longitude=${longitude.toString()}`
      )
        .then((response) => response.json())
        .then((data) => setWeatherData(data))
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
        <form
          onSubmit={(event) => {
            getWeatherData(event, latitude, longitude);
          }}
        >
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
          <button type="submit">Get Weather</button>
        </form>
        <br />
        {weatherData !== null && <h2>Check Console for Weather Data</h2>}
      </header>
    </div>
  );
}

export default App;
