import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="FlowerPlant Logo" className="logo" />
          <span className="logo-text">FlowerPlant</span>
        </Link>

        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/my-plants" className="nav-link">My plants</Link>
          <Link to="/about" className="nav-link">About</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;