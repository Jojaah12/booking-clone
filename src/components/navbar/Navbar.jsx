import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Booking.com</span>
        <div className="navItems">
          {/* <button className="navButton-blue">Registrera ditt boende</button> */}
          <button className="navButton">
            <Link to="/login">Skapa konto</Link>
          </button>
          <Link className="button button-link" to="/login">
            Logga in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
