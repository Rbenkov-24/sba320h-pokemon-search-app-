/* eslint-disable react/prop-types */

import '../styles/SearchBar.css';

const SearchBar = ({ onTypeChange, onSearchChange, selectedType, searchTerm }) => {
  const moveOptions = ['All', 'Fire', 'Water', 'Grass', 'Electric', 'Ice', 'Rock', 'Flying'];

  const handleTypeChange = (e) => onTypeChange(e.target.value);
  const handleSearchChange = (e) => onSearchChange(e.target.value);

  return (
    <div className="input-container">
      <label htmlFor="type-select">Filter by Type:</label>
      <select 
        id="type-select" 
        value={selectedType} 
        onChange={handleTypeChange}
      >
        {moveOptions.map((move, index) => (
          <option key={index} value={move}>
            {move}
          </option>
        ))}
      </select>

      <label htmlFor="search-input">Search Pokémon:</label>
      <input 
        type="text" 
        id="search-input" 
        value={searchTerm} 
        onChange={handleSearchChange} 
        placeholder="Enter Pokémon name" 
        className="search-input" 
      />
    </div>
  );
};

export default SearchBar;