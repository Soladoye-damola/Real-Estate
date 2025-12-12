import React from 'react';
import { Home, ShoppingCart, Users, Building2, Hammer, MapPin, Sparkles } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-blue-600 p-4 rounded-2xl shadow-2xl">
                <Home className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Welcome to <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">Ipade</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Africa's First Comprehensive Property & Construction Marketplace
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl">
          <div className="flex items-center gap-4 mb-6">
            <Sparkles className="w-8 h-8 text-orange-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Story</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Ipade is pioneering a revolution in Nigeria and across Africa. We are the <strong>first of our kind</strong> – a comprehensive platform that brings together everything you need for property and construction in one seamless experience.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our name "Ipade" means "meeting place" in Yoruba, reflecting our mission to connect buyers, sellers, builders, and skilled professionals in one trusted ecosystem.
          </p>
        </div>
      </div>

      {/* Services Grid with Images */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
          What We <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">Offer</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Property Listings */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-orange-400 transition-all hover:shadow-2xl">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600" 
                alt="Modern homes" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Property Listings</h3>
              <p className="text-gray-600 leading-relaxed">
                Browse thousands of verified properties for <strong>sale</strong>, <strong>rent</strong>, and <strong>lease</strong>. From apartments to commercial spaces, find your perfect match.
              </p>
            </div>
          </div>

          {/* Marketplace */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-400 transition-all hover:shadow-2xl">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600" 
                alt="Building materials marketplace" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Building Materials Marketplace</h3>
              <p className="text-gray-600 leading-relaxed">
                Shop for quality <strong>building materials</strong> and <strong>furniture</strong>. Connect directly with verified suppliers and get the best prices.
              </p>
            </div>
          </div>

          {/* Professionals */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-green-400 transition-all hover:shadow-2xl">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600" 
                alt="Skilled artisans and workers" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Find Professionals</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with skilled <strong>artisans</strong>, <strong>technicians</strong>, and <strong>engineers</strong>. Get your project done right with verified experts.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Problems We Solve */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl">
            <div className="flex items-center gap-4 mb-8">
              <Building2 className="w-8 h-8 text-orange-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Problems We Solve</h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Difficulty Finding Properties</h4>
                  <p className="text-gray-600">No more endless searching. We aggregate all available properties in one easy-to-navigate platform.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Trust & Verification Issues</h4>
                  <p className="text-gray-600">We verify all listings and professionals, ensuring you deal with legitimate sellers and skilled workers.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Sourcing Building Materials</h4>
                  <p className="text-gray-600">Find quality materials at competitive prices. Compare suppliers and make informed purchasing decisions.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Finding Skilled Professionals</h4>
                  <p className="text-gray-600">Connect with vetted artisans, technicians, and engineers. Read reviews and choose the best fit for your project.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section with Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1590603302524-2f6e3f2c1e3e?w=800" 
              alt="African construction and development" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Hammer className="w-8 h-8 text-orange-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Impact on Nigeria & Africa</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As the <strong>first comprehensive property and construction marketplace</strong> in Africa, Ipade is transforming how people buy, sell, rent, and build across the continent.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We leverage modern technology and the power of the internet to make property transactions transparent, secure, and accessible to everyone.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're a property owner, a buyer, a construction professional, or someone building their dream home, Ipade is your trusted partner every step of the way.
            </p>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-br from-orange-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join the <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">Revolution</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Experience the future of property and construction in Africa. Everything you need, all in one place.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-blue-700 transition-all shadow-xl hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}