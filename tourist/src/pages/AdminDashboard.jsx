import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();
  
  // Profile State
  const [adminName, setAdminName] = useState(localStorage.getItem("adminName") || "Admin");
  const [adminEmail, setAdminEmail] = useState(localStorage.getItem("adminEmail") || "admin@admin.com");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("isAdmin") !== "true") {
      navigate("/");
    }
  }, [navigate]);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    localStorage.setItem("adminName", adminName);
    localStorage.setItem("adminEmail", adminEmail);
    if (newPassword || confirmPassword) {
      if (newPassword !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      localStorage.setItem("adminPassword", newPassword);
      alert("Profile and Password updated!");
    } else {
      alert("Profile updated!");
    }
    setNewPassword(""); setConfirmPassword("");
  };

  return (
    <div className="page admin-dashboard">
      <h1 className="section-title">🛡️ Admin Management Hub</h1>
      <p className="section-subtitle">Choose a category to manage or update your profile</p>

      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px', padding: '20px' }}>
        
        {/* ================= NAVIGATION CARDS ================= */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          
          <Link to="/admin/world" style={{ textDecoration: 'none' }}>
            <div className="hub-card" style={{ background: 'linear-gradient(135deg, #0d6efd, #0b5ed7)', padding: '40px', borderRadius: '20px', color: 'white', textAlign: 'center', transition: 'transform 0.3s', cursor: 'pointer', boxShadow: '0 10px 20px rgba(13, 110, 253, 0.2)' }}>
              <div style={{ fontSize: '4rem', marginBottom: '15px' }}>🌍</div>
              <h2 style={{ fontSize: '1.8rem' }}>World Packages</h2>
              <p style={{ opacity: 0.9 }}>Manage international destinations, daily plans, and pricing.</p>
            </div>
          </Link>

          <Link to="/admin/india" style={{ textDecoration: 'none' }}>
            <div className="hub-card" style={{ background: 'linear-gradient(135deg, #198754, #157347)', padding: '40px', borderRadius: '20px', color: 'white', textAlign: 'center', transition: 'transform 0.3s', cursor: 'pointer', boxShadow: '0 10px 20px rgba(25, 135, 84, 0.2)' }}>
              <div style={{ fontSize: '4rem', marginBottom: '15px' }}>🇮🇳</div>
              <h2 style={{ fontSize: '1.8rem' }}>India Packages</h2>
              <p style={{ opacity: 0.9 }}>Manage domestic destinations, heritage tours, and local plans.</p>
            </div>
          </Link>

        </div>

        {/* ================= PROFILE & SECURITY ================= */}
        <div style={{ background: '#f8f9fa', padding: '40px', borderRadius: '20px', textAlign: 'left', border: '1px solid #eee' }}>
          <h2 style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>🔐 Admin Profile & Security</h2>
          
          <form onSubmit={handleUpdateProfile} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div style={{ gridColumn: 'span 2' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>Email Address (Login Identity)</label>
              <input type="email" value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} placeholder="admin@example.com" style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #ddd' }} />
            </div>

            <div style={{ gridColumn: 'span 2' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>User Name</label>
              <input type="text" value={adminName} onChange={(e) => setAdminName(e.target.value)} placeholder="Enter your name" style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #ddd' }} />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>New Password</label>
              <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="••••••••" style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #ddd' }} />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>Confirm Password</label>
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="••••••••" style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #ddd' }} />
            </div>

            <div style={{ gridColumn: 'span 2' }}>
              <button type="submit" style={{ width: '100%', padding: '15px', background: '#343a40', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.1rem' }}>Update Profile Settings</button>
            </div>
          </form>
        </div>

      </div>

      <style>{`
        .hub-card:hover {
          transform: translateY(-10px);
        }
        .admin-dashboard {
          padding-bottom: 80px;
        }
      `}</style>
    </div>
  );
}

export default AdminDashboard;
