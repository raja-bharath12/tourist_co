import { Link, NavLink } from 'react-router-dom'
import {
  FaHome,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaSignInAlt
} from 'react-icons/fa'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🌍 TouristCo</div>

      <ul className="nav-links">
        <li>
          <NavLink to="/" end>
            <FaHome className="nav-icon" /> Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/destinations">
            <FaMapMarkedAlt className="nav-icon" /> Destinations
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact">
            <FaPhoneAlt className="nav-icon" /> Contact
          </NavLink>
        </li>

        <li>
          <NavLink to="/login">
            <FaSignInAlt className="nav-icon" /> Login
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
