import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Code, Smartphone, Globe, Search, Cloud, BarChart, Star, ArrowRight, Zap } from 'lucide-react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const navigate = useNavigate();

  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "LLM & Chatbots",
      description: "AI-powered chatbots and LLM solutions that streamline customer service and automate workflows.",
      overlayDesc: "We build cutting-edge AI assistants and chatbots using GPT, LangChain, and OpenAI API for seamless interactions and automation.",
      gradient: "from-blue-500 to-cyan-500",
      bgPattern: "bg-gradient-to-br from-blue-50 to-cyan-50"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Grow your online presence with data-driven marketing campaigns tailored to your audience.",
      overlayDesc: "From SEO to PPC and email marketing, we use data and creativity to drive ROI-focused digital campaigns.",
      gradient: "from-purple-500 to-pink-500",
      bgPattern: "bg-gradient-to-br from-purple-50 to-pink-50"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Social Media Marketing",
      description: "Strategic social media management that engages your audience and builds brand loyalty.",
      overlayDesc: "We create scroll-stopping content and manage your social presence on platforms like Instagram, Facebook, LinkedIn, and TikTok.",
      gradient: "from-green-500 to-emerald-500",
      bgPattern: "bg-gradient-to-br from-green-50 to-emerald-50"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Business Solutions",
      description: "Tailored SaaS and enterprise tech solutions to streamline business processes and maximize productivity.",
      overlayDesc: "From CRMs to custom dashboards, we design and implement robust digital solutions to solve complex business problems.",
      gradient: "from-orange-500 to-red-500",
      bgPattern: "bg-gradient-to-br from-orange-50 to-red-50"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Responsive, fast, and stunning websites that convert and perform flawlessly across all devices.",
      overlayDesc: "We build pixel-perfect websites using React, Next.js, or WordPress that are SEO-optimized and scalable.",
      gradient: "from-indigo-500 to-purple-500",
      bgPattern: "bg-gradient-to-br from-indigo-50 to-purple-50"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "App Development",
      description: "Cross-platform and native mobile apps designed for usability and built for performance.",
      overlayDesc: "iOS and Android app development with Flutter, React Native or native tools, tailored to your business goals.",
      gradient: "from-teal-500 to-blue-500",
      bgPattern: "bg-gradient-to-br from-teal-50 to-blue-50"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden transition-all duration-1000">
      {/* Background glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We craft tech-driven solutions that drive measurable results and position your brand for growth.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative group ${service.bgPattern} rounded-3xl p-8 hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-6 hover:scale-105 cursor-pointer overflow-hidden border border-white/50 backdrop-blur-sm`}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Hover Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-all duration-700 rounded-3xl`}></div>

              {/* Glow decor */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200"></div>

              {/* Card content */}
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl mb-6 text-white`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <button className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2`}>
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Hover Overlay with description */}
              {hoveredService === index && (
                <div className={`absolute inset-0 z-20 bg-gradient-to-br ${service.gradient} bg-opacity-95 text-white rounded-3xl p-8 flex flex-col justify-center items-center backdrop-blur-md`}>
                  <div className="text-center max-w-sm">
                    <blockquote className="text-lg italic mb-6">"{service.overlayDesc}"</blockquote>

                    <div className="flex flex-col gap-3">
                      <Link to="/projects">
                        <button className="bg-white/20 text-white px-6 py-2 rounded-lg hover:bg-white/30 border border-white/30">
                          View Portfolio
                        </button>
                      </Link>
                      <button
                        onClick={() => navigate('/', { state: { scrollToContact: true } })}
                        className="bg-white text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-100 font-semibold"
                      >
                        Schedule Consultation
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 backdrop-blur-lg rounded-3xl shadow-xl p-8 max-w-4xl mx-auto border border-white/50">
            <h3 className="text-3xl font-bold text-cyan-50 mb-4">Let’s Bring Your Vision to Life</h3>
            <p className="text-xl text-zinc-100 mb-8">
              Our experts are ready to guide your journey. Whether it’s an idea or a full-fledged product.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/projects">
                <button className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600">
                  See Our Projects
                </button>
              </Link>
              <button
                onClick={() => navigate('/', { state: { scrollToContact: true } })}
                className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600"
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
