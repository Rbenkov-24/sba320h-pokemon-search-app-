import '../styles/Header.css'; 

function Header() {
  return (
    <div className="header-container"> 
      <img 
        src="src/assets/image.jpg" 
        alt="Pokémon Banner" 
        className="banner-image" 
      />
      <h1 className="app-title">Pokémon Search Application</h1> 
    </div>
  );
}

export default Header;