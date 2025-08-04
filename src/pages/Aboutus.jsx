import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

import img1 from '../assets/story.jpg';
import img2 from '../assets/mission.jpg';
import img3 from '../assets/values.jpg';

const Aboutus = ({ onBack }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [curtainOpen, setCurtainOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setCurtainOpen(true), 100);
    setTimeout(() => setIsVisible(true), 800);
  }, []);

  const sections = [
    {
      title: 'Our Vision',
      description:
        "At GOTBAE, our vision is to empower businesses with innovative digital solutions that drive growth, foster creativity, and create lasting impact. We aspire to be a leading force in the digital landscape, helping organizations of all sizes achieve their goals through cutting-edge technology, exceptional design, and strategic expertise.",
      image: img1
    },
    {
      title: 'Our Mission',
      description:
        "At GOTBAE, our mission is to empower businesses of all sizes by delivering tailored digital solutions that drive measurable results. We are committed to helping our clients establish a strong online presence, optimize their operations, and achieve sustainable growth in an ever-changing digital landscape.",
      image: img2
    },
    {
      title: 'Our Values',
      description:
        "At GOTBAE, we value trust, innovation, and collaboration. Our work culture empowers individuals and celebrates teamwork, ensuring that every solution is driven by purpose and impact.",
      image: img3
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Curtain Animation */}
      <div className={`fixed inset-0 z-50 flex transition-all duration-1000 ${curtainOpen ? 'pointer-events-none' : ''}`}>
        <div className={`w-1/2 bg-gray-800 transition-transform duration-1000 ${curtainOpen ? '-translate-x-full' : 'translate-x-0'}`}></div>
        <div className={`w-1/2 bg-gray-900 transition-transform duration-1000 ${curtainOpen ? 'translate-x-full' : 'translate-x-0'}`}></div>
      </div>

      {/* Back Button */}
      <button
        onClick={onBack}
        className={`fixed top-6 left-6 z-40 bg-white text-gray-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-transform duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      {/* Section Blocks */}
      <section className="py-20">
        <div className="container mx-auto px-6 space-y-24">
          {sections.map((sec, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'} ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image Box with border and bg */}
              <div className="w-full md:w-1/2 bg-gray-200 p-4 rounded-lg relative">
                <img
                  src={sec.image}
                  alt={sec.title}
                  className="w-full h-80 object-cover rounded-lg border-b-8 border-r-8 border-gray-400 shadow-md"
                />
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">{sec.title}</h2>
                <p className="text-lg text-gray-700 leading-relaxed">{sec.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

  
    </div>
  );
};

export default Aboutus;
