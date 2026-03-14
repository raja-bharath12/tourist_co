import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

import Home from './pages/Home.jsx'
import Destinations from './pages/Destinations.jsx'
import Packages from './pages/Packages.jsx'
import Hotels from './pages/Hotels.jsx'
import Pricing from './pages/Pricing.jsx'
import TripDetails from './pages/TripDetails.jsx'
import Login from './pages/Login.jsx'
import Contact from './pages/Contact.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import AdminWorldPackages from './pages/AdminWorldPackages.jsx'
import AdminIndiaPackages from './pages/AdminIndiaPackages.jsx'

import './style.css'

function Layout({ children }) {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {!isLoginPage && <Navbar />}
      {children}
      {!isLoginPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/destinations" element={<ProtectedRoute><Destinations /></ProtectedRoute>} />
          <Route path="/packages" element={<ProtectedRoute><Packages /></ProtectedRoute>} />
          <Route path="/hotels" element={<ProtectedRoute><Hotels /></ProtectedRoute>} />
          <Route path="/pricing" element={<ProtectedRoute><Pricing /></ProtectedRoute>} />
          <Route path="/trip-details" element={<ProtectedRoute><TripDetails /></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
          <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          <Route path="/admin/world" element={<ProtectedRoute><AdminWorldPackages /></ProtectedRoute>} />
          <Route path="/admin/india" element={<ProtectedRoute><AdminIndiaPackages /></ProtectedRoute>} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

