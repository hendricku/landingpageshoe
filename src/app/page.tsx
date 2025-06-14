'use client';

import { motion } from 'framer-motion';

import ProductGrid from './components/ProductGrid';
import Navbar from './components/Navbar';

export default function ShoeLandingPage() {
  return (
    <div className="min-h-screen bg-[#000000] relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(50px,1fr))] grid-rows-[repeat(auto-fill,minmax(50px,1fr))] opacity-10">
        {[...Array(1000)].map((_, i) => (
          <div key={i} className="border border-gray-500"></div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <Navbar />

        {/* Hero Section */}
        <div className="mt-8 md:mt-16">
          <motion.div
            className="text-gray-400 text-sm mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            PREMIUM COLLECTION
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <motion.h1
                className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                Step into<br />Luxury & Style
              </motion.h1>
              <motion.p
                className="text-gray-400 text-lg md:text-xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Discover our exclusive collection of<br />premium footwear for every occasion
              </motion.p>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for shoes..."
                    className="w-full bg-[#1a1a1a] text-white px-4 py-3 rounded-lg pl-10"
                  />
                </div>
                <div className="flex gap-4 mt-4 overflow-x-auto md:overflow-visible">
                  {["All", "Sneakers", "Boots", "Sports", "Casual"].map((label, index) => (
                    <motion.button
                      key={label}
                      className={`px-4 py-2 rounded-full whitespace-nowrap ${
                        label === "All" ? "bg-[#1a1a1a] text-white" : "text-gray-400 hover:text-white"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Image section (desktop only) */}
            <motion.div
              className="hidden md:flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src="/nike.jpg"
                alt="Nike Shoe"
                className="w-full h-[500px] object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>

        {/* Product Grid Section */}
        <motion.div
          className="mt-8 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ProductGrid />
        </motion.div>
      </div>
    </div>
  );
}
  