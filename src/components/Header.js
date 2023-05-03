import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>Bookstore CMS</h1>
      <nav>
        <ul>
          <li><Link to="/">Books</Link></li>
          <li><Link to="/categories">Categories</Link></li>
        </ul>
      </nav>
    </header>
  );
}
