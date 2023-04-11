import { useEffect, useState } from "react";
import axios from "axios";

export default function CountryDetails({ country }) {
  const [weather, setWeather] = useState(null);
  const [lat, lon] = country.capitalInfo.latlng;
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
          import.meta.env.VITE_WEATHER_API
        }&units=metric`
      )
      .then((res) => setWeather(res.data));
  }, []);
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital[0]}</p>
      <p>Area: {country.area}</p>
      <h3>Languages</h3>
      <ul>
        {Object.values(country.languages).map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />
      {weather && (
        <div>
          <h2>Weather in {country.capital[0]}</h2>
          <p>Temperature: {weather.main.temp}C</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="Weather Icon"
            style={{ backgroundColor: "violet" }}
          />
          <p>Wind: {weather.wind.speed}</p>
        </div>
      )}
    </div>
  );
}
