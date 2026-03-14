import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Destinations() {
  const navigate = useNavigate();
  
  // ================= STATE =================
  const [persons, setPersons] = useState(1);
  
  // World Section State
  const [worldMonth, setWorldMonth] = useState("");
  const [worldDest, setWorldDest] = useState("");
  const [worldDays, setWorldDays] = useState(0);

  // India Section State
  const [indiaDest, setIndiaDest] = useState("");
  const [indiaDays, setIndiaDays] = useState(0);

  // ================= DATA FETCHING =================
  const adminDestinations = JSON.parse(localStorage.getItem("adminDestinations")) || [
    { name: "Japan", season: "spring", category: "world" },
    { name: "Netherlands", season: "spring", category: "world" },
    { name: "South Korea", season: "spring", category: "world" },
    { name: "Switzerland", season: "spring", category: "world" },
    { name: "Maldives", season: "summer", category: "world" },
    { name: "Greece", season: "summer", category: "world" },
    { name: "France", season: "summer", category: "world" },
    { name: "Italy", season: "summer", category: "world" },
    { name: "Canada", season: "autumn", category: "world" },
    { name: "Germany", season: "autumn", category: "world" },
    { name: "United States", season: "autumn", category: "world" },
    { name: "China", season: "autumn", category: "world" },
    { name: "Finland", season: "winter", category: "world" },
    { name: "Austria", season: "winter", category: "world" },
    { name: "Kerala", season: "summer", category: "india" },
    { name: "Goa", season: "winter", category: "india" },
    { name: "Rajasthan", season: "winter", category: "india" },
    { name: "Himalayas", season: "summer", category: "india" }
  ];

  const adminPackages = JSON.parse(localStorage.getItem("adminPackages")) || {};
  const adminPhotos = JSON.parse(localStorage.getItem("adminPhotos")) || {};

  /* 🔐 LOGIN REQUIRED */
  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      navigate("/login");
    }
  }, [navigate]);

  // ================= LOGIC =================
  const getFilteredWorldDestinations = () => {
    const worldList = adminDestinations.filter(d => (d.category || 'world') === 'world');
    if (!worldMonth) return worldList.map(d => d.name);

    const monthSeasons = {
      March: "spring", April: "spring", May: "spring",
      June: "summer", July: "summer", August: "summer",
      September: "autumn", October: "autumn", November: "autumn",
      December: "winter", January: "winter", February: "winter"
    };

    const targetSeason = monthSeasons[worldMonth];
    return worldList.filter(d => d.season === targetSeason).map(d => d.name);
  };

  const getIndiaDestinations = () => {
    return adminDestinations.filter(d => d.category === 'india').map(d => d.name);
  };

  const resolvePackageData = (dest, days) => {
    if (!dest || !days) return null;
    const pkg = adminPackages[dest]?.[days];
    const fallbackPrice = 8000 * days * persons;
    
    return {
      dailyPlans: pkg?.dailyPlans || null,
      totalPrice: pkg?.price ? (pkg.price * persons) : fallbackPrice
    };
  };

  const worldPkg = resolvePackageData(worldDest, worldDays);
  const indiaPkg = resolvePackageData(indiaDest, indiaDays);

  // ================= COMPONENTS =================
  const PackageCard = ({ destination, days, pkgData, color = "#0d6efd", accentLabel = "Explorer" }) => {
    if (!destination || !days) return null;

    return (
      <div className="discovery-card-wrapper animate-up">
        <div className="discovery-card">
          <div className="card-hero">
            {adminPhotos[destination] ? (
              <img src={adminPhotos[destination]} alt={destination} className="hero-img" />
            ) : (
              <div className="hero-placeholder" style={{ background: `linear-gradient(45deg, ${color}, #333)` }}>
                <span>{destination}</span>
              </div>
            )}
            <div className="price-float">
              <span className="price-tag">₹{pkgData.totalPrice.toLocaleString()}</span>
              <span className="price-info">for {persons} {persons === 1 ? 'person' : 'persons'}</span>
            </div>
          </div>

          <div className="card-content">
            <div className="card-header">
              <div>
                <span className="badge" style={{ backgroundColor: color }}>{accentLabel}</span>
                <h2 className="dest-title">{destination}</h2>
                <div className="dest-meta">
                  <span>📅 {days} Days</span>
                  <span>✨ Premium Package</span>
                </div>
              </div>
            </div>

            <div className="itinerary-grid">
              {[...Array(days)].map((_, i) => {
                const day = i + 1;
                const dayPlan = pkgData.dailyPlans?.[day];
                return (
                  <div key={day} className="day-slot">
                    <div className="day-num" style={{ borderColor: color, color: color }}>Day {day}</div>
                    <div className="day-desc">
                      <p>{dayPlan?.plan || `Exploring the wonders of ${destination}.`}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button 
              className="action-btn"
              style={{ background: `linear-gradient(135deg, ${color}, ${color}dd)` }}
              onClick={() => window.open(`/trip-details?destination=${destination}&days=${days}&persons=${persons}&price=${pkgData.totalPrice}`, "_blank")}
            >
              Confirm & Book Journey
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="destinations-master">
      {/* BACKGROUND ACCENTS */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      
      <div className="content-container">
        
        {/* ================= WORLD SECTION ================= */}
        <section className="main-section">
          <div className="section-intro">
            <div className="main-icon">🌎</div>
            <h1 className="hero-text">World Travel <span className="text-grad">Packages</span></h1>
            <p className="hero-sub">Explore international horizons with curated luxury itineraries</p>
          </div>

          <div className="discovery-bar glass">
            <div className="discovery-field">
              <label><span className="field-icon">📅</span> Month</label>
              <select value={worldMonth} onChange={(e) => { setWorldMonth(e.target.value); setWorldDest(""); }}>
                <option value="">Any Month</option>
                {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            <div className="discovery-field">
              <label><span className="field-icon">📍</span> Destination</label>
              <select value={worldDest} onChange={(e) => setWorldDest(e.target.value)}>
                <option value="">Choose Destination</option>
                {getFilteredWorldDestinations().map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>

            <div className="discovery-field">
              <label><span className="field-icon">🕒</span> Duration</label>
              <select value={worldDays} onChange={(e) => setWorldDays(Number(e.target.value))}>
                <option value="0">Choose Days</option>
                {[3, 4, 5, 6, 7, 8, 10, 12].map(d => <option key={d} value={d}>{d} Days</option>)}
              </select>
            </div>

            <div className="discovery-field">
              <label><span className="field-icon">👥</span> Travelers</label>
              <select value={persons} onChange={(e) => setPersons(Number(e.target.value))}>
                {[1, 2, 3, 4, 5, 8, 10].map(p => <option key={p} value={p}>{p} {p === 1 ? 'Person' : 'Persons'}</option>)}
              </select>
            </div>
          </div>

          <PackageCard destination={worldDest} days={worldDays} pkgData={worldPkg} color="#0d6efd" accentLabel="World Explorer" />
        </section>

        {/* ================= INDIA SECTION ================= */}
        <section className="main-section india-section">
          <div className="section-intro">
            <div className="main-icon">🇮🇳</div>
            <h1 className="hero-text">Incredible <span className="text-grad-india">India</span></h1>
            <p className="hero-sub">Discover the soul of the subcontinent through heritage and nature</p>
          </div>

          <div className="discovery-bar glass-india">
            <div className="discovery-field">
              <label><span className="field-icon">🕉️</span> State/City</label>
              <select value={indiaDest} onChange={(e) => setIndiaDest(e.target.value)}>
                <option value="">Explore India</option>
                {getIndiaDestinations().map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>

            <div className="discovery-field">
              <label><span className="field-icon">⏳</span> Stay Duration</label>
              <select value={indiaDays} onChange={(e) => setIndiaDays(Number(e.target.value))}>
                <option value="0">Choose Days</option>
                {[3, 4, 5, 6, 7, 8, 10, 12].map(d => <option key={d} value={d}>{d} Days</option>)}
              </select>
            </div>

            <div className="discovery-field" style={{ border: 'none' }}>
              <label><span className="field-icon">👥</span> Group Size</label>
              <select value={persons} onChange={(e) => setPersons(Number(e.target.value))}>
                {[1, 2, 3, 4, 5, 8, 10].map(p => <option key={p} value={p}>{p} {p === 1 ? 'Person' : 'Persons'}</option>)}
              </select>
            </div>
          </div>

          <PackageCard 
            destination={indiaDest} 
            days={indiaDays} 
            pkgData={indiaPkg} 
            color="#198754" 
            accentLabel="Heritage Journey" 
          />
        </section>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap');

        .destinations-master {
          font-family: 'Outfit', sans-serif;
          min-height: 100vh;
          background-color: #fcfdfe;
          position: relative;
          overflow-x: hidden;
          padding-top: 40px;
          padding-bottom: 120px;
        }

        .bg-blob {
          position: fixed;
          width: 600px;
          height: 600px;
          filter: blur(80px);
          z-index: 0;
          opacity: 0.15;
          border-radius: 50%;
        }
        .blob-1 { top: -100px; right: -100px; background: #0d6efd; }
        .blob-2 { bottom: -100px; left: -100px; background: #198754; }

        .content-container {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 25px;
        }

        .main-section { margin-bottom: 100px; }
        .section-intro { text-align: center; margin-bottom: 40px; }
        .main-icon { font-size: 3.5rem; margin-bottom: 15px; }

        .hero-text { 
          font-size: 3.2rem; 
          font-weight: 700; 
          color: #1a1a1a; 
          margin-bottom: 10px;
          letter-spacing: -1px;
        }
        .text-grad { background: linear-gradient(135deg, #0d6efd, #6610f2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .text-grad-india { background: linear-gradient(135deg, #198754, #ff9933); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .hero-sub { font-size: 1.15rem; color: #555; }

        /* Discovery Bar */
        .discovery-bar {
          display: flex;
          align-items: center;
          padding: 12px 25px;
          border-radius: 50px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.06);
          margin-bottom: 50px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.7);
        }
        .glass { background: rgba(13, 110, 253, 0.04); }
        .glass-india { background: rgba(25, 135, 84, 0.04); }

        .discovery-field {
          flex: 1;
          padding: 10px 20px;
          border-right: 1px solid rgba(0,0,0,0.08);
          display: flex;
          flex-direction: column;
        }
        .discovery-field:last-child { border-right: none; }
        
        .discovery-field label {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 5px;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .discovery-field select {
          border: none;
          background: transparent;
          font-size: 1.05rem;
          font-weight: 600;
          color: #333;
          outline: none;
          cursor: pointer;
        }

        /* Package Card */
        .discovery-card-wrapper { max-width: 900px; margin: 0 auto; }
        .discovery-card {
          background: #fff;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 40px 80px rgba(0,0,0,0.08);
          border: 1px solid #eee;
        }

        .card-hero {
          height: 350px;
          position: relative;
          overflow: hidden;
        }
        .hero-img { width: 100%; height: 100%; object-fit: cover; }
        .hero-placeholder { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 2.5rem; font-weight: 700; }

        .price-float {
          position: absolute;
          bottom: 25px;
          right: 25px;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(10px);
          padding: 15px 25px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          text-align: right;
        }
        .price-tag { display: block; font-size: 1.8rem; font-weight: 700; color: #1a1a1a; line-height: 1; }
        .price-info { font-size: 0.85rem; color: #666; font-weight: 500; }

        .card-content { padding: 35px; }
        .card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 30px; }
        .badge { color: white; padding: 5px 12px; borderRadius: 8px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; display: inline-block; margin-bottom: 10px; }
        .dest-title { font-size: 2.5rem; font-weight: 700; color: #1a1a1a; margin-bottom: 5px; }
        .dest-meta { display: flex; gap: 20px; color: #777; font-weight: 500; }

        .itinerary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }
        .day-slot {
          background: #f8f9fb;
          padding: 20px;
          border-radius: 20px;
          border: 1px solid #eee;
          transition: transform 0.3s;
        }
        .day-slot:hover { transform: translateY(-5px); border-color: #0d6efd44; }
        .day-num {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          padding: 3px 10px;
          border: 1px solid;
          border-radius: 8px;
          margin-bottom: 10px;
        }
        .day-desc p { font-size: 0.95rem; color: #444; line-height: 1.6; margin: 0; }

        .action-btn {
          width: 100%;
          padding: 20px;
          border: none;
          border-radius: 20px;
          color: white;
          font-size: 1.2rem;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 15px 30px rgba(13, 110, 253, 0.2);
          transition: all 0.3s;
        }
        .action-btn:hover { transform: scale(1.02); opacity: 0.9; }

        .animate-up { animation: slideInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 900px) {
          .discovery-bar { flex-direction: column; border-radius: 25px; padding: 15px; }
          .discovery-field { width: 100%; border-right: none; border-bottom: 1px solid #eee; padding: 15px 10px; }
          .discovery-field:last-child { border-bottom: none; }
          .hero-text { font-size: 2.2rem; }
          .card-hero { height: 250px; }
          .dest-title { font-size: 1.8rem; }
        }
      `}</style>
    </div>
  );
}

export default Destinations;
