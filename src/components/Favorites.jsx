/* eslint-disable react/prop-types */
import '../styles/Favorites.css';

const Favorites = ({ favorites }) => {
  return (
    <div className="favorites-container"> 
      <h2 className="favorites-title">Your Favorites</h2> 
      <div className="favorites-row"> 
        {favorites.map((p, index) => (
          <div key={index} className="favorite-card">
            <h3>{p.name}</h3>
            <img src={p.img} alt={p.name} className="favorite-image" /> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;