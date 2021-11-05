import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul>
        <Link to="/">
          <li>Home</li>      
        </Link>
        <Link to="/about">
          <li>About</li>      
        </Link>
        <Link to="/contact">
          <li>Contact</li>      
        </Link>
      </ul>
    </nav>
  )
}

export default Navigation;