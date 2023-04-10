export default function Filter({ handleQueryChange, query }) {
  return (
    <label>
      search contact:
      <input
        type="text"
        onChange={handleQueryChange}
        value={query.searchValue}
      />
    </label>
  );
}
