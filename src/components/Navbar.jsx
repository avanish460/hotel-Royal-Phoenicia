import React, { useState } from 'react';
import Button from './Button'
import royalPhoeniciaLogo from '../assets/logo.svg'

function Navbar() {

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 backdrop-blur-md shadow-md ">
      <div className="mx-auto py-1">
        {/* Top Row: Menu Button, Logo, Booking Button (Desktop) */}
        <div className="flex items-center justify-between">
          {/* Menu Button */}
          <Button className="flex bg-sky-950 hover:bg-sky-900 text-white sm:ml-2">
            {/* Hamburger Icon and "Menu" Text */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-2 sm:size-4 md:size-5 lg:size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>  

            <span className="ml-1 text-[7px] sm:text-xs md:text-sm lg:text-sm">Menu</span>
          </Button>

          {/* Hotel Logo */}
          <div className="flex-grow flex justify-center">
            <span className="text-xs p-5 tracking-[.75em] text-white">2022</span>

            <a href="/" className="block">
            <img src={royalPhoeniciaLogo} alt="Royal Phoenicia logo" className="h-10 sm:h-10 md:h-12 lg:h-12 mt-2 sm:mt-2 md:mt-0 lg:mt-0"/>
            </a>
            
            <div className="flex justigy-center text-xs p-5 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            </div>

          </div>

          {/* Booking Button */}
          <Button className="flex bg-sky-950 hover:bg-sky-900 text-white sm:mr-2">
            <span className="mr-1 text-[7px] sm:text-xs md:text-sm lg:text-sm">Booking</span> 

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-2 sm:size-4 md:size-5 lg:size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
            </svg>

          </Button>
        </div>

        {/* Navigation Links Row (Desktop) */}
        <div className="border-t border-gray-400">
          <div className="flex justify-center space-x-5 sm:space-x-10 md:space-x-13 lg:space-x-15 text-[10px] sm:text-[10px] md:text-xs lg:text-xs p-2">
            <a href="/" className="text-gray-300 hover:text-gray-100">ROOMS</a>
            <a href="/rooms" className="text-gray-300 hover:text-gray-100">WELLNESS</a>
            <a href="/amenities" className="text-gray-300 hover:text-gray-100">GASTRO</a>
            <a href="/contact" className="text-gray-300 hover:text-gray-100">HOTEL</a>
            <a href="/contact" className="text-gray-300 hover:text-gray-100">EVENTS</a>
            <a href="/contact" className="text-gray-300 hover:text-gray-100">CONTACT</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-400"></div>
    </nav>
  );
}

export default Navbar;