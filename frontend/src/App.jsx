
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Home from '../components/Home';
import Drinks from '../components/Drinks';
import DrinkDetails from '../components/DrinkDetails';
import Favourites from '../components/Favourites';
import NotFound from '../components/NotFound';

function App() {
  const [favourites, setFavourites] = useState([]);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/drinks">Menu</Link>
        <Link to="/favourites">Favourites ❤️</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/drinks"
          element={
            <Drinks
              favourites={favourites}
              setFavourites={setFavourites}
            />
          }
        />

        <Route
          path="/drinks/:id"
          element={<DrinkDetails />}
        />

        <Route
          path="/favourites"
          element={
            <Favourites
              favourites={favourites}
              setFavourites={setFavourites}
            />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
