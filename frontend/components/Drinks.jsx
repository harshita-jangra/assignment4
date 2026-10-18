
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Drinks({ favourites, setFavourites }) {
  const [drinks, setDrinks] = useState([]);
  const [search, setSearch] = useState('');

  // Get drinks from API
  useEffect(() => {
    fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
    )
      .then(res => res.json())
      .then(data => {
        setDrinks(data.drinks || []);
      });
  }, []);

  // Add or remove favourite
  function addFavourite(drink) {
    const exists = favourites.find(
      item => item.idDrink === drink.idDrink
    );

    if (exists) {
      setFavourites(
        favourites.filter(
          item => item.idDrink !== drink.idDrink
        )
      );
    } else {
      setFavourites([...favourites, drink]);
    }
  }

  // Search drinks by name
  const filteredDrinks = drinks.filter(drink =>
    drink.strDrink.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Our Mocktail Menu 🍹</h1>

      <input
        type="text"
        placeholder="Search drink..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div className="cards">
        {filteredDrinks.map(drink => (
          <div className="card" key={drink.idDrink}>
            <img
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
            />

            <h3>{drink.strDrink}</h3>

            <Link to={`/drinks/${drink.idDrink}`}>
              View Recipe
            </Link>

            <button onClick={() => addFavourite(drink)}>
              {favourites.some(
                item => item.idDrink === drink.idDrink
              ) ? '❤️' : '🤍'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Drinks;

