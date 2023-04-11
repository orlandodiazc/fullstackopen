import { useEffect, useRef, useState } from "react";
import axios from "axios";
import CountryDetails from "./components/CountryDetails";
import Country from "./components/Country";

function App() {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(true);
  const initialCountries = useRef(null);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      initialCountries.current = res.data;
      setLoading(false);
    });
  }, []);

  function handleInputChange(ev) {
    setQuery(ev.target.value);
    const searchResult = initialCountries.current.filter((country) => {
      if (!ev.target.value) return null;
      return country.name.common
        .toLowerCase()
        .includes(ev.target.value.toLowerCase());
    });
    if (searchResult.length > 10) {
      setMessage("Too many matches");
      setCountries([]);
      return;
    } else if (searchResult.length > 0) {
      setCountries(searchResult);
    }
    setMessage(null);
  }
  if (isLoading) return <span>Loading</span>;
  return (
    <main>
      <label>
        find countries:{" "}
        <input onChange={handleInputChange} value={query} type="text" />
      </label>
      <span>{message}</span>
      <ul>
        {countries.map((country, index) => {
          return countries.length === 1 ? (
            <CountryDetails key={index} country={country} />
          ) : (
            <Country key={index} country={country} />
          );
        })}
      </ul>
    </main>
  );
}

export default App;
