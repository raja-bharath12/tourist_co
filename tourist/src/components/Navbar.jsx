import { Link, NavLink, useNavigate } from 'react-router-dom'
import {
  FaHome,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaSignOutAlt,
  FaUserCog
} from 'react-icons/fa'

function Navbar() {
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("isAdmin");
    navigate("/login");
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
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

        {!isAdmin && (
          <li>
            <NavLink to="/contact">
              <FaPhoneAlt className="nav-icon" /> Contact
            </NavLink>
          </li>
        )}

        {isAdmin && (
          <li>
            <NavLink to="/admin">
              <FaUserCog className="nav-icon" /> Admin Panel
            </NavLink>
          </li>
        )}

        <li>
          <button className="nav-logout-btn" onClick={handleLogout} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
            <FaSignOutAlt className="nav-icon" /> Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
