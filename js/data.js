// ============================================
// DHAKA AUTOS — Premium Car Showroom in Bangladesh
// Data & State Management
// ============================================

window.DriveX = window.DriveX || {};
window.Garirbazar = window.DriveX; // Alias for seamless compatibility

// ---------- Global Application State ----------
Garirbazar.state = {
  brandTitle: 'DHAKA AUTOS',
  brandTagline: 'Elite Automotive Marketplace in Bangladesh',
  currency: 'BDT', // 'BDT' or 'USD'
  usdRate: 120, // 1 USD = 120 BDT
  language: 'en', // 'en' or 'bn'
  activeCategory: 'cars', // 'cars', 'bikes', 'trucks'
  currentPage: 'home',
  favorites: new Set([1, 2]),
  compareList: [1, 2],
  searchQuery: '',
  filters: {
    category: 'cars',
    brand: '',
    model: '',
    condition: '', // 'Reconditioned', 'Used', 'New'
    city: '', // 'Dhaka', 'Chittagong', 'Sylhet', etc.
    priceMin: '',
    priceMax: '',
    fuelType: '', // 'Octane', 'Hybrid', 'CNG', 'LPG', 'Petrol', 'Electric'
    transmission: ''
  },
  user: {
    name: 'DHAKA AUTOS',
    email: 'info@dhakautos.com',
    phone: '+880 1647-712206',
    isLoggedIn: true
  },
  showroomLocation: 'Uttara, Dhaka', // Single permanent showroom shown on every vehicle card
  showroomHotline: '01647-712206'
};

// ---------- Bangladesh Car Photos (High Quality Automotive) ----------
const banglaCarImages = {
  premio: [
    'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80',
    'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80',
    'https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=800&q=80'
  ],
  allion: [
    'https://images.unsplash.com/photo-1621993202323-f438eec934ff?w=800&q=80',
    'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80'
  ],
  corolla: [
    'https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=800&q=80',
    'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80'
  ],
  prado: [
    'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
    'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80'
  ],
  vezel: [
    'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80',
    'https://images.unsplash.com/photo-1606611013016-969c19ba27d0?w=800&q=80'
  ],
  noah: [
    'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80',
    'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80'
  ],
  byd: [
    'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80',
    'https://images.unsplash.com/photo-1561580125-028ee3bd62eb?w=800&q=80'
  ],
  harrier: [
    'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&q=80',
    'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80'
  ],
  bike: [
    'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80',
    'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80'
  ],
  truck: [
    'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80',
    'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80'
  ]
};

// Extended media pools for the expanded Bikes & Trucks collections
const bikeImagePool = [
  'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80',
  'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80',
  'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&q=80',
  'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=800&q=80'
];
const truckImagePool = [
  'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80',
  'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80',
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
  'https://images.unsplash.com/photo-1575829874770-3cd246462d38?w=800&q=80'
];
const bikeImagesFor = (i) => [bikeImagePool[i % 4], bikeImagePool[(i + 1) % 4]];
const truckImagesFor = (i) => [truckImagePool[i % 4], truckImagePool[(i + 1) % 4]];

