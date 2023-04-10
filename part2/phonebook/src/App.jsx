import { useEffect, useState } from "react";
import personService from "./services/persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import Notification from "./components/Notification";

export default function App() {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({ name: "", number: "" });
  const [query, setQuery] = useState({ searchValue: "", list: null });
  const [message, setMessage] = useState({ description: null, error: null });

  useEffect(() => {
    personService.getAll().then((initialPersons) => setPersons(initialPersons));
  }, []);

  function handleSubmit(ev) {
    const clearValues = () => {
      setNewPerson({ name: "", number: "" });
      setQuery({ searchValue: "", list: null });
    };

    ev.preventDefault();
    const currentPerson = persons.find(
      (person) => person.name === newPerson.name
    );
    if (currentPerson) {
      const confirmMessage = `${newPerson.name} already exists, do you want to replace the old number?`;
      if (!confirm(confirmMessage)) return;

      personService
        .updatePerson(currentPerson.id, newPerson)
        .then((updatedPerson) => {
          setPersons(
            persons.map((person) =>
              person.id !== updatedPerson.id ? person : updatedPerson
            )
          );
          clearValues();
          setMessage({
            description: `Updated ${updatedPerson.name} phone number`,
            error: false,
          });
          setTimeout(() => {
            setMessage({ description: null, error: null });
          }, 2000);
        });
      return;
    }

    const personToSend = { name: newPerson.name, number: newPerson.number };

    personService.addPerson(personToSend).then((newPerson) => {
      setPersons([...persons, newPerson]);
      clearValues();
      setMessage({ description: `Added ${newPerson.name}`, error: false });
      setTimeout(() => {
        setMessage({ description: null, error: null });
      }, 2000);
    });
  }

  function handleQueryChange(ev) {
    const searchResult = persons.filter((person) => {
      if (!ev.target.value) return persons;
      return person.name.toLowerCase().includes(ev.target.value.toLowerCase());
    });
    setQuery({ searchValue: ev.target.value, list: searchResult });
  }

  function handleDeletion(id) {
    personService
      .deletePerson(id)
      .then(setPersons(persons.filter((person) => person.id !== id)))
      .catch((err) => {
        setMessage({
          description: "This person has already been removed from the server",
          error: true,
        });
        setPersons(persons.filter((person) => person.id !== id));
        setTimeout(() => {
          setMessage({ description: null, error: null });
        }, 2000);
      });
  }

  const numbersToShow = query.searchValue ? query.list : persons;
  return (
    <main>
      <h1>Phonebook</h1>
      <Filter handleQueryChange={handleQueryChange} query={query} />
      <h2>Add a new book</h2>
      <Notification message={message} />
      <PersonForm
        handleSubmit={handleSubmit}
        newPerson={newPerson}
        setNewPerson={setNewPerson}
      />
      <h2>Numbers</h2>
      <Persons numbersToShow={numbersToShow} handleDeletion={handleDeletion} />
    </main>
  );
}
