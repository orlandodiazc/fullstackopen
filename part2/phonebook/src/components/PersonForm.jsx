export default function PersonForm({
  handleSubmit,
  setNewName,
  setNewNumber,
  newName,
  newNumber,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          name:
          <input
            onChange={(ev) => setNewName(ev.target.value)}
            value={newName}
          />
        </label>
      </div>

      <div>
        <label>
          number:
          <input
            onChange={(ev) => setNewNumber(ev.target.value)}
            value={newNumber}
          />
        </label>
      </div>
      <button type="submit">add</button>
    </form>
  );
}
