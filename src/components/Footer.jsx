import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white pt-32 pb-8 px-6 overflow-hidden">
      {/* Wavy Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16 transform transition-all duration-1000 hover:scale-105"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
              82.39-16.72,168.19-17.73,250.45-.39C823.78,31,
              906.67,72,985.66,92.83c70.05,18.48,
              146.53,26.09,214.34,3V0H0V27.35A600.21,
              600.21,0,0,0,321.39,56.44Z"
            fill="#f9fafb"
          />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 z-10 relative">
        {/* Logo & About */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <img src={logo} alt="GotBae Logo" className="w-12 h-12 rounded-full shadow-lg" />
            <div>
              <h3 className="text-xl font-bold">GOTBAE</h3>
              <p className="text-sm text-gray-400">Digital Solutions</p>
            </div>
          </div>
          <p className="text-gray-400 mb-6">
            Transforming businesses through innovative digital solutions. Your success is our mission.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/company/gotbae-ltd/posts/?feedView=all" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/gotbaetd/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://x.com/Gotbaeltd" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61567688457845&locale=en_GB" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-3">
            <li><Link to="/services?service=web" className="text-gray-400 hover:text-white">Web Development</Link></li>
            <li><Link to="/services?service=app" className="text-gray-400 hover:text-white">App Development</Link></li>
            <li><Link to="/services?service=social" className="text-gray-400 hover:text-white">Social Media Marketing</Link></li>
            <li><Link to="/services?service=llm" className="text-gray-400 hover:text-white">LLMs & AI Chatbots</Link></li>
          </ul>
        </div>

        {/* Who We Are */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Who We Are</h4>
          <ul className="space-y-3">
            <li><Link to="/WhoWeAre" className="text-gray-400 hover:text-white">About Us</Link></li>
            <li><Link to="/WhoWeAre" className="text-gray-400 hover:text-white">Our Mission</Link></li>
            <li><Link to="/AboutUs" className="text-gray-400 hover:text-white">Our Story</Link></li>
          </ul>
        </div>

        {/* Projects */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Projects</h4>
          <ul className="space-y-3">
            <li><Link to="/Projects" className="text-gray-400 hover:text-white">Our Projects</Link></li>
            <li><Link to="/services" className="text-gray-400 hover:text-white">Our Services</Link></li>
            <li><Link to="/AboutUs" className="text-gray-400 hover:text-white">About Us</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-12 pt-8 border-t border-gray-800">
        <p className="text-gray-400">© 2024 GOTBAE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;