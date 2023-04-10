export default function Persons({ numbersToShow, handleDeletion }) {
  function handleClick(person) {
    if (confirm(`Delete ${person.name}?`)) {
      handleDeletion(person.id);
    }
  }
  if (!numbersToShow) return;
  return (
    <ul>
      {numbersToShow.map((person) => (
        <li key={person.id}>
          <span>
            {person.name} - {person.number}
          </span>
          <button onClick={() => handleClick(person)} type="button">
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}
