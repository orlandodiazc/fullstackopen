export default function Persons({ numbersToShow }) {
  return (
    <ul>
      {numbersToShow.map((person) => (
        <li key={person.name}>
          {person.name} - {person.number}
        </li>
      ))}
    </ul>
  );
}
