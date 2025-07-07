import { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { useCart } from '../../../context/CartContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const products = [
    {
        id: 31,
        name: 'Salchinuggets',
        description: 'Deliciosa combinación de salchichas empanizadas y nuggets de pollo. La mezcla perfecta para los amantes de los snacks.',
        price: 17.90,
        image: 'https://www.bembos.com.pe/media/catalog/product/s/a/salchinugget_1000x1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
    {
        id: 32,
        name: 'Salchipapa',
        description: 'Clásica combinación de papas fritas doradas y trozos de salchicha. Un snack tradicional que nunca falla. Disfrutalo con tu salsa favorita.',
        price: 10.90,
        image: 'https://www.bembos.com.pe/media/catalog/product/s/a/salchipapa_1000x1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
    {
        id: 33,
        name: 'Papas Fritas',
        description: 'Crujientes papas fritas cortadas en bastones, doradas a la perfección. El acompañamiento ideal para cualquier pedido.',
        price: 6.90,
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146464253.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
    {
        id: 34,
        name: 'Cheese Fingers',
        description: 'Deditos de queso mozzarella empanizados y fritos hasta quedar dorados.',
        price: 13.90,
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146464255.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
    {
        id: 35,
        name: 'Nuggets',
        description: 'Tiernos trozos de pollo empanizados y fritos hasta obtener un dorado perfecto. Ideales para compartir.',
        price: 12.90,
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146464256.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
    {
        id: 36,
        name: 'Nuggetspapa',
        description: 'Combinación ganadora de nuggets de pollo con papas fritas. El snack completo para satisfacer tu antojo.',
        price: 15.90,
        image: 'https://www.bembos.com.pe/media/catalog/product/n/u/nuggets_con_papas_1000x1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
];

const Snacks = () => {
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
            <h1 className="text-3xl font-bold mb-6 text-center">Snacks</h1>
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

export default Snacks;