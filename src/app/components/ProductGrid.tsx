'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProductGrid() {
  const router = useRouter();

  const products = [
    {
      id: '1',
      name: 'Nike Air Max',
      price: 139.99,
      image: '/nike.jpg',
      isFeatured: true,
      description: 'Revolutionary Air cushioning technology meets modern design. The Nike Air Max delivers superior comfort with its iconic visible Air unit and breathable mesh upper.',
      isFree: true
    },
    {
      id: '2',
      name: 'Adidas Ultraboost',
      price: 180.0,
      image: '/adidas.jpg',
      isFeatured: false,
      description: 'Experience endless energy with Adidas Ultraboost. Featuring responsive Boost cushioning and a Primeknit upper that adapts to your foot\'s movement.',
      isFree: false
    },
    {
      id: '3',
      name: 'Converse Chuck Taylor',
      price: 75.0,
      image: '/converse.jpg',
      isFeatured: false,
      description: 'A timeless classic that never goes out of style. The Chuck Taylor All-Star combines durability with iconic design for everyday versatility.',
      isFree: true
    },
    {
      id: '4',
      name: 'Puma RS-X',
      price: 110.0,
      image: '/puma.jpg',
      isFeatured: true,
      description: 'Embrace the chunky sneaker trend with the Puma RS-X. Features bold design elements and Running System technology for maximum comfort.',
      isFree: false
    },
    {
      id: '5',
      name: 'New Balance 574',
      price: 89.99,
      image: '/newbalance.jpg',
      isFeatured: false,
      description: 'Classic heritage design meets modern comfort. The New Balance 574 offers superior cushioning and stability for everyday wear.',
      isFree: true
    },
    {
      id: '6',
      name: 'Vans Old Skool',
      price: 65.0,
      image: '/vans.jpg',
      isFeatured: false,
      description: 'The iconic ,side stripe shoe that started it all. Features durable suede and canvas upper with padded collars for enhanced comfort.',
      isFree: true
    }
    // {
    //   id: '7',
    //   name: 'Reebok Classic',
    //   price: 80.0,
    //   image: '/reebok.jpg',
    //   isFeatured: false,
    //   description: 'A heritage-inspired design that stands the test of time. The Reebok Classic features soft leather upper and EVA midsole for lightweight cushioning.',
    //   isFree: true
    // }
  ];

  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <motion.div
          key={product.id}
          onClick={() => router.push(`/product/${product.id}`)}
          className="cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative w-full h-[400px] bg-black">
            {product.isFeatured && (
              <span className="absolute top-3 left-3 bg-white/10 px-3 py-1 text-xs text-white rounded-md z-10">
                FEATURED
              </span>
            )}
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white text-lg font-semibold">{product.name}</h3>
              <button className="text-purple-500 text-xl">♡</button>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">${product.price.toFixed(2)} value</span>
     
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
