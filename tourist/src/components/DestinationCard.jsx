function DestinationCard({ name, price, image }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
        <div className="card-title">{name}</div>
      </div>

      <div className="card-body">
        <p>Starting from ₹{price}</p>

        {/* NEW TAB WITH PLACE INFO */}
        <a
          href={`/trip-details?place=${name}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Book Now</button>
        </a>
      </div>
    </div>
  )
}

export default DestinationCard
