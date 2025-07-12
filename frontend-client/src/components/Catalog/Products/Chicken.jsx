import { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { useCart } from '../../../context/CartContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const products = [
    {
        id: 1,
        name: 'Chicken Grill',
        description: 'Deliciosa pechuga de pollo a la parrilla con lechuga fresca, tomate y nuestra salsa especial',
        price: 17.90,
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146463868.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
    {
        id: 2,
        name: 'Bembroster Clásica',
        description: 'Crujiente filete de pollo empanizado con lechuga y mayonesa casera',
        price: 14.90,
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146464442.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
    {
        id: 3,
        name: 'Bembroster Tártara',
        description: 'Pollo empanizado con salsa tártara especial, lechuga y tomate',
        price: 16.90,
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146464443_1.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
    {
        id: 4,
        name: 'Bembroster Queso Tocino',
        description: 'Pollo empanizado con queso derretido, tocino crujiente y salsa especial',
        price: 17.90,
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146464446.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
];

const Chicken = () => {
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
            <h1 className="text-3xl font-bold mb-6 text-center">Pollo</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden transition hover:scale-105">
                        <div className="relative">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-64 object-contain bg-white"
                            />
                            <button
                                onClick={() => toggleFavorite(product.id)}
                                className="absolute top-4 right-4 text-red-500 hover:text-red-600 transition-colors duration-300"
                            >
                                {favorites.has(product.id) ? (
                                    <FaHeart className="w-6 h-6" />
                                ) : (
                                    <FaRegHeart className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                        <div className="p-6 text-center">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
                            <p className="text-xl font-bold text-gray-900 mb-4">S/ {product.price.toFixed(2)}</p>
                            <p className="text-gray-600 text-sm mb-6">{product.description}</p>
                            <button
                                onClick={() =>
                                    isAuthenticated
                                        ? addToCart(product)
                                        : window.location.href = "/login"
                                }
                                className="w-full bg-blue-800 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-900 transition duration-300"
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

export default Chicken;