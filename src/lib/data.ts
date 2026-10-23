export const businesses = [
  {
    slug: "regina-humane-society",
    name: "Regina Humane Society",
    category: "Community",
    address: "2840 Angus Street, Regina, SK",
    phone: "(306) 543-6363",
    description: "Animal care, adoption, and community education services serving Regina and area.",
    package: "premium",
    image: "/placeholder-business.jpg",
    hours: "Mon-Fri 10am-5pm, Sat 10am-4pm",
    website: "https://reginahumanesociety.ca",
    services: ["Pet Adoption", "Animal Shelter", "Education Programs"],
  },
  {
    slug: "sterling-plumbing",
    name: "Sterling Plumbing & Heating",
    category: "Home & Auto",
    address: "123 Main Street, Regina, SK",
    phone: "(306) 586-5050",
    description: "Full-service plumbing and heating for residential and commercial clients across Regina.",
    package: "enhanced",
    image: "/placeholder-business.jpg",
    hours: "Mon-Sat 7am-6pm",
    website: "https://sterlingplumbing.ca",
    services: ["Emergency Plumbing", "Furnace Repair", "Water Heaters"],
  },
  {
    slug: "lawntec-yard",
    name: "Lawntec Yard & Landscape",
    category: "Home & Auto",
    address: "456 Wascana Parkway, Regina, SK",
    phone: "(306) 352-5296",
    description: "Professional landscaping, lawn care, and seasonal cleanup services.",
    package: "enhanced",
    image: "/placeholder-business.jpg",
    hours: "Mon-Fri 8am-5pm",
    website: "https://lawntec.ca",
    services: ["Lawn Maintenance", "Landscape Design", "Snow Removal"],
  },
  {
    slug: "croft-electric",
    name: "Croft Electric Ltd.",
    category: "Home & Auto",
    address: "789 Albert Street, Regina, SK",
    phone: "(306) 586-1333",
    description: "Licensed electricians for residential, commercial, and industrial projects.",
    package: "starter",
    image: "/placeholder-business.jpg",
    hours: "Mon-Fri 7am-5pm",
    website: "https://croftelectric.ca",
    services: ["Electrical Repairs", "Panel Upgrades", "Lighting"],
  },
  {
    slug: "provincial-oral-surgery",
    name: "Provincial Oral Surgery",
    category: "Health & Wellness",
    address: "2100 Broad Street, Regina, SK",
    phone: "(306) 359-7040",
    description: "Specialized oral and maxillofacial surgery with experienced local surgeons.",
    package: "premium",
    image: "/placeholder-business.jpg",
    hours: "Mon-Thu 8am-4pm",
    website: "https://provincialoralsurgery.ca",
    services: ["Wisdom Teeth", "Implants", "Jaw Surgery"],
  },
];

export const categories = [
  { name: "Community", count: 222 },
  { name: "Dining & Entertainment", count: 25 },
  { name: "Health & Wellness", count: 359 },
  { name: "Home & Auto", count: 455 },
  { name: "Professional Services", count: 164 },
  { name: "Shopping", count: 137 },
];

export const packages = [
  {
    name: "Starter",
    price: "$0 per month",
    tagline: "Get found locally.",
    includes: ["Business Name", "Business Address", "Business Phone Number"],
    bestFor: "Businesses that want to establish their local digital presence",
  },
  {
    name: "Enhanced",
    price: "$69 per month",
    tagline: "Give customers more reasons to choose you.",
    includes: [
      "Everything in Starter, plus:",
      "Enhanced Business Description & Photo Gallery",
      "Business logo",
      "Website / Email",
      "Hours of Operation",
      "Interactive Map",
      "Expanded SEO capabilities",
      "Enhanced AEO discovery",
    ],
    bestFor: "Businesses that want customers to discover, explore and engage with their brand.",
  },
  {
    name: "Premium",
    price: "$99 per month",
    tagline: "Maximize your local visibility.",
    includes: [
      "Everything in Enhanced, plus:",
      "Social media links",
      "Products & services details",
      "Showcase Photo Galleries",
      "Customer Reviews",
      "Offers and promotions",
      "Premium [featured] directory placement",
      "Enhanced visibility in the rotating featured ad spot on our news sites",
    ],
    bestFor: "Businesses that want to maximize awareness and stand out from the competition.",
    highlight: true,
  },
];

export const coupons = [
  { business: "Lawntec Yard & Landscape", offer: "15% off spring cleanup", code: "SPRING15", expires: "May 31, 2026", logo: "L" },
  { business: "Sterling Plumbing & Heating", offer: "Free water heater inspection", code: "HEATCHECK", expires: "Nov 30, 2026", logo: "S" },
  { business: "Regina Humane Society", offer: "Adopt a pet this month, get a starter kit", code: "ADOPT2026", expires: "Dec 15, 2026", logo: "RHS" },
];

export const notices = [
  { title: "City of Regina Public Notice: Zoning Bylaw Amendment", date: "Oct 15, 2026", summary: "Proposed changes to residential density in the Cathedral area." },
  { title: "Saskatchewan Government: Highway 1 Maintenance", date: "Oct 10, 2026", summary: "Overnight closures planned for paving work near Regina." },
];

export const events = [
  {
    title: "Queen City Fibre Festival",
    month: "OCT",
    day: "25",
    date: "Oct 25, 2026",
    time: "10:00 AM - 5:00 PM",
    location: "Mosaic Stadium Area",
    description: "Local makers, fibre artists, and workshops celebrating Regina's creative community.",
  },
  {
    title: "Regina Farmers' Market",
    month: "SAT",
    day: "Every",
    date: "Every Saturday",
    time: "8:00 AM - 1:00 PM",
    location: "Victoria Park",
    description: "Fresh produce, baked goods, and local vendors every Saturday morning.",
  },
  {
    title: "Wascana Centre Fall Cleanup",
    month: "NOV",
    day: "2",
    date: "Nov 2, 2026",
    time: "9:00 AM - 12:00 PM",
    location: "Wascana Parkway",
    description: "Community volunteer event to tidy trails and shoreline before winter.",
  },
  {
    title: "Roughriders Fan Appreciation Night",
    month: "NOV",
    day: "8",
    date: "Nov 8, 2026",
    time: "6:00 PM",
    location: "Mosaic Stadium",
    description: "Season wrap-up celebration with player appearances and giveaways.",
  },
];

export const jobs = [
  { title: "Truck and Transport Apprentice, Fleet Maintenance", company: "GFL Environmental", location: "Regina, SK", type: "Full-time", source: "Talent.com" },
  { title: "Product Tester - No experience - Work from Home", company: "Great Lion Canada", location: "Remote", type: "Part-time", source: "Talent.com" },
  { title: "Independent Contractor - Shopper and Delivery Driver", company: "Instacart Shoppers", location: "Regina, SK", type: "Contract", source: "Talent.com" },
  { title: "Registered Nurse - Emergency Department", company: "Saskatchewan Health Authority", location: "Regina, SK", type: "Full-time", source: "Leader-Post Jobs" },
  { title: "Marketing Coordinator", company: "Local Marketing Firm", location: "Regina, SK", type: "Full-time", source: "Leader-Post Jobs" },
];

export const classifieds = [
  { title: "Used riding mower for sale", price: "$800", contact: "Private seller" },
  { title: "Looking for part-time bookkeeper", price: "Negotiable", contact: "Local firm" },
];
