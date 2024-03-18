import React, { useState } from "react";

function Weathercard() {
  const [city, setCity] = useState("-");
  const [input, setInput] = useState("");
  const [temp, setTemp] = useState("0");
  const [feelsLike, setFeelsLike] = useState("0");
  const [humidity, setHumidity] = useState("0");
  const [pressure, setPressure] = useState("0");
  const [description, setDescription] = useState("-");

  function HandleChange(e) {
    setInput(e.target.value);
  }
  const weatherinfo = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=d885aa1d783fd13a55050afeef620fcb`
    )
      .then((response) => response.json())
      .then((data) => {
        const temp = Math.round(data.main.temp - 273.15);
        setTemp(temp);
        const humidity = data.main.humidity;
        setHumidity(humidity);
        const feels_like = Math.round(data.main.feels_like - 273.15);
        setFeelsLike(feels_like);
        const pressure = data.main.pressure;
        setPressure(pressure);
        const description = data.weather[0].description;
        setDescription(description);
        const city = data.name;
        setCity(city);
        setInput("");
      });
  };

  return (
    <div className="weathercard">
      <div className="uheader">
        <div className="header">
          <h1>{city}</h1>
          <p>{description}</p>
        </div>
        <div className="image">
          <img
            src="https://icon-library.com/images/sunny-weather-icon/sunny-weather-icon-21.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="middlediv">
        <input type="text" value={input} onChange={HandleChange} />
        <button onClick={weatherinfo}>Get Details</button>
      </div>
      <div className="lheader">
        <div className="temperature">
          <p>
            {temp}
            <span>&#176;</span>C
          </p>
        </div>
        <div className="details">
          <div className="parameters">
            <span className="param-label">details</span>
          </div>
          <div className="parameters">
            <span className="param-label">Feels like:</span>
            <span className="param-val">{feelsLike}</span>
          </div>
          <div className="parameters">
            <span className="param-label">humidity:</span>
            <span className="param-val">{humidity}</span>
          </div>
          <div className="parameters">
            <span className="param-label">Pressure:</span>
            <span className="param-val">{pressure}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weathercard;
