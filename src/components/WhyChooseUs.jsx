import { Shield, Clock, Users, Trophy, Zap, Heart } from 'lucide-react';
import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Trusted & Secure",
      description: "Your data and projects are protected with enterprise-grade security measures and confidentiality agreements."
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "On-Time Delivery",
      description: "We pride ourselves on meeting deadlines. 98% of our projects are delivered on or before the promised date."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Expert Team",
      description: "Our team consists of certified professionals with years of experience in cutting-edge technologies."
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: "Trust Worthy",
      description: "Recognized by industry leaders and awarded for excellence in digital innovation and client satisfaction."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Lightning Fast",
      description: "Optimized performance and quick turnaround times. We deliver results that exceed speed expectations."
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "24/7 Support",
      description: "Round-the-clock support and maintenance. We're always here when you need us, no matter the time."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white relative overflow-hidden transition-all duration-1000">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse transition-all duration-1000"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000 transition-all duration-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000 transition-all duration-1000"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose GOTBAE?
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            We're not just another digital agency. Here's what makes us different and why clients choose us again and again
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-cyan-50 text-gray-900 p-6 rounded-xl border border-gray-300 shadow-md transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 hover:bg-gradient-to-br hover:from-purple-700 hover:to-indigo-800 hover:text-white hover:border-transparent"
            >
              <div className="mb-4 text-purple-600 group-hover:text-white transition-all duration-500">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-all duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-700 group-hover:text-white transition-all duration-300">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
