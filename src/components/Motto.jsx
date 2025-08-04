import React, { useEffect, useState } from 'react';
import motto1 from '../assets/motto.jpg';
import motto2 from '../assets/motto2.jpg';
import motto3 from '../assets/motto3.jpg';

const images = [motto1, motto2, motto3];

const MottoSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left: Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Empowering Innovation, Delivering Impact
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            At GotBae, we don’t just build — we inspire. Every pixel, every line of code is driven by passion and purpose.
          </p>
          <p className="text-md text-gray-500">
            Let’s turn bold ideas into real-world success stories — together.
          </p>
        </div>

        {/* Right: Image Slider */}
        <div className="lg:w-1/2 w-full">
          <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-xl">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Motto Slide ${index + 1}`}
                className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === current ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default MottoSection;
