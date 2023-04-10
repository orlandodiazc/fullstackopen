import { useState } from "react";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";

export default function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "1234" },
    { name: "Hola mundo", number: "456" },
    { name: "perro alto", number: "789" },
    { name: "andres perez", number: "1011" },
  ]);
  const [newPerson, setNewPerson] = useState({ name: "", number: "" });
  const [query, setQuery] = useState({ searchValue: "", list: [] });

  function handleSubmit(ev) {
    ev.preventDefault();
    if (persons.some((person) => person.name === newPerson.name)) {
      alert(`${newPerson.name} already exists`);
      return;
    }

    setPersons([
      ...persons,
      { name: newPerson.name, number: newPerson.number },
    ]);
    setNewPerson({ name: "", number: "" });
    setQuery({ searchValue: "", list: [] });
  }

  function handleQueryChange(ev) {
    const searchResult = persons.filter((person) => {
      if (!ev.target.value) return persons;
      return person.name.toLowerCase().includes(ev.target.value.toLowerCase());
    });
    setQuery({ searchValue: ev.target.value, list: searchResult });
  }

  const numbersToShow = query.searchValue ? query.list : persons;

  return (
    <main>
      <h1>Phonebook</h1>
      <Filter handleQueryChange={handleQueryChange} query={query} />
      <h2>Add a new book</h2>
      <PersonForm
        handleSubmit={handleSubmit}
        newPerson={newPerson}
        setNewPerson={setNewPerson}
      />
      <h2>Numbers</h2>
      <Persons numbersToShow={numbersToShow} />
    </main>
  );
}
