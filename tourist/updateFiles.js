const fs = require('fs');

const appendToObject = (filePath, contentToAppend) => {
  let code = fs.readFileSync(filePath, 'utf8');
  code = code.replace(/};\s*$/, `,\n${contentToAppend}\n};\n`);
  fs.writeFileSync(filePath, code);
};

// 1. nearbyPlaces.js
const newNearby = `
  Japan: ["Tokyo", "Kyoto", "Mount Fuji", "Osaka Castle"],
  Netherlands: ["Keukenhof Gardens", "Amsterdam", "Zaanse Schans", "Rotterdam"],
  "South Korea": ["Seoul", "Gyeongbokgung Palace", "Jeju Island", "Busan"],
  Maldives: ["Malé", "Maafushi", "Ari Atoll", "Baa Atoll"],
  Greece: ["Santorini", "Mykonos", "Athens", "Acropolis of Athens"],
  France: ["Paris", "Nice", "Lyon"],
  Italy: ["Rome", "Venice", "Amalfi Coast", "Florence"],
  Canada: ["Toronto", "Niagara Falls", "Banff National Park", "Quebec City", "Whistler"],
  Germany: ["Munich", "Berlin", "Neuschwanstein Castle", "Black Forest"],
  "United States": ["Vermont", "New York City", "Boston", "Great Smoky Mountains National Park"],
  China: ["Beijing", "Great Wall of China", "Hangzhou", "Zhangjiajie National Forest Park"],
  Finland: ["Rovaniemi", "Lapland", "Helsinki", "Kemi SnowCastle"],
  Austria: ["Vienna", "Salzburg", "Innsbruck", "Hallstatt"],
  Switzerland: ["Zurich", "Lucerne", "Interlaken", "Zermatt"]
`;
appendToObject('src/data/nearbyPlaces.js', newNearby);

// 2. worldDestinations.js
const newDestinations = `
  Japan: ["Ueno Park cherry blossoms", "Philosopher’s Path Sakura", "Mount Fuji", "Osaka Castle"],
  Netherlands: ["Keukenhof Gardens", "Amsterdam canals", "Zaanse Schans windmills", "Rotterdam architecture"],
  "South Korea": ["Seoul cherry blossom", "Gyeongbokgung Palace", "Jeju Island beaches", "Busan temples"],
  Maldives: ["Malé markets", "Maafushi resorts", "Ari Atoll diving", "Baa Atoll marine"],
  Greece: ["Santorini sunsets", "Mykonos beach clubs", "Athens ruins", "Acropolis"],
  France: ["Paris attractions", "Eiffel Tower", "Nice beaches", "Lyon food"],
  Italy: ["Rome history", "Venice canals", "Amalfi Coast", "Florence art"],
  Canada: ["Toronto parks", "Niagara Falls", "Banff mountains", "Quebec City old town"],
  Germany: ["Munich Oktoberfest", "Berlin landmarks", "Neuschwanstein Castle", "Black Forest"],
  "United States": ["Vermont fall foliage", "NYC Central Park", "Boston architecture", "Smoky Mountains"],
  China: ["Beijing landmarks", "Great Wall", "Hangzhou West Lake", "Zhangjiajie mountains"],
  Finland: ["Rovaniemi Santa Village", "Lapland Northern Lights", "Helsinki museums", "Kemi SnowCastle"],
  Austria: ["Vienna Christmas markets", "Salzburg Alpine scenery", "Innsbruck ski resorts", "Hallstatt village"],
  Switzerland: ["Zurich old town", "Lucerne Chapel Bridge", "Interlaken sports", "Zermatt Matterhorn"]
`;
appendToObject('src/data/worldDestinations.js', newDestinations);

