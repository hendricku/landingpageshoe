import Image from "next/image";
import ProductGrid from './components/ProductGrid';


export default function ShoeLandingPage() {
  return (
    <div className="min-h-screen bg-[#000000] relative">
      {/* Grid background */}
      <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(50px,1fr))] grid-rows-[repeat(auto-fill,minmax(50px,1fr))] opacity-10">
        {[...Array(1000)].map((_, i) => (
          <div key={i} className="border border-gray-500"></div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-white font-medium text-2xl">Lorem Ipsum</div>
          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
            </svg>
          </button>
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-white">New Arrivals</a>
            <a href="#" className="text-gray-400 hover:text-white">Men</a>
            <a href="#" className="text-gray-400 hover:text-white">Women</a>
            <a href="#" className="text-gray-400 hover:text-white">Kids</a>
            <button className="bg-white text-black px-4 py-2 rounded-full font-medium">Shop Now</button>
            <button className="text-gray-400 hover:text-white flex items-center gap-2">
              <span>Cart (0)</span>
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="mt-8 md:mt-16">
          <div className="text-gray-400 text-sm mb-4">PREMIUM COLLECTION</div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6">
                Step into<br />Luxury & Style
              </h1>
              <p className="text-gray-400 text-lg md:text-xl">
                Discover our exclusive collection of<br />premium footwear for every occasion
              </p>
              <div className="mt-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for shoes..."
                    className="w-full bg-[#1a1a1a] text-white px-4 py-3 rounded-lg pl-10"
                  />
                </div>
                <div className="flex gap-4 mt-4 overflow-x-auto md:overflow-visible">
                  <button className="bg-[#1a1a1a] text-white px-4 py-2 rounded-full whitespace-nowrap">All</button>
                  <button className="text-gray-400 hover:text-white px-4 py-2 whitespace-nowrap">Sneakers</button>
                  <button className="text-gray-400 hover:text-white px-4 py-2 whitespace-nowrap">Boots</button>
                  <button className="text-gray-400 hover:text-white px-4 py-2 whitespace-nowrap">Sports</button>
                  <button className="text-gray-400 hover:text-white px-4 py-2 whitespace-nowrap">Casual</button>
                </div>
              </div>
            </div>
            {/* Image placeholder only shown on desktop */}
            <div className="hidden md:flex items-center justify-center">
              <img
                src="/nike.jpg"
                alt="Nike Shoe"
                className="w-full h-[500px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
          
        {/* Product Grid Section */}
        <div className="mt-8 md:mt-16">
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}

