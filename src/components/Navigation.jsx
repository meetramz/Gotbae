import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
  const mobileMenuRef = useRef(null);

  const navItems = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'Web Development', path: '/services?service=web' },
        { name: 'Mobile Apps', path: '/services?service=app' },
        { name: 'Digital Marketing', path: '/services?service=digital' },
        { name: 'Social Media Marketing', path: '/services?service=social' },
        { name: 'Business Solutions', path: '/services?service=business' },
        { name: 'LLMs & AI Chatbots', path: '/services?service=llm' },
        { name: 'Chatbots & Automation', path: '/services?service=chatbot' },
      ],
    },
    {
      name: 'Who We Are',
      href: '/whoWeAre',
      dropdown: [
        { name: 'About Us', path: '/aboutus' },
        { name: 'Projects', path: '/projects' },
      ],
    },
    { name: 'Contact', href: '/contact' },
  ];

  const handleNavClick = (item) => {
    navigate(item.href);
    setIsOpen(false);
    window.scrollTo(0, 0); // Scroll to top on navigation
  };

  const handleSubItemClick = (path) => {
    navigate(path);
    setActiveDropdown(null);
    setIsOpen(false);
    window.scrollTo(0, 0); // Scroll to top on navigation
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo Left */}
          <Link to="/" className="flex items-center space-x-3 absolute left-0 top-1/2 transform -translate-y-1/2">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            <span className="text-2xl font-bold text-gray-800 tracking-wide hover:text-blue-600 transition-all duration-300">
              GOTBAE
            </span>
          </Link>

          {/* Centered Nav Items */}
          <div className="hidden md:flex space-x-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 transform hover:scale-105"
                >
                  <span className="font-semibold text-lg">{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </a>

                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48 z-50">
                    {item.dropdown.map((subItem) => {
                      const label = typeof subItem === 'string' ? subItem : subItem.name;
                      const path = typeof subItem === 'string' ? '/services' : subItem.path;
                      return (
                        <button
                          key={label}
                          onClick={() => handleSubItemClick(path)}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 hover:translate-x-1"
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Toggle Right */}
          <button
            className="md:hidden absolute right-0 top-1/2 transform -translate-y-1/2 transition-all duration-300 hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Items */}
        {isOpen && (
          <div 
            ref={mobileMenuRef}
            className="md:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto max-h-[calc(100vh-4rem)] pb-20"
          >
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.name} className="px-4">
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item);
                    }}
                    className="block py-3 text-gray-800 font-bold text-lg hover:text-blue-600 transition-all duration-300 transform hover:bg-blue-50 rounded-lg px-3"
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2 border-l-2 border-blue-200 pl-3 max-h-60 overflow-y-auto">
                      {item.dropdown.map((subItem) => {
                        const label = typeof subItem === 'string' ? subItem : subItem.name;
                        const path = typeof subItem === 'string' ? '/services' : subItem.path;
                        return (
                          <button
                            key={label}
                            onClick={() => handleSubItemClick(path)}
                            className="block w-full text-left py-2 px-3 text-gray-700 font-medium hover:text-blue-600 transition-all duration-300 hover:bg-blue-50 rounded-lg"
                          >
                            {label}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;