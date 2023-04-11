import { useState } from "react";
import CountryDetails from "./CountryDetails";

export default function Country({ country }) {
  const [toggle, setToggle] = useState(false);
  return (
    <li>
      {country.name.common}
      <button
        style={{ marginInlineStart: "0.2rem" }}
        onClick={() => setToggle((prev) => !prev)}
        type="button"
      >
        show
      </button>
      {toggle && <CountryDetails country={country} />}
    </li>
  );
}