// ---------- Bangladesh Inventory (Cars, Bikes, Trucks) ----------
Garirbazar.cars = [
  {
    id: 1,
    category: 'cars',
    brand: 'Toyota',
    model: 'Premio F EX Package',
    year: 2021,
    price: 3650000, // 36.5 Lakh BDT
    originalPrice: 3800000,
    mileage: 28000,
    engine: '1500 cc VVT-i',
    horsepower: 109,
    transmission: 'Automatic (CVT)',
    fuelType: 'Octane',
    condition: 'Reconditioned',
    color: 'Pearl White',
    location: 'Uttara, Dhaka',
    sellerType: 'DHAKA AUTOS Certified',
    sellerName: 'DHAKA AUTOS',
    sellerPhone: '+880 1647-712206',
    sellerRating: 4.9,
    brtaRegistration: 'Dhaka Metro GA-42',
    taxTokenValidity: 'Dec 2025',
    fitnessValidity: 'Jan 2026',
    images: banglaCarImages.premio,
    badge: 'hot',
    features: ['Push Start', 'Beige Interior', 'Optical Meter', 'LED Projection Headlamp', 'Steering Controls', 'Reverse Camera', 'ABS & Airbags'],
    description: 'Fresh import reconditioned Toyota Premio 2021 model F EX Package. Grade 4.5 Auction Sheet verified. Pearl white color with wooden trimmed beige interior. 100% genuine mileage.'
  },
  {
    id: 2,
    category: 'cars',
    brand: 'Toyota',
    model: 'Allion A15 G Plus',
    year: 2020,
    price: 3250000, // 32.5 Lakh BDT
    originalPrice: 3400000,
    mileage: 42000,
    engine: '1500 cc',
    horsepower: 109,
    transmission: 'Automatic',
    fuelType: 'Octane / Hybrid',
    condition: 'Reconditioned',
    color: 'Silver Metallic',
    location: 'Uttara, Dhaka',
    sellerType: 'DHAKA AUTOS Certified',
    sellerName: 'DHAKA AUTOS',
    sellerPhone: '+880 1647-712206',
    sellerRating: 4.8,
    brtaRegistration: 'Dhaka Metro GA-39',
    taxTokenValidity: 'Nov 2025',
    fitnessValidity: 'Nov 2025',
    images: banglaCarImages.allion,
    badge: 'new',
    features: ['Push Start', 'Black Interior', 'Power Seats', 'Traction Control', 'Multimedia Screen', 'Original Alloy Rims'],
    description: 'Toyota Allion A15 G-Plus 2020 model. Highly sought-after executive sedan in immaculate condition. Smooth transmission and chilled AC.'
  },
  {
    id: 3,
    category: 'cars',
    brand: 'Toyota',
    model: 'Corolla Cross Hybrid Z',
    year: 2022,
    price: 4850000, // 48.5 Lakh BDT
    originalPrice: 5100000,
    mileage: 18500,
    engine: '1800 cc Hybrid',
    horsepower: 121,
    transmission: 'e-CVT Automatic',
    fuelType: 'Hybrid',
    condition: 'Reconditioned',
    color: 'Attitude Black Mica',
    location: 'Uttara, Dhaka',
    sellerType: 'DHAKA AUTOS Certified',
    sellerName: 'DHAKA AUTOS',
    sellerPhone: '+880 1647-712206',
    sellerRating: 5.0,
    brtaRegistration: 'Dhaka Metro GHA-18',
    taxTokenValidity: 'Aug 2026',
    fitnessValidity: 'Aug 2026',
    images: banglaCarImages.corolla,
    badge: 'hot',
    features: ['Toyota Safety Sense', 'Sunroof', 'Leather Upholstery', '360 Birdview Camera', 'Wireless Charger', 'Electric Tailgate'],
    description: 'Top of the line Toyota Corolla Cross Z Hybrid. Exceptional fuel economy of 22 km/L in city conditions. Single hand driven by university professor.'
  },
  {
    id: 4,
    category: 'cars',
    brand: 'Honda',
    model: 'Vezel e:HEV Z Package',
    year: 2021,
    price: 4150000, // 41.5 Lakh BDT
    originalPrice: 4300000,
    mileage: 24000,
    engine: '1500 cc e:HEV Hybrid',
    horsepower: 131,
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    condition: 'Reconditioned',
    color: 'Premium Crystal Red',
    location: 'Uttara, Dhaka',
    sellerType: 'DHAKA AUTOS Certified',
    sellerName: 'DHAKA AUTOS',
    sellerPhone: '+880 1647-712206',
    sellerRating: 4.9,
    brtaRegistration: 'Dhaka Metro GHA-16',
    taxTokenValidity: 'Feb 2026',
    fitnessValidity: 'Feb 2026',
    images: banglaCarImages.vezel,
    badge: 'discount',
    features: ['Honda Sensing', 'Panoramic Glass Roof', 'Handsfree Power Tailgate', 'Dual Zone Climate Control', '18-inch Two Tone Alloys'],
    description: 'New shape 2021 Honda Vezel e:HEV Z Package. Crystal red exterior with charcoal interior. Auction grade 4.5. All papers updated.'
  },
  {
    id: 5,
    category: 'cars',
    brand: 'Toyota',
    model: 'Land Cruiser Prado TX-L',
    year: 2020,
    price: 13800000, // 1.38 Crore BDT
    originalPrice: 14500000,
    mileage: 31000,
    engine: '2700 cc Dual VVT-i',
    horsepower: 163,
    transmission: '6-Speed Automatic',
    fuelType: 'Octane',
    condition: 'Reconditioned',
    color: 'White Pearl Crystal Shine',
    location: 'Uttara, Dhaka',
    sellerType: 'DHAKA AUTOS Certified',
    sellerName: 'DHAKA AUTOS',
    sellerPhone: '+880 1647-712206',
    sellerRating: 5.0,
    brtaRegistration: 'Dhaka Metro GHA-11',
    taxTokenValidity: 'Oct 2025',
    fitnessValidity: 'Oct 2026',
    images: banglaCarImages.prado,
    badge: 'hot',
    features: ['Sunroof', '7 Leather Seats', 'Cool Box', '4WD Full Time', 'Modellista Aero Bodykit', 'Surround Sound', '19-inch Alloys'],
    description: '2020 Toyota Land Cruiser Prado TX-L Package. Equipped with authentic Japan Modellista Bodykit and 7 premium seats. Pristine VIP condition.'
  },
  {
    id: 6,
    category: 'cars',
    brand: 'Toyota',
    model: 'Noah Si WxB III Hybrid',
    year: 2021,
    price: 3950000, // 39.5 Lakh BDT
    originalPrice: 4100000,
    mileage: 35000,
    engine: '1800 cc Hybrid',
    horsepower: 136,
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    condition: 'Reconditioned',
    color: 'Black Pearl',
    location: 'Uttara, Dhaka',
    sellerType: 'DHAKA AUTOS Certified',
    sellerName: 'DHAKA AUTOS',
    sellerPhone: '+880 1647-712206',
    sellerRating: 4.7,
    brtaRegistration: 'Chatto Metro CHA-08',
    taxTokenValidity: 'Jan 2026',
    fitnessValidity: 'Jan 2026',
    images: banglaCarImages.noah,
    badge: 'new',
    features: ['Dual Power Sliding Doors', 'Captain Seats (7 Seater)', 'Rear Roof Entertainment Monitor', 'Cruise Control', 'Push Start'],
    description: 'Perfect family MPV. Toyota Noah Si WxB III with dual automated electric sliding doors and captain seats. Direct import from Japan.'
  },
  {
    id: 7,
    category: 'cars',
    brand: 'Toyota',
    model: 'Harrier Elegance',
    year: 2019,
    price: 5400000, // 54 Lakh BDT
    originalPrice: 5600000,
    mileage: 48000,
    engine: '2000 cc Valvematic',
    horsepower: 151,
    transmission: 'Automatic',
    fuelType: 'Octane',
    condition: 'Used',
    color: 'Sparkling Black Pearl',
    location: 'Uttara, Dhaka',
    sellerType: 'DHAKA AUTOS Certified',
    sellerName: 'DHAKA AUTOS',
    sellerPhone: '+880 1647-712206',
    sellerRating: 4.9,
    brtaRegistration: 'Sylhet Metro GHA-05',
    taxTokenValidity: 'May 2026',
    fitnessValidity: 'May 2026',
    images: banglaCarImages.harrier,
    badge: 'hot',
    features: ['Panoramic Moonroof', 'Alcantara Seats', 'Power Boot', 'JBL Sound System', '18-inch Alloys', 'Memory Seat'],
    description: 'Toyota Harrier 2019 Elegance Package. Single hand owner, driven in Sylhet only. Complete maintenance at authorized Toyota dealership.'
  },
  {
    id: 8,
    category: 'cars',
    brand: 'BYD',
    model: 'Atto 3 Electric SUV',
    year: 2024,
    price: 5200000, // 52 Lakh BDT
    originalPrice: 5500000,
    mileage: 4500,
    engine: '150 kW Electric Motor (60.48 kWh Battery)',
    horsepower: 201,
    transmission: 'Single Speed Automatic',
    fuelType: 'Electric',
    condition: 'New',
    color: 'Surf Blue',
    location: 'Uttara, Dhaka',
    sellerType: 'DHAKA AUTOS Certified',
    sellerName: 'DHAKA AUTOS',
    sellerPhone: '+880 1647-712206',
    sellerRating: 5.0,
    brtaRegistration: 'EV Dhaka Metro KA-01',
    taxTokenValidity: 'Full 3 Years Paid',
    fitnessValidity: 'Full 3 Years Paid',
    images: banglaCarImages.byd,
    badge: 'new',
    features: ['480 km WLTP Range', 'Rotating 12.8 Touchscreen', 'VTOL Mobile Power Output', 'ADAS Level 2 Autonomous Driving', 'Panoramic Roof'],
    description: 'The future of driving in Bangladesh. Zero fuel cost, zero emissions. Charges fully at home for under ৳ 450 BDT electricity cost.'
  },
  {
    id: 9,
    category: 'bikes',
    brand: 'Yamaha',
    model: 'YZF-R15 V4 Racing Blue',
    year: 2023,
    price: 585000, // 5.85 Lakh BDT
    originalPrice: 610000,
    mileage: 6200,
    engine: '155 cc Liquid Cooled VVA',
    horsepower: 18.4,
    transmission: '6-Speed Manual with Quickshifter',
    fuelType: 'Octane',
    condition: 'Used',
    color: 'Racing Blue',
    location: 'Uttara, Dhaka',
    sellerType: 'DHAKA AUTOS Certified',
    sellerName: 'DHAKA AUTOS',
    sellerPhone: '+880 1647-712206',
    sellerRating: 4.8,
    brtaRegistration: 'Dhaka Metro LA-56',
    taxTokenValidity: 'Nov 2025',
    fitnessValidity: 'Nov 2027',
    images: banglaCarImages.bike,
    badge: 'hot',
    features: ['Dual Channel ABS', 'Traction Control System', 'Quick Shifter (Up)', 'USD Golden Forks', 'Y-Connect Bluetooth'],
    description: 'Yamaha R15 V4 official edition. Brand new condition, no accident record, single-owner enthusiast maintained. First party smart card in hand.'
  },
  {
    id: 10,
    category: 'trucks',
    brand: 'Isuzu',
    model: 'NKR 3.5 Ton Commercial Truck',
    year: 2021,
    price: 2450000, // 24.5 Lakh BDT
    originalPrice: 2600000,
    mileage: 68000,
    engine: '4JB1-TC Diesel Turbo',
    horsepower: 95,
    transmission: '5-Speed Manual',
    fuelType: 'Diesel',
    condition: 'Used',
    color: 'White',
    location: 'Uttara, Dhaka',
    sellerType: 'DHAKA AUTOS Certified',
    sellerName: 'DHAKA AUTOS',
    sellerPhone: '+880 1647-712206',
    sellerRating: 4.6,
    brtaRegistration: 'Chatto Metro UA-14',
    taxTokenValidity: 'Sep 2025',
    fitnessValidity: 'Sep 2025',
    images: banglaCarImages.truck,
    badge: 'new',
    features: ['Heavy Duty Chassis', 'Steel Cargo Bed', 'Power Steering', 'Air Brakes', 'Double Rear Tyres'],
    description: 'Isuzu 3.5 Ton commercial cargo truck. Engine and chassis 100% original. Commercial route permit and fitness fully updated.'
  },

  // ------------------------------------------------------------------
  //  EXPANDED BIKES COLLECTION — DHAKA AUTOS Flagship Showroom
  // ------------------------------------------------------------------
  {
    id: 11,
    category: 'bikes',
    brand: 'Honda',
    model: 'CB300R Neo Sport Cafe',
    year: 2023,
    price: 795000,
    originalPrice: 830000,
    mileage: 3500,
    engine: '286 cc Single Cylinder DOHC',
    horsepower: 31,
    transmission: '6-Speed Manual',
    fuelType: 'Octane',
    condition: 'Used',
    color: 'Matte Black Metallic',
    location: 'Uttara, Dhaka',
    sellerType: 'DHAKA AUTOS Certified',
    sellerName: 'DHAKA AUTOS',
    sellerPhone: '+880 1647-712206',
    sellerRating: 4.9,
    brtaRegistration: 'Dhaka Metro LA-61',
    taxTokenValidity: 'Jan 2026',
    fitnessValidity: 'Jan 2028',
    images: bikeImagesFor(0),
    badge: 'hot',
    features: ['ABS Dual Channel', 'LED All Round Lighting', 'USD Inverted Fork', 'Full Digital Meter', 'Assist Slipper Clutch'],
    description: 'Honda CB300R 2023 — premium neo-sport cafe design. Single-owner enthusiast maintained. Very low mileage, showroom condition.'
  },
  {
    id: 12,
    category: 'bikes',
    brand: 'Bajaj',
    model: 'Pulsar NS200 ABS',
    year: 2023,
    price: 415000,
    originalPrice: 435000,
    mileage: 4200,
    engine: '199.5 cc Triple Spark 4-Valve',
    horsepower: 24.5,
    transmission: '6-Speed Manual',
    fuelType: 'Octane',
    condition: 'Used',
    color: 'Racing Red',
    location: 'Uttara, Dhaka',
    sellerType: 'DHAKA AUTOS Certified',
    sellerName: 'DHAKA AUTOS',
    sellerPhone: '+880 1647-712206',
    sellerRating: 4.8,
    brtaRegistration: 'Dhaka Metro LA-74',
    taxTokenValidity: 'Mar 2026',
    fitnessValidity: 'Mar 2028',
    images: bikeImagesFor(1),
    badge: 'new',
    features: ['Single Channel ABS', 'Liquid Cooled DTS-i', 'Perimeter Frame', 'LED Tail Lamp', 'USB Charger Port'],
    description: 'Bajaj Pulsar NS200 ABS 2023. Triple-spark liquid-cooled engine with excellent city and highway performance. No accident, first-party smart card.'
  },
  {
    id: 13,
    category: 'bikes',
    brand: 'Yamaha',
    model: 'MT-15 V2',
    year: 2022,
    price: 465000,
    originalPrice: 485000,
    mileage: 8900,
    engine: '155 cc Liquid Cooled VVA',
    horsepower: 18.4,
    transmission: '6-Speed Manual',
    fuelType: 'Octane',
    condition: 'Used',
    color: 'Ice Fluo-Vermillion',
    location: 'Uttara, Dhaka',
    sellerType: 'DHAKA AUTOS Certified',
    sellerName: 'DHAKA AUTOS',
    sellerPhone: '+880 1647-712206',
    sellerRating: 4.8,
    brtaRegistration: 'Dhaka Metro LA-69',
    taxTokenValidity: 'Jun 2025',
    fitnessValidity: 'Jun 2027',
    images: bikeImagesFor(2),
    badge: 'hot',
    features: ['VVA Actuator', 'Assist Slipper Clutch', 'Single Channel ABS', '140 Section Rear Tyre', 'Fully Digital Display'],
    description: 'Yamaha MT-15 V2 — lightweight streetfighter with VVA technology. Very responsive in city traffic. Excellent condition, rarely ridden on weekends.'
  },
  {
    id: 14,
    category: 'bikes',
    brand: 'Suzuki',
    model: 'Gixxer SF 250',
    year: 2022,
    price: 355000,
    originalPrice: 375000,
    mileage: 11200,
    engine: '249 cc Oil Cooled 4-Stroke',
    horsepower: 26,
    transmission: '6-Speed Manual',
    fuelType: 'Octane',
    condition: 'Used',
    color: 'Metallic Black',
    location: 'Uttara, Dhaka',
    sellerType: 'DHAKA AUTOS Certified',
    sellerName: 'DHAKA AUTOS',
    sellerPhone: '+880 1647-712206',
    sellerRating: 4.7,
    brtaRegistration: 'Dhaka Metro LA-82',
    taxTokenValidity: 'Feb 2026',
    fitnessValidity: 'Feb 2028',
    images: bikeImagesFor(3),
    badge: 'new',
    features: ['ABS Dual Channel', 'Oil Cooled SOCS', 'Rear Tyre Hanger', 'LED Headlamp', 'Digital Instrument Cluster'],
    description: 'Suzuki Gixxer SF 250 full-faired sport-tourer. Excellent highway performer with oil-cooled engine. Complete service history from authorized dealer.'
  },
  {
    id: 15,
    category: 'bikes',
    brand: 'TVS',
    model: 'Apache RTR 200 4V Race Edition',
    year: 2023,
    price: 315000,
    originalPrice: 330000,
    mileage: 2800,
    engine: '197.75 cc Single Cylinder Oil Cooled',
    horsepower: 20.8,
    transmission: '5-Speed Manual',
    fuelType: 'Octane',
    condition: 'Used',
    color: 'Racing Red',
    location: 'Uttara, Dhaka',
    sellerType: 'DHAKA AUTOS Certified',
    sellerName: 'DHAKA AUTOS',
    sellerPhone: '+880 1647-712206',
    sellerRating: 4.8,
    brtaRegistration: 'Dhaka Metro LA-58',
    taxTokenValidity: 'Jul 2025',
    fitnessValidity: 'Jul 2027',
    images: bikeImagesFor(0),
    badge: 'hot',
    features: ['Ride Modes (Rain/Sport)', 'ABS Dual Channel', 'SmartXonnect Bluetooth', 'Glide Through Traffic', 'Radial Rear Tyre'],
    description: 'TVS Apache RTR 200 4V Race Edition 2023 — feature loaded with ride modes and Bluetooth. Barely used, like-new showroom condition.'
  },
  {
    id: 16,
    category: 'bikes',
    brand: 'Royal Enfield',
    model: 'Classic 350 Halcyon',
    year: 2023,
    price: 425000,
    originalPrice: 445000,
    mileage: 1800,
    engine: '349 cc Air-Oil Cooled Single',
    horsepower: 20.2,
    transmission: '5-Speed Manual',
    fuelType: 'Octane',
    condition: 'New',
    color: 'Gunmetal Grey',
    location: 'Uttara, Dhaka',
    sellerType: 'DHAKA AUTOS Certified',
    sellerName: 'DHAKA AUTOS',
    sellerPhone: '+880 1647-712206',
    sellerRating: 4.9,
    brtaRegistration: 'Dhaka Metro LA-90',
    taxTokenValidity: 'Full 3 Years Paid',
    fitnessValidity: 'Full 3 Years Paid',
    images: bikeImagesFor(1),
    badge: 'new',
    features: ['Tripper Navigation', 'Dual Channel ABS', 'USB Charger', 'LED Pilot Lamp', 'Dapper Halcyon Style'],
    description: 'Royal Enfield Classic 350 brand new 2023 — iconic retro design with modern reliability. Zero accident, full 3-year registration done.'
  },

  // ------------------------------------------------------------------
  //  EXPANDED TRUCKS COLLECTION — DHAKA AUTOS Commercial Division
  // ------------------------------------------------------------------
  {
    id: 17,
    category: 'trucks',
    brand: 'TATA',
    model: 'Ace 0.75 Ton Gold Pickup',
    year: 2022,
    price: 1650000,
    originalPrice: 1750000,
    mileage: 125000,
    engine: '700 cc 4-Cylinder Diesel',
    horsepower: 16,
    transmission: '4-Speed Manual',
    fuelType: 'Diesel',
    condition: 'Used',
    color: 'White',
    location: 'Uttara, Dhaka',
    sellerType: 'DHAKA AUTOS Certified',
    sellerName: 'DHAKA AUTOS',
    sellerPhone: '+880 1647-712206',
    sellerRating: 4.7,
    brtaRegistration: 'Dhaka Metro UA-27',
    taxTokenValidity: 'Sep 2025',
    fitnessValidity: 'Sep 2026',
    images: truckImagesFor(0),
    badge: 'new',
    features: ['Payload 750 kg', 'Power Steering', 'Full Steel Cargo Deck', 'Eco Mode', 'Greaseable Kingpins'],
    description: 'TATA Ace Gold — Bangladesh\'s most trusted small commercial vehicle. Perfect for intra-city last-mile cargo delivery. Engine and suspension fully serviced.'
  },
  {
    id: 18,
    category: 'trucks',
    brand: 'Ashok Leyland',
    model: 'Dost Strong 1.5T Pickup',
    year: 2021,
    price: 2100000,
    originalPrice: 2250000,
    mileage: 88000,
    engine: '1477 cc Nissan Diesel',
    horsepower: 60,
    transmission: '5-Speed Manual',
    fuelType: 'Diesel',
    condition: 'Used',
    color: 'White',
    location: 'Uttara, Dhaka',
    sellerType: 'DHAKA AUTOS Certified',
    sellerName: 'DHAKA AUTOS',
    sellerPhone: '+880 1647-712206',
    sellerRating: 4.8,
    brtaRegistration: 'Dhaka Metro UA-33',
    taxTokenValidity: 'Mar 2026',
    fitnessValidity: 'Mar 2027',
    images: truckImagesFor(1),
    badge: 'hot',
    features: ['Payload 1490 kg', 'Nissan ZD Engine', 'Load Body Reinforced', 'High Ground Clearance', 'Air Brakes'],
    description: 'Ashok Leyland Dost Strong 1.5 Ton — Nissan-derived diesel power with excellent fuel economy. Well maintained with complete service booklet.'
  },
  {
    id: 19,
    category: 'trucks',
    brand: 'Isuzu',
    model: 'Elf NKR 4.2T Forward',
    year: 2020,
    price: 3400000,
    originalPrice: 3600000,
    mileage: 96000,
    engine: '4JJ1-TC Diesel Turbo Intercooled',
    horsepower: 125,
    transmission: '5-Speed Manual',
    fuelType: 'Diesel',
    condition: 'Used',
    color: 'Sky Blue',
    location: 'Uttara, Dhaka',
    sellerType: 'DHAKA AUTOS Certified',
    sellerName: 'DHAKA AUTOS',
    sellerPhone: '+880 1647-712206',
    sellerRating: 4.9,
    brtaRegistration: 'Chattogram Metro UA-08',
    taxTokenValidity: 'Nov 2025',
    fitnessValidity: 'Nov 2026',
    images: truckImagesFor(2),
    badge: 'hot',
    features: ['Payload 4200 kg', 'Turbo Diesel 4JJ1', 'Power Steering', 'Reinforced Chassis', 'ABS Braking'],
    description: 'Isuzu Elf NKR 4.2 Ton Forward — premium Japanese commercial truck with legendary reliability. Intercooled turbo diesel for hauling efficiency.'
  },
  {
    id: 20,
    category: 'trucks',
    brand: 'Hino',
    model: '300 Series 6.2T Hino Wide',
    year: 2019,
    price: 4200000,
    originalPrice: 4500000,
    mileage: 142000,
    engine: '4.0L J05E-TI Hino Diesel Turbo',
    horsepower: 131,
    transmission: '6-Speed Manual',
    fuelType: 'Diesel',
    condition: 'Used',
    color: 'White',
    location: 'Uttara, Dhaka',
    sellerType: 'DHAKA AUTOS Certified',
    sellerName: 'DHAKA AUTOS',
    sellerPhone: '+880 1647-712206',
    sellerRating: 4.8,
    brtaRegistration: 'Dhaka Metro UA-41',
    taxTokenValidity: 'Aug 2025',
    fitnessValidity: 'Aug 2026',
    images: truckImagesFor(3),
    badge: 'new',
    features: ['Payload 6200 kg', 'Hino Intercooled Turbo', 'Full Air Brakes', 'Double Rear Tyres', 'Reinforced Steel Body'],
    description: 'Hino 300 Series 6.2 Ton — Bangladesh\'s go-to medium commercial truck. Strong engine and chassis with proven route-permit compliance.'
  },
  {
    id: 21,
    category: 'trucks',
    brand: 'Eicher',
    model: 'Pro 2049 6T Cargo',
    year: 2021,
    price: 3850000,
    originalPrice: 4000000,
    mileage: 76000,
    engine: '2.5L E494 BS-IV Diesel',
    horsepower: 110,
    transmission: '5-Speed Manual',
    fuelType: 'Diesel',
    condition: 'Used',
    color: 'White',
    location: 'Uttara, Dhaka',
    sellerType: 'DHAKA AUTOS Certified',
    sellerName: 'DHAKA AUTOS',
    sellerPhone: '+880 1647-712206',
    sellerRating: 4.7,
    brtaRegistration: 'Rajshahi Metro UA-05',
    taxTokenValidity: 'Dec 2025',
    fitnessValidity: 'Dec 2026',
    images: truckImagesFor(0),
    badge: 'new',
    features: ['Payload 6000 kg', 'Eicher E494 Engine', 'Hydraulic Power Steering', 'Multi Leaf Springs', 'BS-IV Compliant'],
    description: 'Eicher Pro 2049 — fuel-efficient 6 Ton cargo truck built for regional haulage. Hydraulically steered, excellent on Rajshahi-Dhaka highway routes.'
  }
];