// 3. worldHotels.js
const newHotels = `
  Japan: [
    { name: "Park Hotel Tokyo", location: "Tokyo", price: 15000, phone: "9000000101", email: "park@japan.com" },
    { name: "Hotel Granvia Kyoto", location: "Kyoto", price: 14000, phone: "9000000102", email: "granvia@japan.com" },
    { name: "The Ritz-Carlton Osaka", location: "Osaka", price: 20000, phone: "9000000103", email: "ritz@japan.com" }
  ],
  Netherlands: [
    { name: "Pulitzer Amsterdam", location: "Amsterdam", price: 16000, phone: "9000000104", email: "pulitzer@nl.com" },
    { name: "Hotel Okura Amsterdam", location: "Amsterdam", price: 17000, phone: "9000000105", email: "okura@nl.com" },
    { name: "Rotterdam Marriott", location: "Rotterdam", price: 15000, phone: "9000000106", email: "marriott@nl.com" }
  ],
  "South Korea": [
    { name: "Lotte Hotel Seoul", location: "Seoul", price: 14000, phone: "9000000107", email: "lotte@sk.com" },
    { name: "Paradise Hotel Busan", location: "Busan", price: 13000, phone: "9000000108", email: "paradise@sk.com" },
    { name: "Jeju Shinhwa World", location: "Jeju", price: 15000, phone: "9000000109", email: "shinhwa@sk.com" }
  ],
  Switzerland: [
    { name: "Badrutt's Palace", location: "St. Moritz", price: 25000, phone: "9000000110", email: "badrutts@ch.com" },
    { name: "Mont Cervin Palace", location: "Zermatt", price: 24000, phone: "9000000111", email: "cervin@ch.com" },
    { name: "Victoria Jungfrau", location: "Interlaken", price: 23000, phone: "9000000112", email: "victoria@ch.com" }
  ],
  Maldives: [
    { name: "Soneva Fushi", location: "Baa Atoll", price: 35000, phone: "9000000113", email: "soneva@maldives.com" },
    { name: "Conrad Maldives", location: "Rangali Island", price: 30000, phone: "9000000114", email: "conrad@maldives.com" },
    { name: "Sun Siyam Olhuveli", location: "South Male Atoll", price: 25000, phone: "9000000115", email: "sun@maldives.com" }
  ],
  Greece: [
    { name: "Canaves Oia Suites", location: "Santorini", price: 28000, phone: "9000000116", email: "canaves@greece.com" },
    { name: "Myconian Korali", location: "Mykonos", price: 26000, phone: "9000000117", email: "myconian@greece.com" },
    { name: "Grande Bretagne", location: "Athens", price: 22000, phone: "9000000118", email: "grande@greece.com" }
  ],
  France: [
    { name: "Le Meurice", location: "Paris", price: 24000, phone: "9000000119", email: "meurice@france.com" },
    { name: "Hotel Negresco", location: "Nice", price: 18000, phone: "9000000120", email: "negresco@france.com" },
    { name: "Villa Florentine", location: "Lyon", price: 16000, phone: "9000000121", email: "villa@france.com" }
  ],
  Italy: [
    { name: "Hotel Eden", location: "Rome", price: 20000, phone: "9000000122", email: "eden@italy.com" },
    { name: "Belmond Cipriani", location: "Venice", price: 25000, phone: "9000000123", email: "belmond@italy.com" },
    { name: "Le Sirenuse", location: "Amalfi", price: 28000, phone: "9000000124", email: "sirenuse@italy.com" }
  ],
  Canada: [
    { name: "Fairmont Royal York", location: "Toronto", price: 18000, phone: "9000000125", email: "royal@canada.com" },
    { name: "Fairmont Banff Springs", location: "Banff", price: 22000, phone: "9000000126", email: "banff@canada.com" },
    { name: "Château Frontenac", location: "Quebec", price: 20000, phone: "9000000127", email: "chateau@canada.com" }
  ],
  Germany: [
    { name: "Bayerischer Hof", location: "Munich", price: 17000, phone: "9000000128", email: "bayerischer@de.com" },
    { name: "Adlon Kempinski", location: "Berlin", price: 18000, phone: "9000000129", email: "adlon@de.com" },
    { name: "Traube Tonbach", location: "Black Forest", price: 16000, phone: "9000000130", email: "traube@de.com" }
  ],
  "United States": [
    { name: "The Plaza Hotel", location: "NYC", price: 25000, phone: "9000000131", email: "plaza@usa.com" },
    { name: "The Liberty Hotel", location: "Boston", price: 19000, phone: "9000000132", email: "liberty@usa.com" },
    { name: "Woodstock Inn", location: "Vermont", price: 17000, phone: "9000000133", email: "woodstock@usa.com" }
  ],
  China: [
    { name: "Waldorf Astoria", location: "Beijing", price: 18000, phone: "9000000134", email: "waldorf@china.com" },
    { name: "Four Seasons", location: "Hangzhou", price: 16000, phone: "9000000135", email: "fs@china.com" },
    { name: "Pullman Hotel", location: "Zhangjiajie", price: 14000, phone: "9000000136", email: "pullman@china.com" }
  ],
  Finland: [
    { name: "Arctic TreeHouse", location: "Rovaniemi", price: 22000, phone: "9000000137", email: "arctic@fin.com" },
    { name: "Hotel Kämp", location: "Helsinki", price: 18000, phone: "9000000138", email: "kamp@fin.com" },
    { name: "SnowHotel of Kemi", location: "Kemi", price: 25000, phone: "9000000139", email: "snow@fin.com" }
  ],
  Austria: [
    { name: "Hotel Sacher", location: "Vienna", price: 20000, phone: "9000000140", email: "sacher@at.com" },
    { name: "Goldener Hirsch", location: "Salzburg", price: 19000, phone: "9000000141", email: "hirsch@at.com" },
    { name: "Grand Hotel Europa", location: "Innsbruck", price: 17000, phone: "9000000142", email: "europa@at.com" }
  ]
`;
appendToObject('src/data/worldHotels.js', newHotels);

