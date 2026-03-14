import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    const storedAdminPass = localStorage.getItem("adminPassword");
    const storedAdminEmail = localStorage.getItem("adminEmail") || "admin@admin.com";
    const defaultPass = "TourAdmin@2026";

    if (email === storedAdminEmail) {
      // Prioritize the changed password if it exists, otherwise use default
      const currentValidPass = storedAdminPass || defaultPass;
      
      if (password === currentValidPass) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("isAdmin", "true");
        localStorage.setItem("adminName", localStorage.getItem("adminName") || "Administrator");
        navigate("/admin");
      } else {
        alert("Incorrect Admin Password. If you haven't changed it, use 'TourAdmin@2026'");
      }
    } else if (email && password) {
      // Normal User Flow
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("isAdmin", "false");
      navigate("/destinations");
    } else {
      alert("Please enter valid credentials");
    }
  };

  return (
    <div className="login-container">
      <form className="login-card animated" onSubmit={handleLogin}>
        <h2>Welcome Back 👋</h2>
        <p className="login-subtitle">
          Login to explore amazing destinations
        </p>

        {/* EMAIL */}
        <div className="input-group">
          <FaEnvelope className="input-icon" />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* PASSWORD */}
        <div className="input-group">
          <FaLock className="input-icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>

        <p className="login-footer">
          Don’t have an account? <span>Register</span>
        </p>

        {/* ADMIN QUICK LOGIN */}
        <div style={{ marginTop: '20px', paddingTop: '15px', borderTop: '1px solid #eee' }}>
          <button
            type="button"
            onClick={() => { 
              const currentAdminEmail = localStorage.getItem("adminEmail") || "admin@admin.com";
              setEmail(currentAdminEmail);
              setPassword(""); // Requires manual entry as requested
              // Also ensure we use the correct default if they haven't set one
              if (!localStorage.getItem("adminPassword")) {
                localStorage.setItem("adminPassword", "TourAdmin@2026");
              }
            }}
            style={{ marginTop: '10px', background: '#e9ecef', color: '#495057', padding: '10px', borderRadius: '10px', border: 'none', width: '100%', cursor: 'pointer', fontWeight: 'bold' }}
          >
            🔑 Quick Admin Login
          </button>
          <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '8px' }}>
            Fills email, manual password entry required
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