// ---------- Popular Manufacturers in Bangladesh ----------
Garirbazar.brands = [
  { name: 'Toyota', logo: 'TOYOTA', count: '14,280 Cars' },
  { name: 'Honda', logo: 'HONDA', count: '4,520 Cars' },
  { name: 'Nissan', logo: 'NISSAN', count: '3,890 Cars' },
  { name: 'Mitsubishi', logo: 'MITSUBISHI', count: '2,450 Cars' },
  { name: 'Hyundai', logo: 'HYUNDAI', count: '1,980 Cars' },
  { name: 'Suzuki', logo: 'SUZUKI', count: '3,100 Cars' },
  { name: 'BYD', logo: 'BYD', count: '450 EVs' },
  { name: 'BMW', logo: 'BMW', count: '890 Prestige' },
  { name: 'Mercedes-Benz', logo: 'MERCEDES', count: '760 Prestige' },
  { name: 'Yamaha', logo: 'YAMAHA', count: '6,200 Bikes' }
];

// ---------- Bangladesh Major Divisions / Cities ----------
Garirbazar.cities = [
  'All Bangladesh',
  'Dhaka',
  'Chittagong',
  'Sylhet',
  'Rajshahi',
  'Khulna',
  'Barisal',
  'Rangpur',
  'Gazipur',
  'Narayanganj'
];

