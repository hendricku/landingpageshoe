'use client';

import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.div
      className="flex justify-between items-center mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-white font-medium text-2xl">Lorem Ipsum</div>
      <button className="md:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
        </svg>
      </button>
      <div className="hidden md:flex items-center gap-4">
        <a href="#" className="text-gray-400 hover:text-white">New Arrivals</a>
        <a href="#" className="text-gray-400 hover:text-white">Men</a>
        <a href="#" className="text-gray-400 hover:text-white">Women</a>
        <a href="#" className="text-gray-400 hover:text-white">Kids</a>
        <motion.button
          className="bg-white text-black px-4 py-2 rounded-full font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Shop Now
        </motion.button>
        <button className="text-gray-400 hover:text-white flex items-center gap-2">
          <span>Cart (0)</span>
        </button>
      </div>
    </motion.div>
  );
}