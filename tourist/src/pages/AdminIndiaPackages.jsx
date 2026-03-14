import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function AdminIndiaPackages() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [dailyPlans, setDailyPlans] = useState({});
  const [price, setPrice] = useState("");
  const [allPlaces, setAllPlaces] = useState([]);

  // Destinations Management State
  const [adminDestinations, setAdminDestinations] = useState(() => {
    const saved = localStorage.getItem("adminDestinations");
    if (saved) return JSON.parse(saved);
    return [];
  });

  const [newDestName, setNewDestName] = useState("");
  const [editingDestIndex, setEditingDestIndex] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("isAdmin") !== "true") {
      navigate("/");
    } else {
      const indiaDests = adminDestinations.filter(d => d.category === 'india');
      setAllPlaces(indiaDests.map(d => d.name));
    }
  }, [navigate, adminDestinations]);

  useEffect(() => {
    localStorage.setItem("adminDestinations", JSON.stringify(adminDestinations));
  }, [adminDestinations]);

  useEffect(() => {
    if (destination && duration) {
      const adminPackages = JSON.parse(localStorage.getItem("adminPackages")) || {};
      const currentPkg = adminPackages[destination] && adminPackages[destination][duration] ? adminPackages[destination][duration] : {};
      
      const initialPlans = {};
      for (let i = 1; i <= Number(duration); i++) {
        initialPlans[i] = (currentPkg.dailyPlans && currentPkg.dailyPlans[i]) || { plan: "", photo: "" };
      }
      setDailyPlans(initialPlans);
      setPrice(currentPkg.price || "");
    } else {
      setDailyPlans({});
      setPrice("");
    }
  }, [destination, duration]);

  const handleAddDestination = (e) => {
    e.preventDefault();
    if (!newDestName) return;

    if (editingDestIndex !== null) {
      const updated = [...adminDestinations];
      updated[editingDestIndex] = { ...updated[editingDestIndex], name: newDestName };
      setAdminDestinations(updated);
      setEditingDestIndex(null);
    } else {
      setAdminDestinations([...adminDestinations, { name: newDestName, season: "summer", category: "india" }]);
    }
    setNewDestName("");
  };

  const handleEditDest = (name) => {
    const index = adminDestinations.findIndex(d => d.name === name);
    const dest = adminDestinations[index];
    setNewDestName(dest.name);
    setEditingDestIndex(index);
  };

  const handleDeleteDest = (name) => {
    if (window.confirm(`Delete ${name} and all its associated packages?`)) {
      const updated = adminDestinations.filter(d => d.name !== name);
      setAdminDestinations(updated);

      // Cleanup associated packages and photos
      const adminPackages = JSON.parse(localStorage.getItem("adminPackages")) || {};
      const adminPhotos = JSON.parse(localStorage.getItem("adminPhotos")) || {};
      
      if (adminPackages[name]) {
        delete adminPackages[name];
        localStorage.setItem("adminPackages", JSON.stringify(adminPackages));
      }
      if (adminPhotos[name]) {
        delete adminPhotos[name];
        localStorage.setItem("adminPhotos", JSON.stringify(adminPhotos));
      }
    }
  };

  const handlePlanChange = (day, value) => {
    setDailyPlans(prev => ({ ...prev, [day]: { ...prev[day], plan: value } }));
  };

  const handlePhotoUpload = (day, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDailyPlans(prev => ({ ...prev, [day]: { ...prev[day], photo: reader.result } }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    const adminPackages = JSON.parse(localStorage.getItem("adminPackages")) || {};
    if (!adminPackages[destination]) adminPackages[destination] = {};
    adminPackages[destination][duration] = { dailyPlans, price: Number(price) };
    localStorage.setItem("adminPackages", JSON.stringify(adminPackages));
    
    // Save main destination photo if it exists locally in state
    if (mainPhoto) {
      const adminPhotos = JSON.parse(localStorage.getItem("adminPhotos")) || {};
      adminPhotos[destination] = mainPhoto;
      localStorage.setItem("adminPhotos", JSON.stringify(adminPhotos));
    }

    alert("India Package saved!");
    setDestination(""); setDuration("");
    setMainPhoto("");
  };

  const [mainPhoto, setMainPhoto] = useState("");

  const handleMainPhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setMainPhoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (destination) {
      const adminPhotos = JSON.parse(localStorage.getItem("adminPhotos")) || {};
      setMainPhoto(adminPhotos[destination] || "");
    }
  }, [destination]);

  return (
    <div className="page admin-dashboard">
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
        <Link to="/admin" style={{ display: 'inline-block', marginBottom: '20px', color: '#198754', textDecoration: 'none', fontWeight: 'bold' }}>← Back to Admin Hub</Link>
        <h1 className="section-title" style={{ color: '#198754' }}>🇮🇳 India Travel Packages</h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {/* MANAGE DESTINATIONS */}
          <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '15px' }}>
            <h2 style={{ marginBottom: '20px' }}>🗺️ Manage India Destinations</h2>
            <form onSubmit={handleAddDestination} style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
              <input type="text" value={newDestName} onChange={(e) => setNewDestName(e.target.value)} placeholder="New India Destination" style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} />
              <button type="submit" style={{ padding: '10px 20px', background: '#198754', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold' }}>{editingDestIndex !== null ? "Update" : "Add"}</button>
            </form>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px' }}>
              {adminDestinations.filter(d => d.category === 'india').map((dest, idx) => (
                <div key={idx} style={{ background: '#fff', padding: '15px', borderRadius: '12px', border: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}>
                  <strong>{dest.name}</strong>
                  <div>
                    <button onClick={() => handleEditDest(dest.name)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>✏️</button>
                    <button onClick={() => handleDeleteDest(dest.name)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>🗑️</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PACKAGE MANAGER */}
          <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '15px' }}>
            <h2 style={{ color: '#198754' }}>🇮🇳 India Package Details</h2>
            <form onSubmit={handleSave}>
              <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                <select value={destination} onChange={(e) => setDestination(e.target.value)} style={{ flex: 1, padding: '10px' }}>
                  <option value="">Choose Destination</option>
                  {allPlaces.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
                <select value={duration} onChange={(e) => setDuration(e.target.value)} style={{ flex: 1, padding: '10px' }}>
                  <option value="">Choose Duration</option>
                  {[3, 4, 5, 6, 7, 8, 10, 12].map(d => <option key={d} value={d}>{d} Days</option>)}
                </select>
              </div>

              {destination && (
                <div style={{ background: '#fff', padding: '20px', borderRadius: '15px', marginBottom: '30px', border: '2px dashed #ccc' }}>
                  <h3 style={{ marginBottom: '15px', color: '#198754' }}>📸 Main Destination Image</h3>
                  <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '10px' }}>This photo will be the main header for the {destination} package card.</p>
                  <input type="file" accept="image/*" onChange={handleMainPhotoUpload} style={{ display: 'block', marginBottom: '15px' }} />
                  {mainPhoto && <img src={mainPhoto} alt="Main Preview" style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: '10px' }} />}
                </div>
              )}

              {destination && duration && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[...Array(Number(duration))].map((_, i) => (
                    <div key={i+1} style={{ background: '#fff', padding: '20px', borderRadius: '10px' }}>
                      <h4 style={{ marginBottom: '10px' }}>Day {i+1} Plan</h4>
                      <textarea value={dailyPlans[i+1]?.plan || ""} onChange={(e) => handlePlanChange(i+1, e.target.value)} placeholder="Describe the day..." style={{ width: '100%', padding: '10px', height: '80px', marginBottom: '10px' }} />
                      <input type="file" accept="image/*" onChange={(e) => handlePhotoUpload(i+1, e)} style={{ display: 'block' }} />
                      {dailyPlans[i+1]?.photo && <img src={dailyPlans[i+1].photo} alt="Preview" style={{ width: '100px', marginTop: '10px', borderRadius: '5px' }} />}
                    </div>
                  ))}
                  <div style={{ background: '#fff', padding: '20px', borderRadius: '10px' }}>
                    <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>💰 Total Package Price (for 1 person)</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="e.g. 25000" style={{ width: '100%', padding: '10px', borderRadius: '5px' }} />
                  </div>
                  <button type="submit" style={{ padding: '15px', background: '#198754', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>Save India Package</button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminIndiaPackages;