// ---------- DHAKA AUTOS Flagship Showroom ----------
Garirbazar.dealerships = [
  { name: 'DHAKA AUTOS Flagship Showroom', address: 'House 7, Road 3, Uttara Sector 7, Dhaka', phone: '+880 1647-712206', carsCount: 112, rating: 4.9 },
  { name: 'DHAKA AUTOS Commercial Division', address: '24 Shahid Tajuddin Ahmed Sarani, Tejgaon I/A, Dhaka', phone: '+880 1647-712206', carsCount: 76, rating: 4.8 }
];

// ---------- Customer Testimonials (Bangladeshi Buyers/Sellers) ----------
Garirbazar.reviews = [
  {
    id: 1,
    name: 'Mustafa Kamal',
    role: 'Business Owner, Gulshan',
    rating: 5,
    verified: true,
    title: 'Found my genuine Premio with verified auction sheet',
    text: 'DHAKA AUTOS made buying my reconditioned Toyota Premio so straightforward. The team provided the authentic auction sheet and verification paper on spot.',
    car: '2021 Toyota Premio F EX',
    date: '28 August 2026'
  },
  {
    id: 2,
    name: 'Farhana Yasmin',
    role: 'Software Architect, Dhanmondi',
    rating: 5,
    verified: true,
    title: 'Sold my Vezel in 4 days at expected price',
    text: 'Listed my Honda Vezel on Monday. Received 6 calls from genuine direct buyers. Transferred BRTA papers smoothly at Mirpur BRTA office without any third-party hassle.',
    car: '2019 Honda Vezel',
    date: '15 August 2026'
  },
  {
    id: 3,
    name: 'S. M. Raihan',
    role: 'Banker, Chittagong',
    rating: 5,
    verified: true,
    title: 'Best showroom for vehicle loan & comparison in BD',
    text: 'Calculated my car loan installments accurately with their bank loan calculator. Got approved from City Bank auto loan through DHAKA AUTOS partner desk.',
    car: '2022 Toyota Allion',
    date: '02 August 2026'
  }
];

