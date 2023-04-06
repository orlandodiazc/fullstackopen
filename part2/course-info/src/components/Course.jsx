export default function Course({ course }) {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </>
  );
}

function Header({ name }) {
  return <h2>{name}</h2>;
}

function Content({ parts }) {
  const totalExercises = parts.reduce((acc, part) => acc + part.exercises, 0);
  return (
    <ul>
      {parts.map((part) => (
        <li key={part.id}>
          {part.name} {part.exercises}
        </li>
      ))}
      <p>
        <b>total of {totalExercises} exercises</b>
      </p>
    </ul>
  );
}
