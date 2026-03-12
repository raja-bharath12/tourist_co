import { useState } from 'react'

function Pricing() {
  const [amount, setAmount] = useState('')
  const [plan, setPlan] = useState(null)
  const [error, setError] = useState('')

  const pricingRules = [
    {
      min: 0,
      max: 20000,
      title: 'Budget Trip',
      days: '2–3 Days',
      hotel: 'Budget Hotel',
      transport: 'Bus / Train',
      places: ['Goa', 'Jaipur']
    },
    {
      min: 20001,
      max: 30000,
      title: 'Standard Trip',
      days: '4–5 Days',
      hotel: '3-Star Hotel',
      transport: 'AC Bus / Flight',
      places: ['Manali', 'Kerala']
    },
    {
      min: 30001,
      max: 1000000,
      title: 'Premium Trip',
      days: '6–7 Days',
      hotel: '4–5 Star Hotel',
      transport: 'Flight + Airport Pickup',
      places: ['Dubai', 'Paris']
    }
  ]

  const handleCheck = () => {
    const value = Number(amount)

    // validation
    if (!value || value <= 0) {
      setPlan(null)
      setError('Please enter a valid amount')
      return
    }

    const matchedPlan = pricingRules.find(
      (rule) => value >= rule.min && value <= rule.max
    )

    if (matchedPlan) {
      setPlan(matchedPlan)
      setError('')
    } else {
      setPlan(null)
      setError('No plan available for this amount')
    }
  }

  return (
    <div className="page">
      <h1>Choose Your Trip Budget</h1>
      <p>Enter your base amount for the trip</p>

      {/* INPUT + BUTTON */}
      <div className="search-box">
        <input
          type="number"
          placeholder="Enter amount (₹)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleCheck}>Check Plan</button>
      </div>

      {/* ERROR MESSAGE */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* PLAN DETAILS */}
      {plan && (
        <div className="pricing-plan">
          <h2>{plan.title}</h2>

          <p><strong>Trip Duration:</strong> {plan.days}</p>
          <p><strong>Hotel Type:</strong> {plan.hotel}</p>
          <p><strong>Transport:</strong> {plan.transport}</p>

          <h4>Popular Destinations</h4>
          <ul>
            {plan.places.map((place, index) => (
              <li key={index}>✔ {place}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Pricing
