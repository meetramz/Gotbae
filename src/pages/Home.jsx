// pages/Home.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import HeroBanner from '../components/HeroBanner';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Reviews from '../components/Reviews';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';
import Bot from "../components/GotbaeBot"

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToContact) {
      console.log("👀 Scroll triggered from state!");
      setTimeout(() => {
        const el = document.getElementById('contact');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.warn("❌ Contact section not found");
        }
      }, 200); // slight delay ensures DOM is ready
    }
  }, [location]);

  return (
    <>
      <HeroBanner />
      <Services />
      <AboutUs />
      <Reviews />
      <WhyChooseUs />
      <Contact />
    </>
  );
};

export default Home;
