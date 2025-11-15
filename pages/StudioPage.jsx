import React from 'react';
import asset from '../src/utils/assets';

const StudioPage = () => {
  const amenities = [
    { icon: '💡', title: 'Professional Lighting', description: 'State-of-the-art lighting equipment for perfect exposure and mood' },
    { icon: '🎨', title: 'Multiple Backdrops', description: 'Variety of backgrounds from minimalist to elaborate' },
    { icon: '❄️', title: 'Climate Controlled', description: 'Comfortable temperature year-round' },
    { icon: '🛋️', title: 'Comfortable Seating', description: 'Lounge area for clients to relax between shots' },
    { icon: '☕', title: 'Refreshments', description: 'Coffee, tea, and water available for guests' },
    { icon: '🎭', title: 'Makeup Station', description: 'Professional makeup artist services available' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold mb-4">Welcome to</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">The Studio</h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A light-filled, creative space designed for comfort and versatility. The perfect environment to bring your photography vision to life.
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80 md:h-96">
            <img
              src={asset('/images/Pictures/DSC00207.jpg')}
              alt="Studio overview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Studio Spaces Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Creative Spaces</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Versatile, professional studios designed to support portraits, commercial work, and creative shoots with elegant spaces and professional equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Studio Card */}
            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50">
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={asset('/images/Pictures/DSC00207.jpg')}
                    alt="Main studio"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-3 text-gray-900">Main Studio</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our primary shooting space features adjustable professional lighting systems and multiple backdrop options. Perfect for portrait sessions, headshots, and commercial photography.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Professional 5-point lighting system</li>
                    <li>✓ 8+ backdrop options</li>
                    <li>✓ Infinity cove background</li>
                    <li>✓ Props and styling accessories</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Natural Light Studio Card */}
            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50">
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={asset('/images/Pictures/DSC00790.jpg')}
                    alt="Natural light studio"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-3 text-gray-900">Natural Light Studio</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A dedicated space featuring large north-facing windows and professional reflectors. Ideal for soft, flattering natural light photography and lifestyle sessions.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Large north-facing windows</li>
                    <li>✓ Professional reflectors & diffusers</li>
                    <li>✓ Natural ambient light</li>
                    <li>✓ Flexible layout options</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Studio Amenities</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Everything you need for a comfortable, productive, and enjoyable photography session
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity) => (
              <div 
                key={amenity.title}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/50 text-center"
              >
                <div className="text-6xl mb-6 drop-shadow-lg">{amenity.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{amenity.title}</h3>
                <p className="text-gray-700 leading-relaxed">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-white/50">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What's Included</h2>
            <p className="text-gray-700">Every studio session comes equipped with professional tools and guidance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">⚙️</div>
              <p className="font-semibold text-gray-900 mb-2">Professional Equipment</p>
              <p className="text-sm text-gray-600">Top-tier cameras, lenses, and lighting</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">👗</div>
              <p className="font-semibold text-gray-900 mb-2">Wardrobe Guidance</p>
              <p className="text-sm text-gray-600">Expert advice on outfits and styling</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎨</div>
              <p className="font-semibold text-gray-900 mb-2">Full Retouching</p>
              <p className="text-sm text-gray-600">Professional editing for perfect results</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💾</div>
              <p className="font-semibold text-gray-900 mb-2">Digital Gallery</p>
              <p className="text-sm text-gray-600">Private online access to all photos</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-white/50 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Ready to Book?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Our studio packages are customizable to match your creative vision. Contact us today to discuss your photography needs.
          </p>
          <a
            href="/photo/contact"
            className="inline-block bg-blue-600 text-white font-bold py-3 px-12 rounded-lg hover:bg-blue-700 transition-colors duration-200 uppercase tracking-widest text-lg border-2 border-blue-600 hover:border-blue-700"
          >
            Book a Session
          </a>
        </div>
      </section>
    </div>
  );
};

export default StudioPage;

