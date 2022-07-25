import './App.css';

import React from 'react'

function App() {
  const [weatherData, setWeatherData] = React.useState("null");

  React.useEffect(() => {
    fetch("/weatherData")
    .then((response) => response.json())
    .then((data) => setWeatherData(data))
    .catch((err) => console.log("Catch triggered in App.js: " + err));

    console.log("weatherData:")
    console.log(weatherData)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
        <p></p>
      </header>
    </div>
  );
}

export default App;
