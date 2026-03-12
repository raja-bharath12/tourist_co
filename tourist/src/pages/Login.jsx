import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/destinations");
    } else {
      alert("Please enter email and password");
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
      </form>
    </div>
  );
}

export default Login;
