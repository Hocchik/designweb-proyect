import { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { useCart } from '../../../context/CartContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const products = [
    {
        id: 5,
        name: 'Coca Cola 500 ml',
        description: 'Refresco carbonatado con el sabor original que todos conocen y aman. Perfecta para acompañar cualquier comida.',
        price: 5.00,
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146469602.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
    {
        id: 6,
        name: 'Coca Cola Sin Azúcar 500 ml',
        description: 'El mismo sabor clásico de Coca-Cola pero sin azúcar. Ideal para quienes buscan reducir su consumo de azúcar.',
        price: 5.00,
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146469603.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
    {
        id: 7,
        name: 'Inca Kola 500 ml',
        description: 'La bebida de sabor único y original del Perú, con su característico sabor a hierba luisa. El complemento perfecto para tu comida.',
        price: 5.00,
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146469604.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
    {
        id: 8,
        name: 'Inca kola Sin Azúcar 500 ml',
        description: 'El sabor único de Inca Kola en su versión sin azúcar. Disfruta del sabor nacional sin preocuparte.',
        price: 5.00,
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146469605.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
    {
        id: 9,
        name: 'Sprite 500 ml',
        description: 'Bebida refrescante con sabor a lima-limón. Clara, cristalina y burbujeante, perfecta para refrescarte.',
        price: 5.00,
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146469606.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
    {
        id: 10,
        name: 'Fanta 500ml',
        description: 'Refresco con delicioso sabor a naranja. Burbujeante y frutal, ideal para momentos divertidos.',
        price: 5.00,
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146469607.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
    {
        id: 11,
        name: 'Agua San Luis sin gas 625 ml',
        description: 'Agua natural purificada sin gas. Hidratación pura y refrescante para cualquier momento del día.',
        price: 4.00,
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146469608.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
];

const Drinks = () => {
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
            <h1 className="text-3xl font-bold mb-6 text-center">Bebidas</h1>
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

export default Drinks;