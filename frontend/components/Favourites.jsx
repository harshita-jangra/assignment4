
import { Link } from 'react-router-dom';

function Favourites({ favourites, setFavourites }) {
  return (
    <div className="container">
      <h1>My Favourites ❤️</h1>

      {favourites.length === 0 && (
        <p>No favourites yet!</p>
      )}

      <div className="cards">
        {favourites.map(drink => (
          <div className="card" key={drink.idDrink}>
            <img
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
            />

            <h3>{drink.strDrink}</h3>

            <Link to={`/drinks/${drink.idDrink}`}>
              View Recipe
            </Link>

            <button
              onClick={() =>
                setFavourites(
                  favourites.filter(
                    item => item.idDrink !== drink.idDrink
                  )
                )
              }
            >
              Remove ❤️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favourites;
