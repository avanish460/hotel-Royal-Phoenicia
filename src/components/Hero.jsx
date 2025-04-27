import React, { useState, useEffect } from 'react';
import Banner1 from '../assets/hotelBanner1.png';
import Banner2 from '../assets/hotelBanner2.png';
import Circle from '../assets/circle-around.gif'

const banners = [Banner1, Banner2];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('left'); // Initial direction

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDirection(currentSlide === 0 ? 'left' : 'right'); // Determine entry direction
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
        setIsTransitioning(false);
      }, 1000); // Adjust duration to match CSS transition
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  const currentBanner = banners[currentSlide];

  return (
    <div className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-5000 ${
          isTransitioning
            ? `transform scale-100 translate-x-${direction === 'left' ? '-full' : 'full'} opacity-90`
            : 'transform scale-110 translate-x-0 opacity-100'
        }`}
        style={{ backgroundImage: `url(${currentBanner})` }}
      ></div>

      {/* Content Overlay */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif mb-4">
          Hotel <br /> Royal Phoenicia
        </h1>
        <p className="text-sm mb-8 text-gray-300">
         YOUR FAVOURITE PLACE. OUR FAMILY STORY.
        </p>
      </div>

        <div className="absolute bottom-3 left-14 z-30 text-gray-300 text-xs font-thin">
            <span>IMPORTANT <br /> INFO</span>
            
        </div>
      
      <div className="w-35 h-35 absolute top-125 left-2">
        <img src={Circle} alt="circle around" className="text-gray-400"/>
      </div>
    </div>
  );
}

export default Hero;