import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { nearbyPlaces } from "../data/nearbyPlaces";

function Destinations() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState(0);

  /* 🔐 LOGIN REQUIRED */
  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      navigate("/login");
    }
  }, [navigate]);

  /* 💰 BUDGET PRICE PER DAY (PLACE-BASED) */
  const pricePerDay = {
    // 🇮🇳 INDIA – Budget
    Goa: 2800,
    Manali: 2500,
    Kerala: 3000,
    Jaipur: 2200,
    Agra: 2000,
    Delhi: 2300,
    Ooty: 2400,
    Kodaikanal: 2500,
    Rishikesh: 2200,
    Varanasi: 2100,

    // 🇫🇷 FRANCE
    Paris: 9500,
    Nice: 9000,
    Lyon: 8500,
    Cannes: 9800,
    Marseille: 8700,
    Bordeaux: 8200,

    // 🇮🇹 ITALY
    Rome: 9000,
    Venice: 9200,
    Florence: 8800,
    Milan: 9100,
    Pisa: 8300,
    Naples: 8400,

    // 🇺🇸 USA
    "New York": 10000,
    "Los Angeles": 9500,
    "Las Vegas": 9000,
    "San Francisco": 9800,
    Miami: 8800,
    Orlando: 8500,
    Chicago: 9000,
    Boston: 9200,
    Seattle: 9300,
    Washington: 8900,

    // 🇯🇵 JAPAN
    Tokyo: 8800,
    Kyoto: 8200,
    Osaka: 8500,

    // 🇹🇭 THAILAND
    Bangkok: 4500,
    Phuket: 5500,

    // 🇦🇪 UAE
    Dubai: 9000,

    // 🇨🇭 SWITZERLAND
    Zurich: 11000,
    Interlaken: 12000,

    // 🇬🇧 UK
    London: 9500,

    // 🇦🇺 AUSTRALIA
    Sydney: 9800,
    Melbourne: 9300
  };

  /* 🧭 UNIQUE DAY-WISE ITINERARY GENERATOR */
  const generateItinerary = () => {
    if (!destination || !days) return [];

    const places = nearbyPlaces[destination] || [];
    const plan = [];

    // Day 1
    plan.push("Arrival, hotel check-in & leisure time");

    let index = 0;

    // Middle days
    for (let day = 2; day < days; day++) {
      if (places[index]) {
        plan.push(`Excursion to ${places[index]}`);
        index++;
      } else {
        plan.push("Free day for shopping & local exploration");
      }
    }

    // Last day
    if (days > 1) {
      plan.push("Shopping, pack-up & departure");
    }

    return plan;
  };

  const itinerary = generateItinerary();
  const dailyPrice = pricePerDay[destination] || 8000;
  const totalPrice = destination && days ? dailyPrice * days : 0;

  return (
    <div className="page">
      {/* HEADER */}
      <h1 className="section-title">🌍 World Travel Packages</h1>
      <p className="section-subtitle">
        Select destination and duration to see your personalized travel plan
      </p>

      {/* SELECTORS */}
      <div className="package-selectors">
        <div className="selector-card">
          <h3>🌍 Destination</h3>
          <select
            className="styled-select"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
            <option value="">Choose Destination</option>
            {Object.keys(nearbyPlaces).map((place) => (
              <option key={place} value={place}>
                {place}
              </option>
            ))}
          </select>
        </div>

        <div className="selector-card">
          <h3>📅 Duration</h3>
          <select
            className="styled-select"
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
          >
            <option value="">Choose Days</option>
            <option value="3">3 Days</option>
            <option value="5">5 Days</option>
            <option value="7">7 Days</option>
            <option value="10">10 Days</option>
          </select>
        </div>
      </div>

      {/* PACKAGE CARD */}
      {destination && days > 0 && (
        <div className="modern-package-card">
          {/* HEADER */}
          <div className="modern-header">
            <h2>✨ {destination} Travel Plan</h2>
            <span className="badge">
              {days} Days · ₹{dailyPrice.toLocaleString()} / day
            </span>
          </div>

          {/* ITINERARY */}
          <div className="modern-itinerary">
            {itinerary.map((item, index) => (
              <div className="itinerary-item" key={index}>
                <div className="day-circle">Day {index + 1}</div>
                <p>{item}</p>
              </div>
            ))}
          </div>

          {/* PRICE */}
          <div className="modern-price">
            <h3>Total Package Price</h3>
            <h1>₹{totalPrice.toLocaleString()}</h1>
          </div>

          {/* CTA */}
          <button
            className="modern-book-btn"
            onClick={() =>
              window.open(
                `/trip-details?destination=${destination}&days=${days}&price=${totalPrice}`,
                "_blank"
              )
            }
          >
            Book Now for ₹{totalPrice.toLocaleString()}
          </button>
        </div>
      )}
    </div>
  );
}

export default Destinations;
