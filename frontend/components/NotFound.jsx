
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container">
      <h1>Page Not Found!</h1>
      <p>Sorry, this page does not exist.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default NotFound;
