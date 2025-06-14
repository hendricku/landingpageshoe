'use client';

import { useParams } from 'next/navigation';
import Navbar from '@/app/components/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion';

const products = [
  {
    id: '1',
    name: 'Nike Air Max',
    price: 139.99,
    image: '/nike.jpg',
    isFeatured: true,
    description: 'Revolutionary Air cushioning technology meets modern design. The Nike Air Max delivers superior comfort with its iconic visible Air unit and breathable mesh upper.'
  },
  {
    id: '2',
    name: 'Adidas Ultraboost',
    price: 180.0,
    image: '/adidas.jpg',
    description: 'Experience endless energy with Adidas Ultraboost. Featuring responsive Boost cushioning and a Primeknit upper that adapts to your foot\'s movement.'
  },
  {
    id: '3',
    name: 'Converse Chuck Taylor',
    price: 75.0,
    image: '/converse.jpg',
    description: 'A timeless classic that never goes out of style. The Chuck Taylor All-Star combines durability with iconic design for everyday versatility.'
  },
  {
    id: '4',
    name: 'Puma RS-X',
    price: 110.0,
    image: '/puma.jpg',
    description: 'Embrace the chunky sneaker trend with the Puma RS-X. Features bold design elements and Running System technology for maximum comfort.'
  },
  {
    id: '5',
    name: 'New Balance 574',
    price: 89.99,
    image: '/newbalance.jpg',
    description: 'Classic heritage design meets modern comfort. The New Balance 574 offers superior cushioning and stability for everyday wear.'
  },
  {
    id: '6',
    name: 'Vans Old Skool',
    price: 65.0,
    image: '/vans.jpg',
    description: 'The iconic side stripe shoe that started it all. Features durable suede and canvas upper with padded collars for enhanced comfort.'
  },
  {
    id: '7',
    name: 'Reebok Classic',
    price: 80.0,
    image: '/reebok.jpg',
    description: 'A heritage-inspired design that stands the test of time. The Reebok Classic features soft leather upper and EVA midsole for lightweight cushioning.'
  }
];

export default function ProductDetail() {
  const params = useParams();
  const id = params.id as string;
  
  // Find the product based on the ID
  const product = products.find(p => p.id === id) || products[0];

  return (
    <div className="min-h-screen bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Navbar />
        
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex items-center gap-2 text-gray-400 mb-8">
            <a href="/">Home</a> / 
            <span className="text-white">{product.name}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* Right side - Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-4xl font-bold text-white mb-4">{product.name}</h1>
              <p className="text-2xl text-white mb-8">${product.price.toFixed(2)}</p>
              <div className="mb-8">
                <h3 className="text-white font-medium mb-2">Description</h3>
                <p className="text-gray-400">{product.description}</p>
              </div>
              <motion.button
                className="w-full bg-white text-black py-3 rounded-lg font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Add to Cart
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}