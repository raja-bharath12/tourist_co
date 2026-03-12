import { useState } from 'react'

function BookingForm() {
  const [data, setData] = useState({
    name: '',
    email: '',
    destination: ''
  })

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Booking confirmed for ${data.destination}`)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="destination" placeholder="Destination" onChange={handleChange} required />
      <button type="submit">Book Now</button>
    </form>
  )
}

export default BookingForm
