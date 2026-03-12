import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-section">
          <h2>TouristCo 🌍</h2>
          <p>
            Making your travel dreams come true with
            affordable packages, premium hotels,
            and unforgettable experiences.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/destinations">Destinations</a>
            </li>

            <li>
              <a
                href="/packages"
                target="_blank"
                rel="noopener noreferrer"
              >
                Packages
              </a>
            </li>

            <li>
              <a
                href="/hotels"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hotels
              </a>
            </li>

            <li>
              <a
                href="/pricing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@touristco.com</p>
          <p>Phone: +91 98765 43210</p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Subscribe to get travel deals & updates</p>

          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <p>© 2025 TouristCo. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
