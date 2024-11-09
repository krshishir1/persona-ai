import React from 'react'
import logo from "../assets/logo.jpg";
import login from "../assets/login.png";

import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div>
      
      <header className="sticky top-0 w-full flex justify-center py-4">
      <div className="w-11/12 max-w-5xl px-8 py-3 flex justify-between items-center bg-white shadow-md rounded-2xl">
      
      <img src={logo} alt="Logo" className='h-10 w-auto'/>
      <nav className="flex items-center space-x-8">
      <Link to="/product" className="text-gray-600 hover:text-black font-medium">Our Product</Link>
      <Link to="/how-it-works" className="text-gray-600 hover:text-black font-medium">How it Works</Link>
      <Link to="/contact" className="text-gray-600 hover:text-black font-medium">Contact Us</Link>
      <Link to="/login" className='transition-transform duration-300 hover:scale-105'>
      <img src={login} alt="Logo" className="w-20 h-8"/>
      </Link>
      </nav>
      </div>
      </header>
    </div>
  )
}

export default Navbar
