/* eslint-disable react/prop-types */


import '../styles/PokemonDisplay.css';

const PokemonDisplay = ({ pokemon, addToFavorites, showPokemonDetails }) => {
  if (!pokemon || pokemon.length === 0) {
    return <p>No Pokémon found.</p>;
  }

  return (
    <div className="pokemon-display">
      {pokemon.map(p => (
        <div key={p.id} className="pokemon-card">
          <h3>{p.name}</h3>
          <img src={p.img} alt={p.name} />
          <button onClick={() => addToFavorites(p)}>Add to Favorites</button>
          <button onClick={() => showPokemonDetails(p)}>View Details</button>
        </div>
      ))}
    </div>
  );
};

export default PokemonDisplay;