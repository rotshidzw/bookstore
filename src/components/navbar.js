import { NavLink } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';

const NavBar = () => (
  <nav className="nav-bar">
    <h1>Bookstore CMS</h1>
    <ul className="links">
      <NavLink to="/" className="link">BOOKS</NavLink>
      <NavLink to="/categories" className="link">CATEGORIES</NavLink>
    </ul>
    <button className="icon-button" type="button">
      <BsFillPersonFill />
    </button>
  </nav>
);
export default NavBar;
