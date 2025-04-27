import React, { useState, useEffect } from 'react';
import NumberButton from '../components/NumberButton';

// Import your room images
import RoomImage1 from '../assets/rPool.png';
import RoomImage2 from '../assets/rbed.png';
import RoomImage3 from '../assets/rDrawing.png';
import ArrowButton from '../assets/hoverArrow.svg';
import Button from '../components/Button';
import Card from '../components/Card';

const roomImages = [RoomImage1, RoomImage2, RoomImage3];

function RoomPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showIntroText, setShowIntroText] = useState(false);

  useEffect(() => {
    // Show intro text after 5 seconds
    const introTextTimeout = setTimeout(() => {
      setShowIntroText(true);
    }, 5000);

    // Set up image carousel interval
    const imageCarouselInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % roomImages.length);
    }, 4000); // Change image every 4 seconds

    return () => {
      clearTimeout(introTextTimeout);
      clearInterval(imageCarouselInterval);
    };
  }, []);

  return (
    <div>
        <div className="flex justify-center w-full h-60">
            <NumberButton number={"I"}/>
        </div>

        {/* Intro Text */}
        <div
        className={`text-center font-serif text-4xl p-5 z-20 transition-opacity duration-5000 ${
          showIntroText ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1 className="text-gray-600">
          The stay at Wellness & pool Hotel
        </h1>
        <h1 className="text-gray-500">
          Royal Phoenicia means enjoying every moment.
          <br />
          Relax. Find inspiration. Be fascinated.
        </h1>
       </div>
      
        <div className="text-center p-10 mt-10 mb-10">
          <Button className="border border-gray-500 text-gray-400 font-sans">
            <span className="p-3 text-xs">Hotel</span>
          </Button>
        </div>

        <div className="relative flex justify-center h-screen">
      {/* Image Carousel */}
      {roomImages.map((image, index) => (
        <div
          key={index}
          className={`absolute w-250 h-110 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
        </div>
      ))}
        <Card>
            <p>Favorite hotel</p>
            <br />
            <p>Business and Event Spaces</p>
            <br />
            <p>Diverse Dining Options</p>
            <br />
            <p>Multiple Swimming Pools</p>
            <br />
            <p>Family-Friendly Amenities</p>
        </Card>
    </div>
    </div>
    
  );
}

export default RoomPage;