// ---------- DHAKA AUTOS Journal — Trust & Buying Guide Posts ----------
Garirbazar.blogPosts = [
  {
    id: 1,
    title: 'How to Verify a Used Car in Bangladesh Before You Buy',
    excerpt: 'BRTA tax token, fitness, chassis cutting not required — our simple checklist to check registration smart card, paper history and ownership before payment.',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200&q=80',
    category: 'Buying Guide',
    author: 'DHAKA AUTOS Team',
    date: '2026-09-10',
    readTime: '6 min'
  },
  {
    id: 2,
    title: '5 Trust Signals of a Genuine Reconditioned Car',
    excerpt: 'Auction sheet, grade report, engine number check and more — learn how DHAKA AUTOS inspects every import before it reaches the showroom floor.',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80',
    category: 'Buying Guide',
    author: 'DHAKA AUTOS Team',
    date: '2026-09-05',
    readTime: '5 min'
  },
  {
    id: 3,
    title: 'Why Paper Verification Matters More Than a Good Paint Job',
    excerpt: 'A shiny car can hide a bad history. Read why DHAKA AUTOS refuses to sell any vehicle without full BRTA paper verification and auction transparency.',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&q=80',
    category: 'Reviews',
    author: 'DHAKA AUTOS Team',
    date: '2026-08-28',
    readTime: '7 min'
  },
  {
    id: 4,
    title: 'Buying an Electric Car in Bangladesh in 2026: What to Check',
    excerpt: 'Battery health, charging at home, EV registration — a practical trust checklist before investing in an electric SUV from a local showroom.',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&q=80',
    category: 'Technology',
    author: 'DHAKA AUTOS Team',
    date: '2026-08-20',
    readTime: '8 min'
  },
  {
    id: 5,
    title: 'DHAKA AUTOS Guarantee: What Our 3-Point Assurance Means',
    excerpt: 'Verified papers, inspected mechanics and honest pricing — meet the promises behind every vehicle sold from our showrooms.',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&q=80',
    category: 'News',
    author: 'DHAKA AUTOS Team',
    date: '2026-08-12',
    readTime: '4 min'
  },
  {
    id: 6,
    title: 'Test Drive Checklist: 9 Things to Check Before You Sign',
    excerpt: 'Cold start, steering alignment, AC cooling, gearbox feel and quiet brakes — follow our trusted test drive checklist for total confidence.',
    image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1200&q=80',
    category: 'Buying Guide',
    author: 'DHAKA AUTOS Team',
    date: '2026-08-02',
    readTime: '6 min'
  }
];

