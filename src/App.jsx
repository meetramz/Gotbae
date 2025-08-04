import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact.jsx';


import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Bot from "./components/GotbaeBot"
import FloatingWhatsApp from './components/FloatingWhatsapp'; 
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import Aboutus from './pages/Aboutus';
import Projects from './pages/Projects';
import ServicesPage from './pages/ServicesPage';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col justify-between">
        <Navigation />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/whoWeAre" element={<WhoWeAre />} />
            <Route path="/Aboutus" element={<Aboutus />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        <Bot />
        <FloatingWhatsApp /> 
      </div>
    </Router>
  );
}

export default App;
