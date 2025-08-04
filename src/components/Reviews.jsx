import React from 'react';
import { Users, Target, Award, TrendingUp } from 'lucide-react';
import statsImage from '../assets/stats.jpg'; // ✅ Make sure this path matches your folder structure

const AgencyStats = () => {
  const stats = [
    {
      icon: <Users className="w-10 h-10 text-white" />,
      number: "20+",
      label: "Team Members",
      bg: "bg-gradient-to-br from-blue-500 to-blue-700",
    },
    {
      icon: <Target className="w-10 h-10 text-white" />,
      number: "100+",
      label: "Projects Delivered",
      bg: "bg-gradient-to-br from-purple-500 to-purple-700",
    },
    {
      icon: <Award className="w-10 h-10 text-white" />,
      number: "99%",
      label: "Client Satisfaction",
      bg: "bg-gradient-to-br from-pink-500 to-pink-700",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-white" />,
      number: "24/7",
      label: "Available",
      bg: "bg-gradient-to-br from-indigo-500 to-indigo-700",
    }
  ];

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Background image from local assets */}
      <div className="absolute inset-0">
        <img
          src={statsImage}
          alt="Agency Team"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 z-10">
        {/* Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Building <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Digital Excellence</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At GOTBAE, we blend creativity with technology to drive measurable results. Our team of visionaries, engineers, and designers help brands grow, innovate, and connect with impact.
          </p>
        </div>

        {/* Stats Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`${stat.bg} text-white p-6 rounded-2xl shadow-xl text-center hover:scale-105 transition-all duration-500`}
            >
              <div className="mb-3 flex justify-center">{stat.icon}</div>
              <div className="text-3xl font-bold">{stat.number}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgencyStats;