// ---------- DHAKA AUTOS Showroom Inbox (Demo Conversations) ----------
Garirbazar.messages = [
  {
    id: 1,
    sender: 'Asif Rahman',
    online: true,
    lastSeen: 'Online now',
    unread: 2,
    messages: [
      { text: 'Is the Premio F EX still available?', time: '10:24 AM', sent: false, read: true },
      { text: 'Yes, it is ready for a test drive at our Gulshan showroom. Interested?', time: '10:26 AM', sent: true, read: true },
      { text: 'Great! Can I come tomorrow at 11?', time: '10:31 AM', sent: false, read: false }
    ]
  },
  {
    id: 2,
    sender: 'Nabil Hossain',
    online: false,
    lastSeen: 'Last seen today at 9:14 AM',
    unread: 1,
    messages: [
      { text: 'Do you buy used cars from sellers?', time: '9:02 AM', sent: false, read: true },
      { text: 'Yes! Call us at 01647-712206 or share your car details and we will respond within 24 hours.', time: '9:05 AM', sent: true, read: true }
    ]
  },
  {
    id: 3,
    sender: 'Mithila Islam',
    online: true,
    lastSeen: 'Online now',
    unread: 0,
    messages: [
      { text: 'What about the EMI on the Corolla Cross?', time: 'Yesterday', sent: false, read: true },
      { text: 'Please check our Loan Calculator page — it gives the exact installment for City Bank, BRAC and IDLC.', time: 'Yesterday', sent: true, read: true }
    ]
  }
];

