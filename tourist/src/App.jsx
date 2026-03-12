import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home.jsx'
import Destinations from './pages/Destinations.jsx'
import Packages from './pages/Packages.jsx'
import Hotels from './pages/Hotels.jsx'
import Pricing from './pages/Pricing.jsx'
import TripDetails from './pages/TripDetails.jsx'
import Login from './pages/Login.jsx'
import Contact from './pages/Contact.jsx'

import './style.css'

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/trip-details" element={<TripDetails />} />

        {/* Pages that open in new tab via <a href target="_blank"> */}
        <Route path="/packages" element={<Packages />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/pricing" element={<Pricing />} />

        {/* Destination → Book Now */}
        <Route path="/trip-details" element={<TripDetails />} />

        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
