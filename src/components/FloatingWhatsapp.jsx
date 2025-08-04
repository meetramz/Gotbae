import React from 'react';
import whatsappLogo from '../assets/whatsapp.png'; 
const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <a
        href="https://wa.me/447470089199"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 rounded-full bg-green-500 shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <img
          src={whatsappLogo}
          alt="WhatsApp"
          className="w-9 h-9 object-contain"
        />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
