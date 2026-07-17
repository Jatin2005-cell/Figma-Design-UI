import "./Navbar.css";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">

        <div className="logo">
          Elementum
        </div>

        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Studio</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>

        <button className="menu-btn">
          <HiOutlineMenuAlt3 />
        </button>

      </div>
    </nav>
  );
}

export default Navbar;