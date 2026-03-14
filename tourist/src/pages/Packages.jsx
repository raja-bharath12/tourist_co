import { useState } from 'react'

function Packages() {
  const [place, setPlace] = useState('')
  const [days, setDays] = useState('')
  const [plan, setPlan] = useState([])

  // 🌍 ACTIVE DATA
  const savedDestinations = JSON.parse(localStorage.getItem("adminDestinations")) || [];
  const adminPackages = JSON.parse(localStorage.getItem("adminPackages")) || {};

  // 🔁 GENERATE DAY-WISE PLAN
  const generatePlan = (selectedPlace, selectedDays) => {
    if (!selectedPlace || !selectedDays) {
      setPlan([])
      return
    }

    // Try to get ITINERARY from adminPackages
    const realPkg = adminPackages[selectedPlace]?.[selectedDays];
    
    if (realPkg && realPkg.dailyPlans) {
      const itinerary = Object.entries(realPkg.dailyPlans).map(([day, data]) => ({
        day: Number(day),
        description: data.plan,
        photo: data.photo
      })).sort((a,b) => a.day - b.day);
      setPlan(itinerary);
    } else {
      // Fallback for missing itinerary
      const itinerary = []
      for (let i = 1; i <= selectedDays; i++) {
        itinerary.push({
          day: i,
          description: i === 1 ? 'Arrival and hotel check-in.' : i === selectedDays ? 'Packing and departure.' : `Exploring ${selectedPlace} landmarks.`
        })
      }
      setPlan(itinerary)
    }
  }

  return (
    <div className="page">
      <h1>Customize Your Travel Package</h1>
      <p>Design your perfect journey step by step</p>

      {/* ================= CHOOSE YOUR TRIP ================= */}
      <div className="choose-trip">

        <h2 className="choose-title">✨ Choose Your Trip ✨</h2>
        <p className="choose-subtitle">
          Design your perfect journey in just two simple steps
        </p>

        <div className="choose-steps">

          {/* STEP 1 */}
          <div className="choose-card">
            <div className="step-badge">Step 1</div>
            <h3>🌍 Select Destination</h3>
            <p>Pick the place you dream to explore</p>

              <select
                className="choose-select"
                value={place}
                onChange={(e) => {
                  const value = e.target.value
                  setPlace(value)
                  generatePlan(value, days)
                }}
              >
                <option value="">Choose Destination</option>
                <optgroup label="🌍 World Packages">
                  {savedDestinations.filter(d => (d.category || 'world') === 'world').map(d => (
                    <option key={d.name} value={d.name}>{d.name}</option>
                  ))}
                </optgroup>
                <optgroup label="🇮🇳 India Packages">
                  {savedDestinations.filter(d => d.category === 'india').map(d => (
                    <option key={d.name} value={d.name}>{d.name}</option>
                  ))}
                </optgroup>
              </select>
          </div>

          {/* STEP 2 */}
          <div className="choose-card">
            <div className="step-badge">Step 2</div>
            <h3>📅 Select Duration</h3>
            <p>Decide how long your trip will be</p>

            <select
              className="choose-select"
              value={days}
              onChange={(e) => {
                const value = Number(e.target.value)
                setDays(value)
                generatePlan(place, value)
              }}
            >
              <option value="">Choose Days</option>
              <option value="3">3 Days</option>
              <option value="5">5 Days</option>
              <option value="7">7 Days</option>
              <option value="10">10 Days</option>
            </select>
          </div>

        </div>
      </div>

      {/* ================= ITINERARY ================= */}
      {plan.length > 0 && (
        <div>
          <h2>{days}-Day Itinerary for {place}</h2>

          {plan.map((item) => (
            <div key={item.day} className="itinerary-card">
              <h3>Day {item.day}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Packages
