import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaPlane,
  FaHotel,
  FaWallet,
  FaHeadset
} from "react-icons/fa";
import SupportModal from "../components/SupportModal.jsx";

function Home() {
  const [showSupport, setShowSupport] = useState(false);
  const navigate = useNavigate();

  // 🔐 LOGIN CHECK BEFORE EXPLORING
  const handleExplore = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      navigate("/login");
    } else {
      navigate("/destinations");
    }
  };

  return (
    <>
      {/* ================= MODERN HERO HEADER ================= */}
      <section className="hero-modern">
        <div className="hero-overlay"></div>

        <div className="hero-modern-content">
          <span className="hero-badge">
            ✈️ Trusted by 10,000+ Happy Travelers
          </span>

          <h1>
            Discover the World with <span>TouristCo</span>
          </h1>

          <p>
            Premium travel experiences, personalized itineraries,
            luxury stays, and budget-friendly plans —
            all in one place.
          </p>

          <div className="hero-actions">
            <button className="primary-btn" onClick={handleExplore}>
              🌍 Explore Destinations
            </button>

            <button
              className="secondary-btn"
              onClick={() =>
                window.scrollTo({ top: 850, behavior: "smooth" })
              }
            >
              ✨ Why Choose Us
            </button>
          </div>

          <div className="hero-stats">
            <div>
              <h3>150+</h3>
              <span>Destinations</span>
            </div>
            <div>
              <h3>100+</h3>
              <span>Hotels</span>
            </div>
            <div>
              <h3>24/7</h3>
              <span>Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="why-choose">
        <h2>Why Choose TouristCo?</h2>
        <p className="why-subtitle">
          Everything you need for a perfect journey
        </p>

        <div className="why-cards">
          {/* Best Travel Packages */}
          <a
            href="/packages"
            target="_blank"
            rel="noopener noreferrer"
            className="why-card"
          >
            <FaPlane className="why-icon" />
            <h3>Best Travel Packages</h3>
            <p>
              Select the number of days and get a
              detailed day-by-day travel itinerary.
            </p>
          </a>

          {/* Premium Hotels */}
          <a
            href="/hotels"
            target="_blank"
            rel="noopener noreferrer"
            className="why-card"
          >
            <FaHotel className="why-icon" />
            <h3>Premium Hotels</h3>
            <p>
              Choose a destination and stay in
              luxury hotels with best pricing.
            </p>
          </a>

          {/* Appropriate Pricing */}
          <a
            href="/pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="why-card"
          >
            <FaWallet className="why-icon" />
            <h3>Appropriate Pricing</h3>
            <p>
              Enter your budget and get the
              most suitable travel plan.
            </p>
          </a>

          {/* 24/7 Customer Support */}
          <div
            className="why-card"
            onClick={() => setShowSupport(true)}
          >
            <FaHeadset className="why-icon" />
            <h3>24/7 Customer Support</h3>
            <p>
              Our travel experts are available
              anytime to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* SUPPORT MODAL */}
      {showSupport && (
        <SupportModal onClose={() => setShowSupport(false)} />
      )}
    </>
  );
}

export default Home;
