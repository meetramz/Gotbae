import { ArrowRight } from 'lucide-react';
import React from 'react';
import banner from '../assets/Banner.jpg'; // 👈 ensure the path is correct

const HeroBanner = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      {/* Optional black overlay for text contrast */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Glowing background circles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse transition-all duration-1000"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000 transition-all duration-1000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000 transition-all duration-1000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="inline-block transform transition-all duration-700 hover:scale-110 hover:text-blue-300">
              Transform Your
            </span>
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent transform transition-all duration-700 hover:scale-110 hover:from-purple-400 hover:to-pink-400">
              Digital Presence
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed transform transition-all duration-500 hover:opacity-100 hover:scale-105 hover:text-purple-200">
            We create stunning websites, mobile apps, and digital solutions that drive results. 
            Your success is our mission.
          </p>

          {/* Only Get Started button */}
          <div className="flex justify-center mb-12">
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl flex items-center space-x-2 group"
            >
              <span className="transition-all duration-300">Get Quote</span>
              <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center transform transition-all duration-500 hover:scale-110 cursor-pointer group">
              <div className="text-4xl font-bold mb-2 transition-all duration-300 group-hover:text-blue-300">100+</div>
              <div className="text-gray-300 transition-all duration-300 group-hover:text-white">Projects Completed</div>
            </div>
            <div className="text-center transform transition-all duration-500 hover:scale-110 cursor-pointer group">
              <div className="text-4xl font-bold mb-2 transition-all duration-300 group-hover:text-purple-300">99%</div>
              <div className="text-gray-300 transition-all duration-300 group-hover:text-white">Client Satisfaction</div>
            </div>
            <div className="text-center transform transition-all duration-500 hover:scale-110 cursor-pointer group">
              <div className="text-4xl font-bold mb-2 transition-all duration-300 group-hover:text-indigo-300">24/7</div>
              <div className="text-gray-300 transition-all duration-300 group-hover:text-white">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
