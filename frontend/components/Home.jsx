
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Fresh Sip Cafe 🍹</h1>

      <p>Fresh and refreshing mocktails!</p>

      <Link to="/drinks" className="btn">
        See Menu
      </Link>
    </div>
  );
}

export default Home;
