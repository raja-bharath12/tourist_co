import { useState } from 'react'
import DestinationCard from '../components/DestinationCard.jsx'

function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  // Dummy destination data (later from Spring Boot)
  const destinations = [
    { name: 'Goa', price: 15000, image: 'https://source.unsplash.com/300x200/?beach' },
    { name: 'Manali', price: 18000, image: 'https://source.unsplash.com/300x200/?mountains' },
    { name: 'Paris', price: 45000, image: 'https://source.unsplash.com/300x200/?paris' },
    { name: 'Dubai', price: 40000, image: 'https://source.unsplash.com/300x200/?dubai' }
  ]

  const handleSearch = () => {
    const filtered = destinations.filter(d =>
      d.name.toLowerCase().includes(query.toLowerCase())
    )
    setResults(filtered)
  }

  return (
    <div className="page">
      <h1>Search Destinations</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter destination name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="card-container">
        {results.map((d, i) => (
          <DestinationCard
            key={i}
            name={d.name}
            price={d.price}
            image={d.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Search
