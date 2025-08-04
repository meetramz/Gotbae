import { useState, useEffect } from 'react';
import { Target, Heart, Lightbulb } from 'lucide-react';

import bannerImg from '../assets/blog.jpg';
import teamImg from '../assets/team.jpg';

const WhoWeAre = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [curtainOpen, setCurtainOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setCurtainOpen(true), 100);
    setTimeout(() => setIsVisible(true), 800);
  }, []);

  const teamStory = {
    title: "Team work",
    image: teamImg,
    story:
      "Our team started this journey with a shared belief: that technology should empower, not overwhelm. With combined experience in software development, digital strategy, and creative direction, they’ve built a team-first culture where innovation thrives and collaboration drives results. At the heart of everything they do is a commitment to people — clients, team members, and the communities they serve."
  };

  const missionValues = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description: "To empower businesses through innovative digital solutions that drive growth, enhance user experiences, and create lasting value in an ever-evolving digital landscape.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Our Values",
      description: "We believe in transparency, innovation, and putting our clients first. Every project is an opportunity to exceed expectations and build long-term partnerships.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Our Vision",
      description: "To be the leading digital agency that transforms ideas into reality, helping businesses thrive in the digital age through cutting-edge technology and creative excellence.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Curtain Animation */}
      <div className={`fixed inset-0 z-50 flex transition-all duration-1000 ${curtainOpen ? 'pointer-events-none' : ''}`}>
        <div className={`w-1/2 h-full bg-gradient-to-r from-blue-900 to-purple-900 transition-transform duration-1000 ${curtainOpen ? '-translate-x-full' : 'translate-x-0'}`} />
        <div className={`w-1/2 h-full bg-gradient-to-l from-purple-900 to-blue-900 transition-transform duration-1000 ${curtainOpen ? 'translate-x-full' : 'translate-x-0'}`} />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={bannerImg}
            alt="Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/70 to-indigo-900/80"></div>
        </div>
        <div className={`relative z-10 text-center text-white px-4 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-6xl md:text-8xl font-bold leading-tight font-serif">
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Who We Are</span>
          </h1>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <img
                src={teamStory.image}
                alt={teamStory.title}
                className="w-full h-96 object-cover rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">{teamStory.title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed font-serif">{teamStory.story}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Values, Vision Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionValues.map((item, index) => (
              <div
                key={index}
                className={`bg-fuchsia-50 backdrop-blur-lg rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-6 hover:scale-105 border border-white/50 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl mb-6 text-white`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
