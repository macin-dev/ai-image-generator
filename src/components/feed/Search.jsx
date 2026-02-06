function Search() {
  return (
    <label htmlFor="search" className="search">
      <input
        type="text"
        name="search"
        className="search__input"
        id="search"
        placeholder="Search images by keywords"
      />
      <img
        src="/src/assets/Search.svg"
        alt="search icon"
        className="search__icon"
      />
    </label>
  );
}

export default Search;
