import '../styles/Header.css'; 
import pokemonImage from "../assets/image.jpg";

function Header() {
  return (
    <div className="header-container"> 
      <img 
        src={pokemonImage}
        alt="Pokémon Banner" 
        className="banner-image" 
      />
      <h1 className="app-title">Pokémon Search Application</h1> 
    </div>
  );
}

export default Header;