import React, { useState } from 'react';
import { GALLERY_PHOTOS } from '../constants.js';
import asset from '../src/utils/assets';
import AnimatedViewer from '../components/AnimatedViewer';

const HomePage = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselImages = GALLERY_PHOTOS.slice(0, 10);
  const featuredCollections = [
    {
      title: 'Editorial Portraits',
      description: 'Intimate, story-driven sessions that celebrate personality.',
      stats: '25 shoots in 2025',
      image: GALLERY_PHOTOS[2],
    },
    {
      title: 'Destination Landscapes',
      description: 'Expeditions that turn natural light into fine art prints.',
      stats: '12 countries captured',
      image: GALLERY_PHOTOS[6],
    },
  ];

  const galleryHighlights = GALLERY_PHOTOS.slice(3, 9);

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section with White to Blue Gradient */}
      <section className="relative bg-gradient-to-br from-white via-blue-50 to-blue-100 overflow-hidden">
        {/* Glossy gradient overlays */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Radial glossy shine effect */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-white/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-radial from-blue-200/20 to-transparent rounded-full blur-3xl"></div>
          
          {/* Subtle glossy effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-blue-50/20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-16 sm:pt-20 md:pt-28 pb-16 sm:pb-20 md:pb-28">
          <div className="grid gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-[1fr,1fr] items-center">
            {/* Left Side - Images */}
            <div className="relative w-full max-w-3xl mx-auto order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <AnimatedViewer photos={carouselImages} interval={4500} height="620px" />
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2 text-gray-900">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-block px-4 py-2 rounded-full bg-blue-100/80 backdrop-blur-md border border-blue-200">
                  <p className="text-xs sm:text-sm font-semibold text-blue-700">✨ Jinette Ramos • Best Photographer in Allentown</p>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight flex items-center gap-3 sm:gap-4 flex-wrap">
                  <span>Storytelling</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Portraits</span>
                  <span className="inline-flex items-center gap-2 sm:gap-3">
                    <span>&</span>
                    <svg className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <rect x="4" y="7" width="16" height="12" rx="2" fill="currentColor"/>
                      <rect x="5" y="8" width="14" height="10" rx="1.5" fill="white" opacity="0.2"/>
                      <circle cx="12" cy="13" r="4" fill="currentColor"/>
                      <circle cx="12" cy="13" r="3" fill="white" opacity="0.2"/>
                      <circle cx="12" cy="13" r="1.5" fill="currentColor"/>
                      <rect x="9" y="4" width="6" height="3" rx="1" fill="currentColor"/>
                      <circle cx="17" cy="9" r="1" fill="white"/>
                      <circle cx="6" cy="10" r="1" fill="currentColor"/>
                      <circle cx="18" cy="10" r="1" fill="currentColor"/>
                    </svg>
                  </span>
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700">Cinematic Moments</h2>
              </div>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-lg">
                Hi, I'm Jinette Ramos, a portrait photographer, faith-filled creative, and proud mom of seven. I specialize in capturing families, expecting moms, newborns, couples, and seniors with a warm, timeless touch and editorial elegance.
              </p>
              
              <div className="flex gap-4 pt-6">
                <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
                  Book a Session
                </button>
                <button className="px-8 py-3 rounded-lg border-2 border-blue-300 text-blue-700 font-semibold hover:bg-blue-50 transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections Section with Layered Gradients */}
      <section id="portfolio" className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 sm:py-20 md:py-28 overflow-hidden">
        {/* Multiple Gradient Overlays with Different Opacities */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Dark gradient base */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-slate-900/70 to-black/80"></div>
          
          {/* Radial gradients with different opacities */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-purple-900/40 via-black/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-radial from-blue-900/30 via-black/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-radial from-slate-800/25 to-transparent rounded-full blur-3xl"></div>
          
          {/* Linear gradients at angles */}
          <div className="absolute inset-0 bg-gradient-to-45 from-black/10 via-transparent to-black/5"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 sm:gap-8 mb-12 sm:mb-14 md:mb-16">
            <div className="space-y-3">
              <p className="text-xs sm:text-sm uppercase tracking-[0.4em] text-white/70 font-medium">Featured Collections</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Curated Stories with Luminous Detail</h2>
            </div>
            <p className="text-sm sm:text-base text-white/80 max-w-lg leading-relaxed">
              Each commission is styled, art-directed, and retouched in house for a cohesive, gallery-worthy finish.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {featuredCollections.map((collection) => (
              <div
                key={collection.title}
                className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
              >
                <div className="relative h-96 overflow-hidden bg-gray-800">
                  <img
                    src={collection.image.fullSize || collection.image.src || collection.image.thumbnail}
                    alt={collection.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="rounded-2xl bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-md p-6 sm:p-7 shadow-2xl border border-white/30">
                    <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{collection.title}</h3>
                    <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">{collection.description}</p>
                    <div className="mt-5 flex items-center justify-between text-xs uppercase tracking-[0.35em] text-gray-600 font-medium">
                      <span>{collection.stats}</span>
                      <span className="flex items-center gap-2 text-gray-900 group-hover:translate-x-1 transition-transform">
                        Explore
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Highlights Section */}
      <section className="bg-white py-16 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 sm:gap-10 mb-14 sm:mb-16 md:mb-20">
            <div className="space-y-3 flex-1">
              <p className="text-xs sm:text-sm uppercase tracking-[0.4em] text-gray-500 font-medium">Gallery Highlights</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black flex items-center gap-3 flex-wrap">
                <span>A Kaleidoscope of Light</span>
                <img src={asset('/images/smileyicon.png')} alt="Smiley" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                <span>&amp; Emotion</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base max-w-xl text-gray-600 leading-relaxed lg:text-right">
              From candid lifestyle portraits to architectural silhouettes, explore the range of disciplines we bring to every commission.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {galleryHighlights.map((photo, idx) => (
              <article 
                key={photo.id} 
                className="group rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-72 overflow-hidden bg-gray-200">
                  <img
                    src={photo.src || photo.thumbnail}
                    alt={photo.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-115"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="relative p-5 sm:p-6 space-y-3">
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-500 font-medium">{photo.category}</p>
                  <h3 className="text-lg sm:text-xl font-semibold text-black group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-600 transition-all duration-300">
                    {photo.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                    {photo.description?.slice(0, 140) || 'Fine art photography crafted with passion and precision.'}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section with Gradient */}
      <section className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-16 sm:py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 text-center space-y-8 sm:space-y-10">
          <div className="space-y-4">
            <p className="text-xs sm:text-sm uppercase tracking-[0.4em] text-white/70 font-medium">My Vision</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Building a Photography Brand That Inspires
            </h2>
          </div>
          
          <p className="text-white/80 leading-relaxed text-base sm:text-lg max-w-3xl mx-auto">
            Through timeless, editorial-inspired imagery and a faith-centered approach, I aim to preserve memories that speak of love, legacy, and divine intention, while fostering a creative community rooted in encouragement, purpose, and light.
          </p>
          
          <div className="pt-6">
            <button className="px-10 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
              Let's Create Together
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
