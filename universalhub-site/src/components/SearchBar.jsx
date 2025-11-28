const SearchBar = ({ value, onChange, placeholder = 'Search articles' }) => (
  <div className="search-bar">
    <input
      type="search"
      value={value}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
      aria-label="Search articles"
    />
  </div>
)

export default SearchBar