// 4. tripPlans.js
const newPlans = `
  Japan: [
    { title: "3 Days Package", days: "3 Days", plan: ["Day 1 – Tokyo city tour & Sakura Park", "Day 2 – Mount Fuji trip", "Day 3 – Tokyo shopping & departure"] },
    { title: "8 Days Package", days: "8 Days", plan: ["Tokyo (3 days)", "Kyoto temples & cherry blossom (3 days)", "Osaka food street (2 days)"] },
    { title: "12 Days Package", days: "12 Days", plan: ["Tokyo (4 days)", "Kyoto cultural tour (3 days)", "Osaka & Nara (3 days)", "Mount Fuji & Hakone (2 days)"] }
  ],
  Netherlands: [
    { title: "3 Days Package", days: "3 Days", plan: ["Day 1 - Amsterdam city tour", "Day 2 - Keukenhof Tulip Gardens", "Day 3 - Canal cruise"] },
    { title: "8 Days Package", days: "8 Days", plan: ["Amsterdam (3 days)", "Keukenhof tulip gardens (2 days)", "Zaanse Schans windmills (1 day)", "Rotterdam tour (2 days)"] },
    { title: "12 Days Package", days: "12 Days", plan: ["Amsterdam museums (4 days)", "Keukenhof (3 days)", "Rotterdam (3 days)", "Utrecht (2 days)"] }
  ],
  "South Korea": [
    { title: "3 Days Package", days: "3 Days", plan: ["Day 1 - Seoul cherry blossom tour", "Day 2 - Gyeongbokgung Palace", "Day 3 - Shopping at Myeongdong"] },
    { title: "8 Days Package", days: "8 Days", plan: ["Seoul (3 days)", "Busan beaches (2 days)", "Jeju Island nature (3 days)"] },
    { title: "12 Days Package", days: "12 Days", plan: ["Seoul cultural tour (4 days)", "Busan temples (3 days)", "Jeju Island (3 days)", "DMZ tour (2 days)"] }
  ],
  Switzerland: [
    { title: "3 Days Package", days: "3 Days", plan: ["Day 1 - Zurich tour", "Day 2 - Lucerne lake cruise", "Day 3 - Mount Titlis"] },
    { title: "8 Days Package", days: "8 Days", plan: ["Zurich (2 days)", "Lucerne (2 days)", "Interlaken (2 days)", "Jungfraujoch (2 days)"] },
    { title: "12 Days Package", days: "12 Days", plan: ["Zurich (3 days)", "Lucerne & Mount Titlis (3 days)", "Interlaken (3 days)", "Zermatt Matterhorn (3 days)"] }
  ],
  Maldives: [
    { title: "3 Days Package", days: "3 Days", plan: ["Day 1 - Malé city tour", "Day 2 - Beach relaxation", "Day 3 - Snorkeling activity"] },
    { title: "8 Days Package", days: "8 Days", plan: ["Malé (2 days)", "Maafushi stay (3 days)", "Ari Atoll diving (3 days)"] },
    { title: "12 Days Package", days: "12 Days", plan: ["Malé exploration (2 days)", "Maafushi activities (3 days)", "Ari Atoll scuba (4 days)", "Baa Atoll safari (3 days)"] }
  ],
  Greece: [
    { title: "3 Days Package", days: "3 Days", plan: ["Day 1 - Athens city tour", "Day 2 - Acropolis visit", "Day 3 - Greek cultural dinner"] },
    { title: "8 Days Package", days: "8 Days", plan: ["Athens (3 days)", "Santorini island (3 days)", "Mykonos nightlife (2 days)"] },
    { title: "12 Days Package", days: "12 Days", plan: ["Athens (3 days)", "Santorini cruise (4 days)", "Mykonos (3 days)", "Crete exploration (2 days)"] }
  ],
  France: [
    { title: "3 Days Package", days: "3 Days", plan: ["Day 1 - Paris city tour", "Day 2 - Eiffel Tower visit", "Day 3 - Seine River cruise"] },
    { title: "8 Days Package", days: "8 Days", plan: ["Paris (4 days)", "Nice beach tour (2 days)", "Lyon food tour (2 days)"] },
    { title: "12 Days Package", days: "12 Days", plan: ["Paris museums (4 days)", "French Riviera beaches (4 days)", "Lyon historic city (2 days)", "Provence countryside (2 days)"] }
  ],
  Italy: [
    { title: "3 Days Package", days: "3 Days", plan: ["Day 1 - Rome historical tour", "Day 2 - Colosseum visit", "Day 3 - Italian cuisine experience"] },
    { title: "8 Days Package", days: "8 Days", plan: ["Rome (3 days)", "Florence art tour (2 days)", "Venice canals (3 days)"] },
    { title: "12 Days Package", days: "12 Days", plan: ["Rome (3 days)", "Florence museums (3 days)", "Venice gondola tour (3 days)", "Amalfi Coast beach trip (3 days)"] }
  ],
  Canada: [
    { title: "3 Days Package", days: "3 Days", plan: ["Toronto city tour", "Niagara Falls visit", "Autumn/Winter park sightseeing"] },
    { title: "8 Days Package", days: "8 Days", plan: ["Toronto (3 days)", "Niagara Falls (2 days)", "Banff National Park (3 days)"] },
    { title: "12 Days Package", days: "12 Days", plan: ["Toronto attractions (3 days)", "Niagara Falls (2 days)", "Banff mountain adventure (4 days)", "Quebec City historic visit (3 days)"] }
  ],
  Germany: [
    { title: "3 Days Package", days: "3 Days", plan: ["Munich Oktoberfest/Festival experience", "Bavarian city tour", "Traditional German dinner"] },
    { title: "8 Days Package", days: "8 Days", plan: ["Munich festival (3 days)", "Neuschwanstein Castle tour (2 days)", "Berlin historic city (3 days)"] },
    { title: "12 Days Package", days: "12 Days", plan: ["Munich celebration (4 days)", "Berlin landmarks (3 days)", "Black Forest scenic trip (3 days)", "Neuschwanstein Castle visit (2 days)"] }
  ],
  "United States": [
    { title: "3 Days Package", days: "3 Days", plan: ["New York City tour", "Central Park walk", "Statue of Liberty visit"] },
    { title: "8 Days Package", days: "8 Days", plan: ["New York City (3 days)", "Vermont fall foliage trip (3 days)", "Boston historic tour (2 days)"] },
    { title: "12 Days Package", days: "12 Days", plan: ["New York City attractions (4 days)", "Vermont countryside tour (3 days)", "Boston historic sites (2 days)", "Smoky Mountains nature trip (3 days)"] }
  ],
  China: [
    { title: "3 Days Package", days: "3 Days", plan: ["Beijing city tour", "Great Wall visit", "Forbidden City exploration"] },
    { title: "8 Days Package", days: "8 Days", plan: ["Beijing historic tour (3 days)", "Great Wall hiking (2 days)", "Hangzhou West Lake tour (3 days)"] },
    { title: "12 Days Package", days: "12 Days", plan: ["Beijing cultural attractions (4 days)", "Great Wall sightseeing (2 days)", "Hangzhou scenic tour (3 days)", "Zhangjiajie mountain trip (3 days)"] }
  ],
  Finland: [
    { title: "3 Days Package", days: "3 Days", plan: ["Helsinki city tour", "Northern Lights viewing", "Finnish winter sauna experience"] },
    { title: "8 Days Package", days: "8 Days", plan: ["Helsinki (2 days)", "Rovaniemi Santa Village (3 days)", "Lapland Northern Lights tour (3 days)"] },
    { title: "12 Days Package", days: "12 Days", plan: ["Helsinki cultural tour (3 days)", "Lapland winter adventure (4 days)", "Rovaniemi Santa Village (3 days)", "Kemi SnowCastle visit (2 days)"] }
  ],
  Austria: [
    { title: "3 Days Package", days: "3 Days", plan: ["Vienna markets & palace", "City tour", "Shopping experience"] },
    { title: "8 Days Package", days: "8 Days", plan: ["Vienna (3 days)", "Salzburg historic city (2 days)", "Innsbruck skiing (3 days)"] },
    { title: "12 Days Package", days: "12 Days", plan: ["Vienna cultural tour (3 days)", "Salzburg music heritage (3 days)", "Innsbruck ski resorts (3 days)", "Hallstatt winter village (3 days)"] }
  ]
`;
appendToObject('src/data/tripPlans.js', newPlans);

console.log('Successfully updated databases.');
