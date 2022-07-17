import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Booking.com</span>
        <div className="navItems">
          {/* <button className="navButton-blue">Registrera ditt boende</button> */}
          <button className="navButton">Skapa konto</button>
          <button className="navButton">Logga in</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
