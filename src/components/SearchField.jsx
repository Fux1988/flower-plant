
function SearchField({ value, onChange, placeholder = "Search..." }) {
  return (
    <div className="search">
      <label htmlFor="searchInput" className="muted">
        Filter your plants
      </label>
      <input
        id="searchInput"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchField;