import { useState } from 'react'

function Packages() {
  const [place, setPlace] = useState('')
  const [days, setDays] = useState('')
  const [plan, setPlan] = useState([])

  // 🌍 10 DESTINATIONS WITH FAMOUS PLACES
  const destinationPlaces = {
    Goa: [
      'Baga Beach',
      'Calangute Beach',
      'Fort Aguada',
      'Anjuna Beach',
      'Dudhsagar Waterfalls'
    ],
    Manali: [
      'Hadimba Temple',
      'Solang Valley',
      'Rohtang Pass',
      'Old Manali',
      'Vashisht Hot Springs'
    ],
    Kerala: [
      'Munnar Tea Gardens',
      'Alleppey Houseboat',
      'Kochi Fort',
      'Thekkady Wildlife Sanctuary',
      'Varkala Beach'
    ],
    Jaipur: [
      'Amber Fort',
      'Hawa Mahal',
      'City Palace',
      'Jantar Mantar',
      'Nahargarh Fort'
    ],
    Maldives: [
      'Beach Resort',
      'Snorkeling',
      'Island Hopping',
      'Sunset Cruise',
      'Water Villas'
    ],
    Paris: [
      'Eiffel Tower',
      'Louvre Museum',
      'Notre-Dame Cathedral',
      'Seine River Cruise',
      'Champs-Élysées'
    ],
    Dubai: [
      'Burj Khalifa',
      'Desert Safari',
      'Dubai Mall',
      'Palm Jumeirah',
      'Dubai Marina'
    ],
    Singapore: [
      'Marina Bay Sands',
      'Sentosa Island',
      'Universal Studios',
      'Gardens by the Bay',
      'Merlion Park'
    ],
    Switzerland: [
      'Zurich City Tour',
      'Mt. Titlis',
      'Lucerne',
      'Interlaken',
      'Jungfraujoch'
    ],
    Thailand: [
      'Bangkok City Tour',
      'Phi Phi Islands',
      'Pattaya Beach',
      'Floating Market',
      'Phuket Nightlife'
    ]
  }

  // 🔁 GENERATE DAY-WISE PLAN
  const generatePlan = (selectedPlace, selectedDays) => {
    if (!selectedPlace || !selectedDays) {
      setPlan([])
      return
    }

    const placesList = destinationPlaces[selectedPlace]
    const itinerary = []

    for (let i = 1; i <= selectedDays; i++) {
      if (i === selectedDays) {
        itinerary.push({
          day: i,
          description: 'Shopping, packing up memories, and departure.'
        })
      } else if (i === 1) {
        itinerary.push({
          day: i,
          description: 'Arrival, hotel check-in, and local sightseeing.'
        })
      } else {
        itinerary.push({
          day: i,
          description: `Visit ${
            placesList[(i - 2) % placesList.length]
          } and nearby attractions.`
        })
      }
    }

    setPlan(itinerary)
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
              {Object.keys(destinationPlaces).map((dest) => (
                <option key={dest} value={dest}>{dest}</option>
              ))}
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