// ---------- Helper Functions ----------

// Initials for avatars (e.g. "DHAKA AUTOS Team" -> "VS")
Garirbazar.getInitials = (name) => {
  const clean = String(name || 'DA').trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return 'DA';
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

// Deterministic avatar color from a name string
Garirbazar.getAvatarColor = (name) => {
  const palette = ['#34723e', '#1374dd', '#d3001d', '#7c3aed', '#b45309', '#0e7490', '#be185d', '#4d7c0f'];
  const clean = String(name || 'VS');
  let hash = 0;
  for (let i = 0; i < clean.length; i++) {
    hash = clean.charCodeAt(i) + ((hash << 5) - hash);
  }
  return palette[Math.abs(hash) % palette.length];
};

// Format in BDT Lakhs or Standard Taka (৳)
Garirbazar.formatPrice = (amount) => {
  if (Garirbazar.state.currency === 'USD') {
    const usd = Math.round(amount / Garirbazar.state.usdRate);
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(usd);
  }

  // BDT formatting in Lakhs / Crores
  if (amount >= 10000000) {
    const crore = (amount / 10000000).toFixed(2);
    return `BDT ${crore} Crore`;
  } else if (amount >= 100000) {
    const lakh = (amount / 100000).toFixed(2);
    return `BDT ${lakh} Lakh`;
  } else {
    return `BDT ${new Intl.NumberFormat('en-IN').format(amount)}`;
  }
};

Garirbazar.formatNumber = (num) => {
  return new Intl.NumberFormat('en-IN').format(num);
};

Garirbazar.getCarById = (id) => {
  return Garirbazar.cars.find(c => c.id === parseInt(id));
};

Garirbazar.toggleFavorite = (carId) => {
  if (Garirbazar.state.favorites.has(carId)) {
    Garirbazar.state.favorites.delete(carId);
  } else {
    Garirbazar.state.favorites.add(carId);
  }
};

Garirbazar.addToCompare = (carId) => {
  if (Garirbazar.state.compareList.length < 3 && !Garirbazar.state.compareList.includes(carId)) {
    Garirbazar.state.compareList.push(carId);
    return true;
  }
  return false;
};

Garirbazar.removeFromCompare = (carId) => {
  Garirbazar.state.compareList = Garirbazar.state.compareList.filter(id => id !== carId);
};

Garirbazar.filterCars = (filters) => {
  return Garirbazar.cars.filter(car => {
    if (filters.category && car.category !== filters.category) return false;
    if (filters.brand && car.brand.toLowerCase() !== filters.brand.toLowerCase()) return false;
    if (filters.condition && car.condition.toLowerCase() !== filters.condition.toLowerCase()) return false;
    if (filters.city && !car.location.toLowerCase().includes(filters.city.toLowerCase())) return false;
    if (filters.fuelType && car.fuelType.toLowerCase() !== filters.fuelType.toLowerCase()) return false;
    if (filters.priceMax && car.price > parseInt(filters.priceMax)) return false;
    return true;
  });
};

// ---------- Single-Company Admin Model ----------
// Only the authorized DHAKA AUTOS admin can add / manage listings.

Garirbazar.isAdmin = true; // Demo flag — single-company platform owner

Garirbazar.addVehicle = (data) => {
  const nextId = Garirbazar.cars.reduce((max, c) => Math.max(max, c.id), 0) + 1;

  const categoryImages = {
    cars: ['https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80', 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80'],
    bikes: ['https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80', 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80'],
    trucks: ['https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80', 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80']
  };

  const vehicle = {
    id: nextId,
    category: data.category || 'cars',
    brand: (data.brand || '').trim() || 'DHAKA AUTOS SPECIAL',
    model: (data.model || '').trim() || 'Custom Listing',
    year: parseInt(data.year, 10) || new Date().getFullYear(),
    price: parseInt(data.price, 10) || 0,
    originalPrice: parseInt(data.originalPrice, 10) || 0,
    mileage: parseInt(data.mileage, 10) || 0,
    engine: data.engine || 'Standard Engine',
    horsepower: parseFloat(data.horsepower) || 0,
    transmission: data.transmission || 'Automatic',
    fuelType: data.fuelType || 'Octane',
    condition: data.condition || 'Used',
    color: data.color || 'Pearl White',
    location: Garirbazar.state.showroomLocation, // Uniform — admin cannot change
    sellerType: 'DHAKA AUTOS Certified',
    sellerName: 'DHAKA AUTOS',
    sellerPhone: Garirbazar.state.showroomHotline,
    sellerRating: 5.0,
    brtaRegistration: data.brtaRegistration || 'Dhaka Metro AA-00',
    taxTokenValidity: 'Full 3 Years Paid',
    fitnessValidity: 'Full 3 Years Paid',
    images: (data.imageUrl && data.imageUrl.trim())
      ? [data.imageUrl.trim(), categoryImages[data.category][1]]
      : categoryImages[data.category] || categoryImages.cars,
    badge: 'new',
    features: (data.features || '').split(',').map(f => f.trim()).filter(Boolean),
    description: data.description || 'Fresh listing added by the DHAKA AUTOS admin. Fully inspected, paper-verified and honestly priced.'
  };

  Garirbazar.cars.unshift(vehicle); // New listing appears first
  return vehicle;
};

Garirbazar.removeVehicle = (id) => {
  id = parseInt(id, 10);
  Garirbazar.cars = Garirbazar.cars.filter(c => c.id !== id);
  Garirbazar.state.favorites.delete(id);
  Garirbazar.state.compareList = Garirbazar.state.compareList.filter(c => c !== id);
  return true;
};

console.log('✅ DHAKA AUTOS Data loaded:', Garirbazar.cars.length, 'vehicles');
