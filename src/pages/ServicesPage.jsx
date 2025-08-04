import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  ArrowLeft, Code, Share2, Globe, Bot, MessageSquare, BarChart,
  Check, Star, Smartphone
} from 'lucide-react';

import bannerImg from '../assets/services.jpg';

const ServicesPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isVisible, setIsVisible] = useState(false);
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(0);

  // Service mapping for URL parameters
  const serviceMapping = {
    'web': 0,    // Web Development
    'social': 1, // Social Media Marketing
    'digital': 2, // Digital Marketing
    'llm': 3,    // LLMs & AI Solutions
    'chatbot': 4, // Chatbots & Automation
    'business': 5, // Business Solutions
    'app': 6,    // App Development
  };

  useEffect(() => {
    // Animations
    setTimeout(() => setCurtainOpen(true), 100);
    setTimeout(() => setIsVisible(true), 800);
    
    // Handle URL parameter for specific service
    const serviceParam = searchParams.get('service');
    if (serviceParam && serviceMapping.hasOwnProperty(serviceParam)) {
      setSelectedService(serviceMapping[serviceParam]);
      
      // Scroll to service details section after a delay to ensure it's rendered
      setTimeout(() => {
        const serviceDetailsSection = document.getElementById('service-details');
        if (serviceDetailsSection) {
          serviceDetailsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 1000);
    }
  }, [searchParams]);

  const services = [
    {
      id: 'web',
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      shortDesc: "Custom websites including SEO & eCommerce",
      fullDesc: "We create stunning, responsive websites that convert. Our services include SEO, WordPress, eCommerce, and CMS integration.",
      features: [
        "SEO Optimization",
        "WordPress Development",
        "E-commerce Integration",
        "Responsive Design",
        "CMS Integration"
      ],
      technologies: ["React", "Django", "WordPress", "Shopify"],
      gradient: "from-blue-500 to-cyan-500",
      whyBetter: [
        "Mobile-first design",
        "Speed-optimized code",
        "Built for conversions",
        "Secure & scalable"
      ]
    },
    {
      id: 'social',
      icon: <Share2 className="w-12 h-12" />,
      title: "Social Media Marketing",
      shortDesc: "Strategic campaigns for leads & awareness",
      fullDesc: "Grow your online presence with targeted social media strategies across platforms.",
      features: [
        "Lead Generation",
        "Content Creation",
        "Audience Targeting",
        "Ad Management"
      ],
      technologies: ["Facebook", "Instagram", "LinkedIn", "Canva"],
      gradient: "from-pink-500 to-rose-500",
      whyBetter: [
        "Platform expertise",
        "Conversion focused",
        "Real-time optimization"
      ]
    },
    {
      id: 'digital',
      icon: <Globe className="w-12 h-12" />,
      title: "Digital Marketing",
      shortDesc: "PPC, SEO & Email Campaigns",
      fullDesc: "Comprehensive marketing including Google Ads, SEO, and email automation.",
      features: [
        "PPC Ads",
        "Email Campaigns",
        "Conversion Optimization",
        "Retargeting"
      ],
      technologies: ["Google Ads", "SEMrush", "Mailchimp"],
      gradient: "from-green-500 to-emerald-500",
      whyBetter: [
        "Multi-channel focus",
        "ROI-driven strategies"
      ]
    },
    {
      id: 'llm',
      icon: <Bot className="w-12 h-12" />,
      title: "LLMs & AI Solutions",
      shortDesc: "Custom AI & ML automation",
      fullDesc: "We build smart systems using GPT, BERT, and TensorFlow to automate and scale.",
      features: [
        "Custom LLMs",
        "NLP & Chatbots",
        "ML Model Training",
        "Predictive Analytics"
      ],
      technologies: ["OpenAI", "Langchain", "Python"],
      gradient: "from-purple-500 to-indigo-500",
      whyBetter: [
        "Tailored AI models",
        "Secure & scalable"
      ]
    },
    {
      id: 'chatbot',
      icon: <MessageSquare className="w-12 h-12" />,
      title: "Chatbots & Automation",
      shortDesc: "24/7 support bots & workflows",
      fullDesc: "Boost engagement with smart chatbots on WhatsApp, websites, and social media.",
      features: [
        "AI Chatbots",
        "Lead Qualification",
        "CRM Integration",
        "Analytics"
      ],
      technologies: ["Dialogflow", "Twilio", "Facebook API"],
      gradient: "from-orange-500 to-red-500",
      whyBetter: [
        "Platform integration",
        "NLP-powered UX"
      ]
    },
    {
      id: 'business',
      icon: <BarChart className="w-12 h-12" />,
      title: "Business Solutions",
      shortDesc: "CRM, ERP & BI tools",
      fullDesc: "Optimize your business with custom CRMs, dashboards, and automation systems.",
      features: [
        "CRM Customization",
        "ERP Integration",
        "BI Dashboards"
      ],
      technologies: ["HubSpot", "Salesforce", "Tableau"],
      gradient: "from-teal-500 to-blue-500",
      whyBetter: [
        "Enterprise-grade tools",
        "Workflow automation"
      ]
    },
    {
      id: 'app',
      icon: <Smartphone className="w-12 h-12" />,
      title: "App Development",
      shortDesc: "iOS & Android native + cross-platform",
      fullDesc: "We develop intuitive and robust mobile apps using Flutter, React Native, and native SDKs for a seamless user experience across all devices.",
      features: [
        "iOS & Android Support",
        "Cross-platform Development",
        "Push Notifications",
        "App Store Deployment",
        "Secure APIs"
      ],
      technologies: ["Flutter", "React Native", "Swift", "Kotlin"],
      gradient: "from-yellow-500 to-orange-500",
      whyBetter: [
        "Fast & lightweight apps",
        "Cross-platform efficiency",
        "User-centric UI/UX",
        "Backend integration"
      ]
    }
  ];

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Curtain Animation */}
      <div className={`fixed inset-0 z-50 flex transition-all duration-1000 ${curtainOpen ? 'pointer-events-none' : ''}`}>
        <div className={`w-1/2 bg-indigo-900 transition-transform duration-1000 ${curtainOpen ? '-translate-x-full' : 'translate-x-0'}`}></div>
        <div className={`w-1/2 bg-purple-900 transition-transform duration-1000 ${curtainOpen ? 'translate-x-full' : 'translate-x-0'}`}></div>
      </div>

      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className={`fixed top-6 left-6 z-40 bg-white/90 text-gray-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-transform duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-4'}`}
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      {/* Hero Banner */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={bannerImg} alt="Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 via-purple-900/70 to-pink-900/80"></div>
        </div>
        <div className={`z-10 text-center text-white px-4 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl italic animate-pulse mb-4">Innovate. Integrate. Elevate.</p>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Digital solutions crafted to elevate your brand in a competitive landscape.
          </p>
        </div>
      </section>

      {/* Service Selector */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 overflow-x-auto py-4">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setSelectedService(index)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all hover:scale-110 ${
                  selectedService === index
                    ? `bg-gradient-to-r ${service.gradient} text-white shadow-lg`
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {service.icon}
                <span>{service.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section id="service-details" className="py-20 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${services[selectedService].gradient} rounded-3xl mb-6 text-white`}>
              {services[selectedService].icon}
            </div>
            <h2 className="text-4xl font-bold mb-4">{services[selectedService].title}</h2>
            <p className="text-gray-600 mb-6">{services[selectedService].fullDesc}</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Key Features</h3>
            <ul className="space-y-3">
              {services[selectedService].features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technologies */}
        <div className="container mx-auto px-4 mt-20">
          <h3 className="text-2xl font-semibold text-center mb-6">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {services[selectedService].technologies.map((tech, i) => (
              <span key={i} className={`px-4 py-2 rounded-full text-white bg-gradient-to-r ${services[selectedService].gradient}`}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Why Better */}
        <div className="container mx-auto px-4 mt-20">
          <h3 className="text-2xl font-semibold text-center mb-6">Why We're Better</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services[selectedService].whyBetter.map((point, i) => (
              <div key={i} className="flex items-start space-x-3 p-4 bg-gray-100 rounded-xl">
                <div className={`w-8 h-8 bg-gradient-to-r ${services[selectedService].gradient} rounded-full flex items-center justify-center`}>
                  <Star className="w-4 h-4 text-white" />
                </div>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;