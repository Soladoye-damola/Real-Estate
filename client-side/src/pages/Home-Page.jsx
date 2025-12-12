import React, { useState } from 'react';
import { Home, Bed, Bath, MapPin, X, ChevronLeft, ChevronRight, Building2, Camera, Users, Trees } from 'lucide-react';

export default function HomePage() {
  const [filter, setFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Real image URLs
  const apartmentImgs = [
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80",
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=80",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80"
  ];
  
  const houseImgs = [
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    "https://images.unsplash.com/photo-1566908829550-e6551b00979b?w=800&q=80",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
  ];
  
  const officeImgs = [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80",
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&q=80",
    "https://images.unsplash.com/photo-1562564055-71e051d33c19?w=800&q=80"
  ];
  
  const studioImgs = [
    "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
    "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=800&q=80",
    "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=800&q=80",
    "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80",
    "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80",
    "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&q=80",
    "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&q=80",
    "https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=800&q=80",
    "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80"
  ];
  
  const confImgs = [
    "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
    "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&q=80",
    "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=800&q=80",
    "https://images.unsplash.com/photo-1561489396-888724a1543d?w=800&q=80",
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",
    "https://images.unsplash.com/photo-1519167758481-83f29da8c2a7?w=800&q=80"
  ];
  
  const landImgs = [
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=800&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
    "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80"
  ];

  const properties = [
    // APARTMENTS
    {
      id: 1,
      title: "3 Bedroom Flat",
      type: "rent",
      category: "apartment",
      price: 2500000,
      location: "Lekki Phase 1, Lagos",
      bedrooms: 3,
      bathrooms: 3,
      area: 120,
      images: apartmentImgs,
      description: "Modern 3-bedroom flat in prime Lekki Phase 1. Spacious living area, fitted kitchen, en-suite master bedroom, balcony with city views."
    },
    {
      id: 2,
      title: "2 Bedroom Luxury Apartment",
      type: "rent",
      category: "apartment",
      price: 3200000,
      location: "Victoria Island, Lagos",
      bedrooms: 2,
      bathrooms: 2,
      area: 110,
      images: apartmentImgs,
      description: "Upscale 2-bedroom in VI with pool, gym, 24/7 security, backup power, and waterfront views."
    },
    // HOUSES
    {
      id: 3,
      title: "5 Bedroom Detached Duplex",
      type: "sale",
      category: "house",
      price: 150000000,
      location: "Banana Island, Ikoyi",
      bedrooms: 5,
      bathrooms: 6,
      area: 450,
      images: houseImgs,
      description: "Luxury 5-bedroom detached duplex. Swimming pool, BQ, cinema, gym, smart home system, 24/7 security."
    },
    {
      id: 4,
      title: "4 Bedroom Terrace Duplex",
      type: "sale",
      category: "house",
      price: 75000000,
      location: "Ikeja GRA, Lagos",
      bedrooms: 4,
      bathrooms: 5,
      area: 280,
      images: houseImgs,
      description: "Beautiful 4-bedroom terrace in Ikeja GRA. All en-suite rooms, fitted kitchen, ample parking."
    },
    // STUDIOS
    {
      id: 5,
      title: "Modern Studio Apartment",
      type: "rent",
      category: "studio",
      price: 900000,
      location: "Yaba, Lagos",
      bedrooms: 1,
      bathrooms: 1,
      area: 45,
      images: apartmentImgs,
      description: "Stylish studio perfect for young professionals. Open-plan with modern finishes and natural lighting."
    },
    {
      id: 6,
      title: "Luxury Smart Studio",
      type: "rent",
      category: "studio",
      price: 1800000,
      location: "Victoria Island, Lagos",
      bedrooms: 1,
      bathrooms: 1,
      area: 55,
      images: apartmentImgs,
      description: "High-end studio with smart home automation, premium appliances, gym access, 24/7 concierge."
    },
    // PENTHOUSES
    {
      id: 7,
      title: "Luxury Penthouse Panoramic Views",
      type: "rent",
      category: "penthouse",
      price: 12000000,
      location: "Eko Atlantic City, Lagos",
      bedrooms: 4,
      bathrooms: 5,
      area: 400,
      images: houseImgs,
      description: "Stunning penthouse with floor-to-ceiling windows, private terrace, infinity pool, wine cellar, ocean views."
    },
    {
      id: 8,
      title: "Ultra-Modern Penthouse Suite",
      type: "sale",
      category: "penthouse",
      price: 450000000,
      location: "Banana Island, Ikoyi",
      bedrooms: 5,
      bathrooms: 6,
      area: 550,
      images: houseImgs,
      description: "Exclusive penthouse: private elevator, rooftop garden, cinema, spa, gym, lagoon views. Ultimate luxury."
    },
    // OFFICES
    {
      id: 9,
      title: "Open Plan Office Space",
      type: "rent",
      category: "office",
      price: 8000000,
      location: "Victoria Island, Lagos",
      area: 250,
      parking: 15,
      images: officeImgs,
      description: "Modern office with open floor plan, high-speed internet, AC, backup power, elevator, ample parking."
    },
    {
      id: 10,
      title: "Executive Office Suite",
      type: "rent",
      category: "office",
      price: 15000000,
      location: "Ikoyi, Lagos",
      area: 400,
      parking: 25,
      images: officeImgs,
      description: "Premium office: private offices, boardroom, reception, pantry, waterfront views. Fully furnished."
    },
    {
      id: 11,
      title: "Co-Working Space",
      type: "rent",
      category: "office",
      price: 3500000,
      location: "Yaba, Lagos",
      area: 150,
      parking: 8,
      images: officeImgs,
      description: "Flexible co-working: hot desks, meeting rooms, high-speed WiFi, printing. Ideal for startups."
    },
    // CONTENT STUDIOS
    {
      id: 12,
      title: "Professional Content Studio",
      type: "rent",
      category: "content-studio",
      price: 5000000,
      location: "Lekki Phase 1, Lagos",
      area: 180,
      images: studioImgs,
      description: "Fully equipped studio: green screen, pro lighting, 4K cameras, audio booth, editing suite, makeup room."
    },
    {
      id: 13,
      title: "Multi-Purpose Production Studio",
      type: "rent",
      category: "content-studio",
      price: 8500000,
      location: "Ikeja, Lagos",
      area: 300,
      images: studioImgs,
      description: "Premium studio: multiple filming areas, podcast studio, photography section, sound booth, control room."
    },
    // CONFERENCE CENTERS
    {
      id: 14,
      title: "Executive Conference Center",
      type: "rent",
      category: "conference",
      price: 2500000,
      location: "Victoria Island, Lagos",
      area: 500,
      capacity: 200,
      images: confImgs,
      description: "State-of-the-art facility: main hall (200 cap), breakout rooms, AV equipment, WiFi, catering, VIP lounge."
    },
    {
      id: 15,
      title: "Grand Event & Seminar Hall",
      type: "rent",
      category: "conference",
      price: 4000000,
      location: "Ikeja GRA, Lagos",
      area: 800,
      capacity: 500,
      images: confImgs,
      description: "Large hall for conferences/seminars. Stage, projectors, PA system, 500 seats, catering, parking."
    },
    {
      id: 16,
      title: "Training & Workshop Center",
      type: "rent",
      category: "conference",
      price: 1800000,
      location: "Lekki Phase 1, Lagos",
      area: 350,
      capacity: 100,
      images: confImgs,
      description: "Versatile training center: modular seating, whiteboards, projector, sound, WiFi, breakout spaces."
    },
    // LANDS
    {
      id: 17,
      title: "1,000sqm Residential Land",
      type: "sale",
      category: "land",
      price: 45000000,
      location: "Lekki Phase 1, Lagos",
      area: 1000,
      landUse: "Residential",
      images: landImgs,
      description: "Prime residential land. Dry with C of O, good road access, electricity, close to amenities."
    },
    {
      id: 18,
      title: "5,000sqm Commercial Land",
      type: "sale",
      category: "land",
      price: 250000000,
      location: "Victoria Island, Lagos",
      area: 5000,
      landUse: "Commercial",
      images: landImgs,
      description: "Strategic commercial land in VI. Perfect for high-rise development, hotel, or office complex."
    },
    {
      id: 19,
      title: "2 Plots Mixed-Use Land",
      type: "sale",
      category: "land",
      price: 35000000,
      location: "Ajah, Lekki",
      area: 1200,
      landUse: "Mixed Use",
      images: landImgs,
      description: "2 plots in fast-developing Ajah. Suitable for residential or commercial development."
    },
    {
      id: 20,
      title: "2,000sqm Event Center Land",
      type: "lease",
      category: "land",
      price: 5000000,
      location: "Ikeja, Lagos",
      area: 2000,
      landUse: "Commercial",
      leaseTerm: "10 years",
      images: landImgs,
      description: "Commercial land for lease. Perfect for event center, showroom, or warehouse. 10-year term."
    },
    {
      id: 21,
      title: "1 Acre Industrial Land",
      type: "lease",
      category: "land",
      price: 12000000,
      location: "Ikorodu, Lagos",
      area: 4047,
      landUse: "Industrial",
      leaseTerm: "15 years",
      images: landImgs,
      description: "Industrial land for manufacturing or warehousing. Good access roads. 15-year lease available."
    }
  ];

  const filteredProperties = properties.filter(p => {
    const typeMatch = filter === 'all' || p.type === filter;
    const catMatch = categoryFilter === 'all' || p.category === categoryFilter;
    return typeMatch && catMatch;
  });

  const formatPrice = (price, type) => {
    if (type === 'sale') return `₦${(price / 1000000).toFixed(1)}M`;
    if (type === 'lease') return `₦${(price / 1000000).toFixed(2)}M/lease`;
    return `₦${(price / 1000000).toFixed(2)}M/year`;
  };

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'apartment', label: 'Apartments' },
    { value: 'house', label: 'Houses' },
    { value: 'studio', label: 'Studios' },
    { value: 'penthouse', label: 'Penthouses' },
    { value: 'office', label: 'Offices' },
    { value: 'content-studio', label: 'Content Studios' },
    { value: 'conference', label: 'Conference Centers' },
    { value: 'land', label: 'Land' }
  ];

  const openPropertyModal = (property) => {
    setSelectedProperty(property);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProperty(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProperty) {
      setCurrentImageIndex((prev) => 
        prev === selectedProperty.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProperty) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProperty.images.length - 1 : prev - 1
      );
    }
  };

  const getCategoryIcon = (cat) => {
    if (cat === 'office') return <Building2 className="w-4 h-4" />;
    if (cat === 'content-studio') return <Camera className="w-4 h-4" />;
    if (cat === 'conference') return <Users className="w-4 h-4" />;
    if (cat === 'land') return <Trees className="w-4 h-4" />;
    return <Home className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          {/* <h1 className="text-4xl font-bold text-gray-900 mb-2">Lagos Property Listings</h1> */}
          <h1 className="text-green-900 font-bold mb-2 ">Find your perfect property in Lagos, Nigeria</h1>
          <p className="text-sm text-gray-500 mt-1">Showing {filteredProperties.length} properties</p>
        </div>

        {/* Type Filters */}
        <div className="flex gap-4 mb-4 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-lg font-medium transition ${
              filter === 'all' ? 'bg-green-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            All ({properties.length})
          </button>
          <button
            onClick={() => setFilter('sale')}
            className={`px-6 py-2 rounded-lg font-medium transition ${
              filter === 'sale' ? 'bg-green-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            For Sale ({properties.filter(p => p.type === 'sale').length})
          </button>
          <button
            onClick={() => setFilter('rent')}
            className={`px-6 py-2 rounded-lg font-medium transition ${
              filter === 'rent' ? 'bg-green-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            For Rent ({properties.filter(p => p.type === 'rent').length})
          </button>
          <button
            onClick={() => setFilter('lease')}
            className={`px-6 py-2 rounded-lg font-medium transition ${
              filter === 'lease' ? 'bg-green-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            For Lease ({properties.filter(p => p.type === 'lease').length})
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setCategoryFilter(cat.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                categoryFilter === cat.value 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map(property => (
            <div
              key={property.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
              onClick={() => openPropertyModal(property)}
            >
              <div className="relative">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <span
                  className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${
                    property.type === 'sale' ? 'bg-green-600 text-white' :
                    property.type === 'rent' ? 'bg-orange-500 text-white' :
                    'bg-blue-600 text-white'
                  }`}
                >
                  For {property.type === 'sale' ? 'Sale' : property.type === 'rent' ? 'Rent' : 'Lease'}
                </span>
                <span className="absolute bottom-3 right-3 px-2 py-1 rounded-md text-xs font-semibold bg-black bg-opacity-60 text-white">
                  {property.images.length} Photos
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  {getCategoryIcon(property.category)}
                  <span className="text-xs text-gray-500 capitalize">{property.category.replace('-', ' ')}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>

                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                {property.bedrooms ? (
                  <div className="flex items-center gap-4 text-gray-700 mb-4 text-sm">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      <span>{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Home className="w-4 h-4 mr-1" />
                      <span>{property.area}sqm</span>
                    </div>
                  </div>
                ) : property.capacity ? (
                  <div className="flex items-center gap-4 text-gray-700 mb-4 text-sm">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{property.capacity} capacity</span>
                    </div>
                    <div className="flex items-center">
                      <Home className="w-4 h-4 mr-1" />
                      <span>{property.area}sqm</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-4 text-gray-700 mb-4 text-sm">
                    {property.landUse && (
                      <div className="flex items-center">
                        <Trees className="w-4 h-4 mr-1" />
                        <span>{property.landUse}</span>
                      </div>
                    )}
                    <div className="flex items-center">
                      <Home className="w-4 h-4 mr-1" />
                      <span>{property.area}sqm</span>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">
                      {formatPrice(property.price, property.type)}
                    </span>
                  </div>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No properties found</p>
          </div>
        )}
      </div>

      {/* Property Detail Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-4 border-b">
              <h2 className="text-2xl font-bold text-gray-900">{selectedProperty.title}</h2>
              <button onClick={closeModal} className="p-2 hover:bg-gray-100 rounded-full transition">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="relative">
              <img
                src={selectedProperty.images[currentImageIndex]}
                alt={`${selectedProperty.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-96 object-cover"
              />
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full transition"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full transition"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-60 text-white px-4 py-2 rounded-full text-sm">
                {currentImageIndex + 1} / {selectedProperty.images.length}
              </div>
            </div>

            <div className="flex gap-2 overflow-x-auto p-4 bg-gray-50">
              {selectedProperty.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer transition ${
                    idx === currentImageIndex ? 'ring-4 ring-green-600' : 'opacity-60 hover:opacity-100'
                  }`}
                />
              ))}
            </div>

            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    selectedProperty.type === 'sale' ? 'bg-green-600 text-white' :
                    selectedProperty.type === 'rent' ? 'bg-orange-500 text-white' :
                    'bg-blue-600 text-white'
                  }`}
                >
                  For {selectedProperty.type === 'sale' ? 'Sale' : selectedProperty.type === 'rent' ? 'Rent' : 'Lease'}
                </span>
                <span className="text-3xl font-bold text-gray-900">
                  {formatPrice(selectedProperty.price, selectedProperty.type)}
                </span>
              </div>

              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-lg">{selectedProperty.location}</span>
              </div>

              {selectedProperty.bedrooms && (
                <div className="flex items-center gap-6 text-gray-700 mb-6">
                  <div className="flex items-center">
                    <Bed className="w-5 h-5 mr-2" />
                    <span className="text-lg">{selectedProperty.bedrooms} Bedroom{selectedProperty.bedrooms > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-5 h-5 mr-2" />
                    <span className="text-lg">{selectedProperty.bathrooms} Bathroom{selectedProperty.bathrooms > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex items-center">
                    <Home className="w-5 h-5 mr-2" />
                    <span className="text-lg">{selectedProperty.area} sqm</span>
                  </div>
                </div>
              )}

              {selectedProperty.capacity && (
                <div className="flex items-center gap-6 text-gray-700 mb-6">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    <span className="text-lg">Capacity: {selectedProperty.capacity} people</span>
                  </div>
                  <div className="flex items-center">
                    <Home className="w-5 h-5 mr-2" />
                    <span className="text-lg">{selectedProperty.area} sqm</span>
                  </div>
                </div>
              )}

              {selectedProperty.landUse && (
                <div className="flex items-center gap-6 text-gray-700 mb-6">
                  <div className="flex items-center">
                    <Trees className="w-5 h-5 mr-2" />
                    <span className="text-lg">{selectedProperty.landUse}</span>
                  </div>
                  <div className="flex items-center">
                    <Home className="w-5 h-5 mr-2" />
                    <span className="text-lg">{selectedProperty.area} sqm</span>
                  </div>
                </div>
              )}

              {selectedProperty.leaseTerm && (
                <p className="text-lg text-gray-600 mb-4">
                  <strong>Lease Term:</strong> {selectedProperty.leaseTerm}
                </p>
              )}

              {selectedProperty.parking && (
                <p className="text-lg text-gray-600 mb-4">
                  <strong>Parking:</strong> {selectedProperty.parking} spaces
                </p>
              )}

              <div className="border-t pt-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-700 leading-relaxed">{selectedProperty.description}</p>
              </div>

              <div className="mt-6 flex gap-4">
                <button className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold">
                  Contact Agent
                </button>
                <button className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-semibold">
                  Schedule Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}