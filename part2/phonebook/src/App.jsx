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
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [query, setQuery] = useState({ searchValue: "", list: [] });

  function handleSubmit(ev) {
    ev.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} already exists`);
      return;
    }

    setPersons([...persons, { name: newName, number: newNumber }]);
    setNewName("");
    setNewNumber("");
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
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons numbersToShow={numbersToShow} />
    </main>
  );
}
