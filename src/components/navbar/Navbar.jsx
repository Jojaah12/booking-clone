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
            <Link to="/login" className="navButtonLink">
              Skapa konto
            </Link>
          </button>
          <button className="navButton">
            <Link to="/login" className="navButtonLink">
              Logga in
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
