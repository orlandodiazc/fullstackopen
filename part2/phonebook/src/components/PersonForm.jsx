export default function PersonForm({ handleSubmit, setNewPerson, newPerson }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          name:
          <input
            onChange={(ev) =>
              setNewPerson({ ...newPerson, name: ev.target.value })
            }
            value={newPerson.name}
          />
        </label>
      </div>

      <div>
        <label>
          number:
          <input
            onChange={(ev) =>
              setNewPerson({ ...newPerson, number: ev.target.value })
            }
            value={newPerson.number}
          />
        </label>
      </div>
      <button type="submit">add</button>
    </form>
  );
}
