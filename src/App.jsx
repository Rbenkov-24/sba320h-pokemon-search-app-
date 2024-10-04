import { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PokemonDisplay from './components/PokemonDisplay';
import Favorites from './components/Favorites';
import Footer from './components/Footer';
import PokemonDetails from './components/PokemonDetails'; 
import './styles/App.css';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
        const pokemonData = await Promise.all(data.results.map(async ({ url, name }) => {
          const { data: details } = await axios.get(url);
          return {
            name,
            id: details.id,
            img: details.sprites.front_default,
            types: details.types.map(({ type }) => type.name),
            height: details.height,
            weight: details.weight,
            abilities: details.abilities.map(({ ability }) => ability.name),
            stats: details.stats.map(({ stat, base_stat }) => ({
              name: stat.name,
              base_stat
            }))
          };
        }));
        setPokemon(pokemonData);
        setFilteredPokemon(pokemonData);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    };

    fetchPokemon();
  }, []);

  const filterPokemon = (type = selectedType, name = searchTerm) => {
    const filtered = pokemon.filter(p => 
      (type === 'All' || p.types.includes(type.toLowerCase())) &&
      (!name || p.name.toLowerCase().includes(name.toLowerCase()))
    );
    setFilteredPokemon(filtered);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
    filterPokemon(type);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    filterPokemon(selectedType, term);
  };

  const addToFavorites = (pokemon) => setFavorites([...favorites, pokemon]);

  const showPokemonDetails = (pokemon) => setSelectedPokemon(pokemon);

  const closeDetails = () => setSelectedPokemon(null);

  return (
    <div className="app">
      <Header />
      <SearchBar 
        onTypeChange={handleTypeChange} 
        onSearchChange={handleSearchChange} 
        selectedType={selectedType} 
        searchTerm={searchTerm} 
      />
      <PokemonDisplay 
        pokemon={filteredPokemon} 
        addToFavorites={addToFavorites} 
        showPokemonDetails={showPokemonDetails} 
      />
      <Favorites favorites={favorites} />
      {selectedPokemon && (
        <PokemonDetails selectedPokemon={selectedPokemon} onClose={closeDetails} />
      )}
      <Footer />
    </div>
  );
}

export default App;