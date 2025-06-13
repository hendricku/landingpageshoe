import Image from 'next/image';
import { Product } from '@/types';

// Updated shoe product list
const showProducts: Product[] = [
  {
    id: '1',
    name: 'Nike Air Max 270',
    price: 159.99,
    image: '/nikeair.jpg',
    isFeatured: true,
    isFree: false
  },
  {
    id: '2',
    name: 'Adidas Ultraboost',
    price: 180.0,
    image: '/Adidas.jpg',
    isFeatured: false,
    isFree: false
  },
  {
    id: '3',
    name: 'Converse Chuck Taylor',
    price: 75.0,
    image: '/Converse.jpg',
    isFeatured: false,
    isFree: true
  }
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-black p-6">
      {showProducts.map((product) => (
        <div
          key={product.id}
          className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
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
              {/* {product.isFree && <span className="text-green-400 font-medium">Free</span>} */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
