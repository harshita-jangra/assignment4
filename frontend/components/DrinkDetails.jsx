
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function DrinkDetails() {
  const { id } = useParams();

  const [drink, setDrink] = useState(null);

  useEffect(() => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    )
      .then(res => res.json())
      .then(data => {
        setDrink(data.drinks ? data.drinks[0] : null);
      });
  }, [id]);

  if (drink === null) {
    return <h2>Loading recipe...</h2>;
  }

  const ingredients = [];

  for (let i = 1; i <= 15; i++) {
    const name = drink[`strIngredient${i}`];
    const measure = drink[`strMeasure${i}`];

    if (name) {
      ingredients.push(`${measure || ''} ${name}`);
    }
  }

  return (
    <div className="container">
      <h1>{drink.strDrink}</h1>

      <img
        src={drink.strDrinkThumb}
        alt={drink.strDrink}
        width="250"
      />

      <p>
        <b>Glass:</b> {drink.strGlass || 'Not available'}
      </p>

      <p>
        <b>Category:</b> {drink.strCategory || 'Not available'}
      </p>

      <h2>Ingredients</h2>

      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Instructions</h2>

      <p>{drink.strInstructions || 'Not available'}</p>

      <Link to="/drinks">Back to Menu</Link>
    </div>
  );
}

export default DrinkDetails;
