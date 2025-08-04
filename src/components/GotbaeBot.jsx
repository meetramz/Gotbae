import { useState, useEffect, useRef } from 'react';
import { X, Bot, Send, ChevronDown, Settings, AlertTriangle } from 'lucide-react';
import React from 'react';

const GotbaeBot = () => {
  // No API keys needed in frontend anymore!
  const API_URL = 'https://golbaebot.vercel.app/api/chat'; // Your Vercel API endpoint
  
  const [showAI, setShowAI] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "👋 Hi! I'm your GOTBAE AI assistant. I can help with web development, app development, digital marketing, and other services we offer. How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiStatus, setApiStatus] = useState('unknown'); // 'working', 'failed', 'unknown'
  const messagesEndRef = useRef(null);
  
  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Smart fallback responses based on company services
  const getSmartResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Web Development responses
    if (message.includes('website') || message.includes('web development') || message.includes('web design')) {
      return "At GOTBAE, we create responsive, fast, and stunning websites that convert and perform flawlessly across all devices. Our web development services include custom design, e-commerce solutions, content management systems, and performance optimization. Would you like to discuss your website project in more detail?";
    }
    
    // App Development responses
    if (message.includes('app') || message.includes('mobile') || message.includes('application')) {
      return "Our app development team builds cross-platform and native mobile applications designed for usability and built for performance. We handle the entire process from concept to deployment and ongoing maintenance. What kind of app are you looking to develop?";
    }
    
    // Digital Marketing responses
    if (message.includes('marketing') || message.includes('seo') || message.includes('ads')) {
      return "GOTBAE offers comprehensive digital marketing services to grow your online presence with data-driven campaigns tailored to your audience. This includes SEO, PPC advertising, content marketing, and conversion optimization. How can we help boost your digital marketing efforts?";
    }
    
    // Social Media responses
    if (message.includes('social media') || message.includes('facebook') || message.includes('instagram') || message.includes('twitter')) {
      return "Our strategic social media management services help engage your audience and build brand loyalty. We handle content creation, community management, paid social campaigns, and analytics reporting. Are you looking to improve your social media presence?";
    }
    
    // Chatbot/LLM responses
    if (message.includes('chatbot') || message.includes('llm') || message.includes('ai assistant') || message.includes('artificial intelligence')) {
      return "We develop AI-powered chatbots and LLM solutions that streamline customer service and automate workflows. Our solutions can integrate with your website, mobile apps, and business systems. Would you like to learn more about how AI can help your business?";
    }
    
    // Business Solutions
    if (message.includes('business') || message.includes('enterprise') || message.includes('saas') || message.includes('solution')) {
      return "GOTBAE provides tailored SaaS and enterprise technology solutions to streamline business processes and maximize productivity. Our business solutions include custom software development, workflow automation, and digital transformation consulting. What specific business challenges are you looking to solve?";
    }
    
    // Contact/Quote requests
    if (message.includes('contact') || message.includes('quote') || message.includes('price') || message.includes('cost')) {
      return "I'd be happy to connect you with our team for a personalized quote. You can reach us at info@gotbae.com, call +44 7470 089199, or I can collect some information now to help our team prepare a detailed proposal for you. What project are you interested in discussing?";
    }
    
    // About the company
    if (message.includes('about') || message.includes('company') || message.includes('gotbae')) {
      return "GOTBAE is a leading UK-based digital agency offering a comprehensive suite of services including Web Development, Digital Marketing, Business Solutions, e-Commerce Services, Graphic Designing, Social Media Management, Affiliate Marketing, and App Development. Our team combines creativity and technology to deliver solutions that drive real results. What else would you like to know about us?";
    }
    
    // Greeting responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Welcome to GOTBAE Digital Solutions. I'm your AI assistant here to help with information about our services, including web development, app development, digital marketing, AI chatbots, and business solutions. How can I assist you today?";
    }
    
    // Default response
    return "Thank you for your message. At GOTBAE, we offer a comprehensive range of digital services including web development, app development, digital marketing, social media management, AI solutions, and business technology. Could you please provide more details about what you're looking for so I can better assist you?";
  };

  // Call our backend API instead of OpenAI directly
  const callBackendAPI = async (userMessage) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage
        }),
      });

      if (!response.ok) {
        throw new Error(`API_ERROR_${response.status}`);
      }

      const data = await response.json();
      setApiStatus('working');
      
      // Backend API should return { reply: "message text" }
      return data.reply;
    } catch (error) {
      console.error('Backend API error:', error);
      setApiStatus('failed');
      throw error;
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setLoading(true);

    try {
      // Try backend API first
      const response = await callBackendAPI(currentInput);
      
      const botMessage = {
        sender: 'bot',
        text: response,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.log('Using smart fallback response');
      
      // Get smart fallback response
      const smartResponse = getSmartResponse(currentInput);
      
      const botMessage = {
        sender: 'bot',
        text: smartResponse,
      };

      setMessages((prev) => [...prev, botMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {showAI ? (
        <div className="w-80 h-[480px] bg-white rounded-xl shadow-2xl border border-purple-200 p-4 flex flex-col justify-between transition-all duration-500 overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center mb-2 pb-2 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center text-white">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  GotbaeBot
                </h3>
                <p className="text-xs text-gray-500">AI Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setShowAI(false)}
              className="text-gray-500 hover:text-gray-700 transition-all duration-300 hover:scale-110"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto space-y-3 mb-3 pr-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`text-sm p-3 rounded-lg max-w-[85%] ${
                  msg.sender === 'user'
                    ? 'bg-purple-100 ml-auto text-right text-gray-800'
                    : 'bg-gray-100 text-left text-gray-800'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="text-sm bg-gray-100 p-3 rounded-lg w-fit text-left">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* API Status Warning - Only shows if connection failed */}
          {apiStatus === 'failed' && (
            <div className="mb-3 p-2 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-2 text-xs text-yellow-800">
              <AlertTriangle className="w-4 h-4 flex-shrink-0 text-yellow-600" />
              <span>Connection to AI service failed. Using smart fallback responses.</span>
            </div>
          )}

          {/* Input */}
          <div className="flex space-x-2">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <Send className="w-4 h-4" />
              )}
            </button>
          </div>
          
          {/* Footer */}
          <div className="mt-3 pt-2 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500">
            <span>GOTBAE Digital Solutions</span>
            <span>v1.0</span>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setShowAI(true)}
          className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 group"
        >
          <Bot className="w-5 h-5" />
          <span>Chat with us</span>
        </button>
      )}
    </div>
  );
};

export default GotbaeBot;