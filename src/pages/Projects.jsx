import { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';

import a from '../assets/a.png';
import b from '../assets/b.png';
import c from '../assets/c.png';
import d from '../assets/d.jpg';
import e from '../assets/e.jpg';
import f from '../assets/f.jpg';

const Projects = ({ onBack }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [curtainOpen, setCurtainOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setCurtainOpen(true), 100);
    setTimeout(() => setIsVisible(true), 800);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Bc-ppc.com",
      image: c,
      description:
        "A PPC automation platform with budget allocation, real-time analytics, and ad performance optimization using AI.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      link: "https://bc-ppc.com"
    },
    {
      id: 2,
      title: "Dapeshawarde.com",
      image: b,
      description:
        "A sleek personal branding site with testimonials, service showcase, and interactive CTA sections.",
      technologies: ["Next.js", "Vercel", "Tailwind", "Mailchimp"],
      link: "https://dapeshawarde.com"
    },
    {
      id: 3,
      title: "Najebsupermarket.com",
      image: a,
      description:
        "Fully functional e-commerce supermarket platform with cart, coupons, secure checkout, and CMS.",
      technologies: ["Laravel", "Vue.js", "MySQL", "Stripe"],
      link: "https://najebsupermarket.com"
    },
    {
      id: 4,
      title: "AI Resume Screener",
      image: d,
      description:
        "LLM-powered tool that parses resumes and ranks candidates using OpenAI + LangChain logic.",
      technologies: ["LangChain", "OpenAI", "Streamlit", "Python"],
      link: "https://legaldocanalyzer-jdxrepts3b62mc8wmi7zg4.streamlit.app/"
    },
    {
      id: 5,
      title: "AI Trading Assistant",
      image: e,
      description:
        "Real-time stock insights with OpenAI + API integration for personalized trading recommendations.",
      technologies: ["FastAPI", "OpenAI", "Polygon.io", "LangChain"],
      link: "https://ai-customer-support-chatbot-zz6ph7hcgshjjhsnjwt3xn.streamlit.app/"
    },
    {
      id: 6,
      title: "Customer Support Chatbot",
      image: f,
      description:
        "Intelligent assistant that responds to customer queries with memory, real-time data, and context awareness.",
      technologies: ["LangChain", "Streamlit", "OpenAI", "Pinecone"],
      link: "https://ai-powered-pdf-search-assistant-mijmxyekxjk3vy2gc34duh.streamlit.app/"
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Curtain Animation */}
      <div className={`fixed inset-0 z-50 flex transition-all duration-1000 ${curtainOpen ? 'pointer-events-none' : ''}`}>
        <div className={`w-1/2 h-full bg-gradient-to-r from-green-900 to-blue-900 transition-all duration-1000 transform ${curtainOpen ? '-translate-x-full' : 'translate-x-0'}`}></div>
        <div className={`w-1/2 h-full bg-gradient-to-l from-blue-900 to-green-900 transition-all duration-1000 transform ${curtainOpen ? 'translate-x-full' : 'translate-x-0'}`}></div>
      </div>

      {/* Back Button */}
      <button
        onClick={onBack}
        className={`fixed top-6 left-6 z-40 bg-white/90 backdrop-blur-sm text-gray-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className={`relative z-10 text-center text-white px-4 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Our Projects</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Showcasing our greatest achievements and LLM success stories
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-6 hover:scale-105 group cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform transition-all duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 transform transition-all duration-300 group-hover:text-green-600" style={{ fontFamily: 'Georgia, serif' }}>
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 transform transition-all duration-300 group-hover:text-gray-800">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm transform transition-all duration-300 hover:bg-green-100 hover:text-green-700 hover:scale-110"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-start">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-green-600 hover:text-blue-600 transition-all duration-300 transform group-hover:scale-110">
                      <ExternalLink className="w-4 h-4" />
                      <span className="font-medium">View Live</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
