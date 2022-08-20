import { NavLink } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';

const NavBar = () => (
  <nav className="nav-bar">
    <h1 className="brand">Bookstore CMS</h1>
    <ul className="links">
      <NavLink to="/" className="link">BOOKS</NavLink>
      <NavLink to="/categories" className="link">CATEGORIES</NavLink>
    </ul>
    <button className="icon-button" type="button">
      <BsFillPersonFill size={24} />
    </button>
  </nav>
);
export default NavBar;
