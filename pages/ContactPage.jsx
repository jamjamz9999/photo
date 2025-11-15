import React, { useState } from 'react';

const ContactPage = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => {
      setStatus("Thank you! Your message has been sent. I'll get back to you soon!");
      e.target.reset();
      setTimeout(() => setStatus(''), 4000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100">
      {/* Hero Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Get In Touch</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Let's discuss your photography vision and create something beautiful together
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Two Column Layout */}
      <section className="py-8 md:py-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Contact Info, Qualifications, Social */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Information Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-white/50">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-blue-600">📋</span> Contact Info
              </h2>
              <div className="space-y-5">
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                  <a href="tel:+14842745444" className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors">
                    (484) 274-5444
                  </a>
                  <p className="text-xs text-gray-500 mt-1">Mon-Fri, 9am-5pm</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:info@jinetteramos.com" className="text-base font-bold text-gray-900 hover:text-blue-600 transition-colors break-all">
                    info@jinetteramos.com
                  </a>
                  <p className="text-xs text-gray-500 mt-1">Response within 24 hours</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Location</p>
                  <p className="text-lg font-bold text-gray-900">Allentown, Pennsylvania USA</p>
                  <p className="text-xs text-gray-500 mt-1">Available for travel</p>
                </div>
              </div>
            </div>

            {/* Qualifications Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-white/50">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-blue-600">⭐</span> Expertise
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Specializations</p>
                  <ul className="mt-2 space-y-1 text-gray-700">
                    <li className="text-sm">✓ Portrait Photography</li>
                    <li className="text-sm">✓ Family Sessions</li>
                    <li className="text-sm">✓ Engagement Photos</li>
                    <li className="text-sm">✓ Professional Headshots</li>
                    <li className="text-sm">✓ Landscape Photography</li>
                    <li className="text-sm">✓ Studio & Location Work</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mt-4">Services</p>
                  <ul className="mt-2 space-y-1 text-gray-700">
                    <li className="text-sm">✓ Photo Sessions</li>
                    <li className="text-sm">✓ High-Resolution Prints</li>
                    <li className="text-sm">✓ Digital Gallery</li>
                    <li className="text-sm">✓ Custom Packages</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-white/50">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-blue-600">🔗</span> Follow Me
              </h2>
              <div className="flex gap-4 flex-wrap">
                <a href="#instagram" className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 text-white rounded-lg hover:scale-110 transition-transform" title="Instagram">
                  <span className="text-xl">📸</span>
                </a>
                <a href="#facebook" className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg hover:scale-110 transition-transform" title="Facebook">
                  <span className="text-xl">f</span>
                </a>
                <a href="#twitter" className="inline-flex items-center justify-center w-12 h-12 bg-blue-400 text-white rounded-lg hover:scale-110 transition-transform" title="Twitter">
                  <span className="text-xl">𝕏</span>
                </a>
                <a href="#pinterest" className="inline-flex items-center justify-center w-12 h-12 bg-red-600 text-white rounded-lg hover:scale-110 transition-transform" title="Pinterest">
                  <span className="text-xl">📌</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form & Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-sm border border-white/50">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Let's Create Something Beautiful</h2>
              <p className="text-gray-600 mb-8">Share your vision and I'll get back to you within 24 hours</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white/50 focus:outline-none focus:border-blue-600 transition-colors text-base placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white/50 focus:outline-none focus:border-blue-600 transition-colors text-base placeholder-gray-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="(484) 274-5444"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white/50 focus:outline-none focus:border-blue-600 transition-colors text-base placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Session Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white/50 focus:outline-none focus:border-blue-600 transition-colors text-base"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Session Type *</label>
                  <select
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white/50 focus:outline-none focus:border-blue-600 transition-colors text-base"
                  >
                    <option value="">Select a session type...</option>
                    <option value="portrait">Portrait Photography</option>
                    <option value="family">Family Session</option>
                    <option value="engagement">Engagement Photos</option>
                    <option value="headshot">Professional Headshot</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                  <textarea
                    placeholder="Tell me about your vision, inspiration, and project details..."
                    rows={5}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white/50 focus:outline-none focus:border-blue-600 transition-colors text-base placeholder-gray-400 resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <button
                    type="submit"
                    className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-200 uppercase tracking-widest text-sm border-2 border-blue-600 hover:border-blue-700"
                  >
                    Book Me Now
                  </button>
                  {status && (
                    <p
                      className={`font-semibold text-sm ${
                        status.includes('Thank you') ? 'text-green-600' : 'text-blue-600'
                      }`}
                    >
                      {status}
                    </p>
                  )}
                </div>
              </form>
            </div>

            {/* Google Map Embed */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-white/50 overflow-hidden">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-blue-600">📍</span> Find Me Here
              </h2>
              <iframe
                width="100%"
                height="300"
                frameBorder="0"
                className="rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.7527853589706!2d-75.48652!3d40.60842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c4457db5f5c7c5%3A0x7c5b5b5b5b5b5b5b!2sAllentown%2C%20PA!5e0!3m2!1sen!2sus!4v1234567890"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Allentown, PA Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg p-8 md:p-12 shadow-sm border border-white/50 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Let's Tell Your Story</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Every moment is precious. Whether you're celebrating new life, family milestones, or capturing this chapter you're in, I'd be honored to create timeless images that tell your unique story.
          </p>
          <a 
            href="tel:+14842745444"
            className="inline-block bg-blue-600 text-white font-bold py-4 px-12 rounded-lg hover:bg-blue-700 transition-colors duration-200 uppercase tracking-widest text-lg border-2 border-blue-600 hover:border-blue-700"
          >
            Call Now: (484) 274-5444
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
