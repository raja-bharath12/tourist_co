import { useState } from 'react'

function Hotels() {
  const [destination, setDestination] = useState('')

  const hotelsData = {
    Goa: [
      { name: 'Cidade de Goa', location: 'Dona Paula', price: 7800, phone: '9000000001', email: 'cidade@goa.com' },
      { name: 'Hyatt Centric Goa', location: 'Calangute', price: 8000, phone: '9000000002', email: 'hyatt@goa.com' },
      { name: 'ITC Grand Goa', location: 'Utorda', price: 9500, phone: '9000000003', email: 'itc@goa.com' },
      { name: 'Leela Goa Resort', location: 'Mobor Beach', price: 9200, phone: '9000000004', email: 'leela@goa.com' },
      { name: 'Novotel Goa Candolim', location: 'Candolim', price: 7400, phone: '9000000005', email: 'novotel@goa.com' },
      { name: 'Park Hyatt Goa', location: 'Arossim', price: 9000, phone: '9000000006', email: 'park@goa.com' },
      { name: 'Radisson Blu Goa', location: 'Cavelossim', price: 7600, phone: '9000000007', email: 'radisson@goa.com' },
      { name: 'Resort Rio', location: 'Baga', price: 7200, phone: '9000000008', email: 'rio@goa.com' },
      { name: 'Taj Resort & Spa Goa', location: 'Baga', price: 8500, phone: '9000000009', email: 'taj@goa.com' },
      { name: 'W Goa Vagator', location: 'Vagator', price: 8800, phone: '9000000010', email: 'w@goa.com' }
    ],

    Manali: [
      { name: 'Apple Country Resort', location: 'Log Huts', price: 6900, phone: '9000000011', email: 'apple@manali.com' },
      { name: 'Himalayan Heights', location: 'Hadimba Road', price: 6500, phone: '9000000012', email: 'heights@manali.com' },
      { name: 'Johnson Lodge & Spa', location: 'Circuit House Road', price: 6800, phone: '9000000013', email: 'johnson@manali.com' },
      { name: 'Larisa Resort Manali', location: 'Naggar', price: 7200, phone: '9000000014', email: 'larisa@manali.com' },
      { name: 'ManuAllaya Resort', location: 'Rangri', price: 7400, phone: '9000000015', email: 'manu@manali.com' },
      { name: 'Rock Manali Hotel', location: 'Prini', price: 6000, phone: '9000000016', email: 'rock@manali.com' },
      { name: 'Snow Valley Resorts', location: 'Log Huts', price: 6200, phone: '9000000017', email: 'snow@manali.com' },
      { name: 'Span Resort & Spa', location: 'Aleo', price: 7800, phone: '9000000018', email: 'span@manali.com' },
      { name: 'The Himalayan Resort', location: 'Naggar Road', price: 8200, phone: '9000000019', email: 'himalayan@manali.com' },
      { name: 'The Orchard Greens', location: 'Left Bank', price: 6300, phone: '9000000020', email: 'orchard@manali.com' }
    ],

    Kerala: [
      { name: 'Abad Turtle Beach Resort', location: 'Marari', price: 7200, phone: '9000000021', email: 'abad@kerala.com' },
      { name: 'Brunton Boatyard', location: 'Fort Kochi', price: 8400, phone: '9000000022', email: 'brunton@kerala.com' },
      { name: 'Elixir Hills Resort', location: 'Munnar', price: 7000, phone: '9000000023', email: 'elixir@kerala.com' },
      { name: 'Kumarakom Lake Resort', location: 'Kumarakom', price: 9200, phone: '9000000024', email: 'kumarakom@kerala.com' },
      { name: 'Le Meridien Kochi', location: 'Kochi', price: 8600, phone: '9000000025', email: 'lemeridien@kerala.com' },
      { name: 'Niraamaya Retreats', location: 'Kovalam', price: 8900, phone: '9000000026', email: 'niraamaya@kerala.com' },
      { name: 'Spice Tree Resort', location: 'Munnar', price: 7600, phone: '9000000027', email: 'spicetree@kerala.com' },
      { name: 'Taj Malabar Resort', location: 'Kochi', price: 8800, phone: '9000000028', email: 'taj@kerala.com' },
      { name: 'Vythiri Resort', location: 'Wayanad', price: 8000, phone: '9000000029', email: 'vythiri@kerala.com' },
      { name: 'Windermere Estate', location: 'Munnar', price: 7800, phone: '9000000030', email: 'windermere@kerala.com' }
    ],

    Jaipur: [
      { name: 'Alsisar Haveli', location: 'Sansar Chandra Road', price: 7600, phone: '9000000031', email: 'alsisar@jaipur.com' },
      { name: 'Clarks Amer Hotel', location: 'Jawahar Circle', price: 7000, phone: '9000000032', email: 'clarks@jaipur.com' },
      { name: 'Hilton Jaipur', location: 'Bais Godam', price: 8500, phone: '9000000033', email: 'hilton@jaipur.com' },
      { name: 'ITC Rajputana', location: 'Palace Road', price: 8800, phone: '9000000034', email: 'itc@jaipur.com' },
      { name: 'Jai Mahal Palace', location: 'Civil Lines', price: 9500, phone: '9000000035', email: 'jai@jaipur.com' },
      { name: 'Rambagh Palace', location: 'Bhawani Singh Road', price: 12000, phone: '9000000036', email: 'rambagh@jaipur.com' },
      { name: 'Royal Orchid Jaipur', location: 'Tonk Road', price: 7200, phone: '9000000037', email: 'orchid@jaipur.com' },
      { name: 'Samode Haveli', location: 'Gangapole', price: 7800, phone: '9000000038', email: 'samode@jaipur.com' },
      { name: 'Trident Jaipur', location: 'Amber Road', price: 8200, phone: '9000000039', email: 'trident@jaipur.com' },
      { name: 'Zone by The Park', location: 'Bani Park', price: 7000, phone: '9000000040', email: 'zone@jaipur.com' }
    ],

    Maldives: [
      { name: 'Anantara Veli Maldives', location: 'South Malé Atoll', price: 21000, phone: '9000000041', email: 'anantara@maldives.com' },
      { name: 'Baros Maldives', location: 'North Malé Atoll', price: 22000, phone: '9000000042', email: 'baros@maldives.com' },
      { name: 'Conrad Maldives Rangali', location: 'Rangali Island', price: 26000, phone: '9000000043', email: 'conrad@maldives.com' },
      { name: 'Kuramathi Island Resort', location: 'Rasdhoo Atoll', price: 20000, phone: '9000000044', email: 'kuramathi@maldives.com' },
      { name: 'Meeru Island Resort', location: 'North Malé', price: 18500, phone: '9000000045', email: 'meeru@maldives.com' },
      { name: 'OBLU Select Lobigili', location: 'Malé Atoll', price: 17000, phone: '9000000046', email: 'oblu@maldives.com' },
      { name: 'Soneva Fushi', location: 'Baa Atoll', price: 25000, phone: '9000000047', email: 'soneva@maldives.com' },
      { name: 'Sun Siyam Iru Fushi', location: 'Noonu Atoll', price: 23000, phone: '9000000048', email: 'sunsiyam@maldives.com' },
      { name: 'Velassaru Maldives', location: 'Malé Atoll', price: 19000, phone: '9000000049', email: 'velassaru@maldives.com' },
      { name: 'Veligandu Island Resort', location: 'Ari Atoll', price: 19500, phone: '9000000050', email: 'veligandu@maldives.com' }
    ],

    Paris: [
      { name: 'Four Seasons George V', location: 'Champs-Élysées', price: 26000, phone: '9000000051', email: 'fs@paris.com' },
      { name: 'Hotel Balzac', location: 'Champs-Élysées', price: 17500, phone: '9000000052', email: 'balzac@paris.com' },
      { name: 'Hotel Lutetia', location: 'Saint-Germain', price: 21000, phone: '9000000053', email: 'lutetia@paris.com' },
      { name: 'Hotel Regina Louvre', location: 'Louvre', price: 18000, phone: '9000000054', email: 'regina@paris.com' },
      { name: 'InterContinental Le Grand', location: 'Opéra', price: 20000, phone: '9000000055', email: 'inter@paris.com' },
      { name: 'Le Meurice', location: 'Rue de Rivoli', price: 22000, phone: '9000000056', email: 'meurice@paris.com' },
      { name: 'Pullman Paris Eiffel', location: 'Eiffel Tower', price: 19000, phone: '9000000057', email: 'pullman@paris.com' },
      { name: 'Ritz Paris', location: 'Place Vendôme', price: 24000, phone: '9000000058', email: 'ritz@paris.com' },
      { name: 'Shangri-La Paris', location: 'Trocadéro', price: 25000, phone: '9000000059', email: 'shangri@paris.com' },
      { name: 'Sofitel Le Faubourg', location: 'Faubourg', price: 18500, phone: '9000000060', email: 'sofitel@paris.com' }
    ],

    Dubai: [
      { name: 'Address Downtown', location: 'Burj Khalifa', price: 21000, phone: '9000000061', email: 'address@dubai.com' },
      { name: 'Armani Hotel Dubai', location: 'Burj Khalifa', price: 26000, phone: '9000000062', email: 'armani@dubai.com' },
      { name: 'Atlantis The Palm', location: 'Palm Jumeirah', price: 24000, phone: '9000000063', email: 'atlantis@dubai.com' },
      { name: 'Burj Al Arab', location: 'Jumeirah', price: 28000, phone: '9000000064', email: 'burj@dubai.com' },
      { name: 'JW Marriott Marquis', location: 'Business Bay', price: 19000, phone: '9000000065', email: 'jw@dubai.com' },
      { name: 'Palazzo Versace', location: 'Al Jaddaf', price: 20000, phone: '9000000066', email: 'versace@dubai.com' },
      { name: 'Rixos The Palm', location: 'Palm Jumeirah', price: 23000, phone: '9000000067', email: 'rixos@dubai.com' },
      { name: 'Sofitel Downtown', location: 'Downtown', price: 18000, phone: '9000000068', email: 'sofitel@dubai.com' },
      { name: 'The Oberoi Dubai', location: 'Business Bay', price: 19500, phone: '9000000069', email: 'oberoi@dubai.com' },
      { name: 'Waldorf Astoria Dubai', location: 'Palm Jumeirah', price: 22500, phone: '9000000070', email: 'waldorf@dubai.com' }
    ],

    Singapore: [
      { name: 'Capella Singapore', location: 'Sentosa Island', price: 24000, phone: '9000000071', email: 'capella@singapore.com' },
      { name: 'Carlton Hotel Singapore', location: 'Bras Basah', price: 17000, phone: '9000000072', email: 'carlton@singapore.com' },
      { name: 'Fullerton Hotel', location: 'Singapore River', price: 22000, phone: '9000000073', email: 'fullerton@singapore.com' },
      { name: 'Mandarin Oriental', location: 'Marina Bay', price: 21000, phone: '9000000074', email: 'mandarin@singapore.com' },
      { name: 'Marina Bay Sands', location: 'Marina Bay', price: 23000, phone: '9000000075', email: 'mbs@singapore.com' },
      { name: 'Pan Pacific Singapore', location: 'Marina Square', price: 18000, phone: '9000000076', email: 'panpac@singapore.com' },
      { name: 'Raffles Hotel', location: 'City Centre', price: 26000, phone: '9000000077', email: 'raffles@singapore.com' },
      { name: 'Shangri-La Singapore', location: 'Orchard Road', price: 20000, phone: '9000000078', email: 'shangri@singapore.com' },
      { name: 'Swissôtel The Stamford', location: 'City Hall', price: 19000, phone: '9000000079', email: 'swiss@singapore.com' },
      { name: 'V Hotel Lavender', location: 'Lavender', price: 14000, phone: '9000000080', email: 'vhotel@singapore.com' }
    ],

    Switzerland: [
      { name: 'Badrutt’s Palace', location: 'St. Moritz', price: 24000, phone: '9000000081', email: 'badrutts@swiss.com' },
      { name: 'Hotel Bellevue Palace', location: 'Bern', price: 20000, phone: '9000000082', email: 'bellevue@swiss.com' },
      { name: 'Hotel Edelweiss', location: 'Wengen', price: 19000, phone: '9000000083', email: 'edelweiss@swiss.com' },
      { name: 'Hotel Metropole', location: 'Zermatt', price: 20000, phone: '9000000084', email: 'metropole@swiss.com' },
      { name: 'Hotel Montana', location: 'Lucerne', price: 17500, phone: '9000000085', email: 'montana@swiss.com' },
      { name: 'Hotel Schweizerhof', location: 'Lucerne', price: 21000, phone: '9000000086', email: 'schweizerhof@swiss.com' },
      { name: 'Kulm Hotel', location: 'St. Moritz', price: 25000, phone: '9000000087', email: 'kulm@swiss.com' },
      { name: 'Sunstar Hotel', location: 'Grindelwald', price: 18000, phone: '9000000088', email: 'sunstar@swiss.com' },
      { name: 'The Dolder Grand', location: 'Zurich', price: 23000, phone: '9000000089', email: 'dolder@swiss.com' },
      { name: 'Victoria Jungfrau', location: 'Interlaken', price: 22000, phone: '9000000090', email: 'victoria@swiss.com' }
    ],

    Thailand: [
      { name: 'Amari Phuket', location: 'Patong', price: 17000, phone: '9000000091', email: 'amari@thai.com' },
      { name: 'Anantara Riverside', location: 'Bangkok', price: 19000, phone: '9000000092', email: 'anantara@thai.com' },
      { name: 'Banyan Tree Bangkok', location: 'Bangkok', price: 20000, phone: '9000000093', email: 'banyan@thai.com' },
      { name: 'Centara Grand Pattaya', location: 'Pattaya', price: 16000, phone: '9000000094', email: 'centara@thai.com' },
      { name: 'Dusit Thani', location: 'Bangkok', price: 18000, phone: '9000000095', email: 'dusit@thai.com' },
      { name: 'Hilton Pattaya', location: 'Pattaya', price: 16500, phone: '9000000096', email: 'hilton@thai.com' },
      { name: 'Mandarin Oriental Bangkok', location: 'Bangkok', price: 22000, phone: '9000000097', email: 'mandarin@thai.com' },
      { name: 'Novotel Phuket', location: 'Phuket', price: 15000, phone: '9000000098', email: 'novotel@thai.com' },
      { name: 'Pullman Phuket Arcadia', location: 'Naithon', price: 17500, phone: '9000000099', email: 'pullman@thai.com' },
      { name: 'Royal Orchid Sheraton', location: 'Bangkok', price: 18500, phone: '9000000100', email: 'orchid@thai.com' }
    ]
  }

  return (
    <div className="page">
      <h1>Premium Hotels</h1>
      <p>Select destination to explore luxury hotels</p>

      <div className="hotel-select">
        <select
          className="hotel-dropdown"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        >
          <option value="">Select Destination</option>
          {Object.keys(hotelsData).map((place) => (
            <option key={place} value={place}>{place}</option>
          ))}
        </select>
      </div>

      {destination && (
        <div className="hotel-grid">
          {[...hotelsData[destination]]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((hotel, index) => (
              <div key={index} className="hotel-card premium">
                <h3>{hotel.name}</h3>
                <p>📍 {hotel.location}</p>
                <p className="price">₹{hotel.price} / DAY</p>
                <p>📞 <a href={`tel:${hotel.phone}`}>{hotel.phone}</a></p>
                <p>✉ <a href={`mailto:${hotel.email}`}>{hotel.email}</a></p>
              </div>
            ))}
        </div>
      )}
    </div>
  )
}

export default Hotels
