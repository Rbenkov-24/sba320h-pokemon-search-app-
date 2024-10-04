/* eslint-disable react/prop-types */

import '../styles/PokemonDetails.css';

const PokemonDetails = ({ selectedPokemon, onClose }) => {
  if (!selectedPokemon) {
    return null;
  }

  return (
    <div className="pokemon-details">
      <div>
        <h2>{selectedPokemon?.name.charAt(0).toUpperCase() + selectedPokemon?.name.slice(1)}</h2>
        <button onClick={onClose}>Close</button>
      </div>
      <img src={selectedPokemon?.img} alt={selectedPokemon?.name} />
      <div>
        <strong>Types:</strong> {selectedPokemon?.types.join(', ')}
      </div>
      <div>
        <p><strong>Height:</strong> {selectedPokemon?.height}</p>
        <p><strong>Weight:</strong> {selectedPokemon?.weight}</p>
        <p><strong>Abilities:</strong> {selectedPokemon?.abilities.join(', ')}</p>
      </div>
      <div>
        <h4>Stats:</h4>
        <ul>
          {selectedPokemon?.stats.map((stat, index) => (
            <li key={index}>{stat.name}: {stat.base_stat}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonDetails;
