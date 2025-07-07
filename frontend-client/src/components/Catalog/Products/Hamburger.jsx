import { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { useCart } from '../../../context/CartContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const products = [
  {
    id: 12,
    name: 'Hamburguesa Clasica',
    description: 'La hamburguesa tradicional con carne a la parrilla, lechuga fresca, tomate y mayonesa. El sabor auténtico que nunca pasa de moda.',
    image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146463820.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg&dpr=2',
    price: 17.90,
  },
  {
    id: 13,
    name: 'Hamburguesa Extrema',
    description: 'Hamburguesa doble a la parrilla con queso edam, tocino, tomate, lechuga y mayonesa. Una explosión de sabores para los más exigentes.',
    image: 'https://www.bembos.com.pe/media/wysiwyg/bembos/home/productos_de_menu_extrema_384x320_2.png',
    price: 25.90,
  },
  {
    id: 14,
    name: 'Hamburguesa Cheese',
    description: 'Jugosa hamburguesa con doble queso cheddar derretido, cebolla y nuestra salsa especial. El paraíso de los amantes del queso.',
    image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146463725.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg&dpr=2',
    price: 19.90,
  },
  {
    id: 15,
    name: 'Hamburguesa Mexicana',
    description: 'Hamburguesa con guacamole, jalapeños, queso cheddar, tomate y lechuga. El auténtico sabor mexicano en cada mordida.',
    image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146469168.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg&dpr=2',
    price: 21.90,
  },
  {
    id: 16,
    name: 'Hamburguesa Hawaiana',
    description: 'Deliciosa combinación de carne a la parrilla, piña a la parrilla, queso derretido y salsa especial. Un toque tropical único.',
    image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146468692.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg&dpr=2',
    price: 21.90,
  },
  {
    id: 17,
    name: 'Hamburguesa Parrillera',
    description: 'Hamburguesa a la parrilla, chorizo a la parrilla, chimichurri, tomate, mayonesa y mostaza. El festín perfecto para los amantes de la parrilla.',
    image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146463859.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg&dpr=2',
    price: 23.90,
  },
  {
    id: 18,
    name: 'Hamburguesa Royal',
    description: 'Hamburguesa premium con huevo frito, queso cheddar, lechuga, tomate y nuestra salsa especial. Una combinación real de sabores.',
    image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146463856.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg&dpr=2',
    price: 20.90,
  },
  {
    id: 19,
    name: 'Hamburguesa La Churrita',
    description: 'Hamburguesa con chorizo criollo, papas al hilo, lechuga y salsa criolla. El auténtico sabor peruano en una hamburguesa.',
    image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146463854_1.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg&dpr=2',
    price: 21.90,
  },
];

const Hamburger = () => {
  const { isAuthenticated } = useAuth();
  const { addToCart } = useCart();
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = (productId) => {
    setFavorites(prevFavorites => {
      const newFavorites = new Set(prevFavorites);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Hamburguesas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden transition hover:scale-105">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain bg-white"
              />
              <button
                onClick={() => toggleFavorite(product.id)}
                className="absolute top-2 right-2 text-red-500 text-xl"
              >
                {favorites.has(product.id) ? <FaHeart /> : <FaRegHeart />}
              </button>
            </div>
            <div className="p-4 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
              <p className="text-xl font-bold text-gray-900 mb-4">S/ {product.price.toFixed(2)}</p>
              <p className="text-gray-500 text-sm mb-4">{product.description}</p>
              <button
                onClick={() =>
                  isAuthenticated
                    ? addToCart(product)
                    : window.location.href = "/login"
                }
                className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 w-full"
              >
                Agregar al pedido
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hamburger;