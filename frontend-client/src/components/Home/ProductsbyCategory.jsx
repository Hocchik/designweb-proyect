import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const productosMasVendidos = [
    // Pollo
    {
        id: 1,
        name: 'Chicken Grill',
        price: 'S/ 17.90',
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146463868.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
    {
        id: 2,
        name: 'Bembroster Clásica',
        price: 'S/ 14.90',
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146464442.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },


    // Hamburguesas
    {
        id: 3,
        name: 'Hamburguesa Clasica',
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146463820.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg&dpr=2',
        price: 'S/. 17.90',
    },
    {
        id: 4,
        name: 'Hamburguesa Extrema',
        image: 'https://www.bembos.com.pe/media/wysiwyg/bembos/home/productos_de_menu_extrema_384x320_2.png',
        price: 'S/. 25.90',
    },


    // Helados
    {
        id: 5,
        name: 'McFlurry Oreo®',
        price: 'S/ 7.00',
        image: 'https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kpXMGerB/200/200/original?country=pe',
    },
    {
        id: 6,
        name: 'Super Cono Combinado',
        price: 'S/ 4.00',
        image: 'https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$supercono.png/200/200/original?country=pe',
    },
    {
        id: 7,
        name: 'McFlurry M&M',
        price: 'S/ 7.00',
        image: 'https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kpXA1VM3/200/200/original?country=pe',
    },

    // Snacks
    {
        id: 8,
        name: 'Salchinuggets',
        price: 'S/ 17.90',
        image: 'https://www.bembos.com.pe/media/catalog/product/s/a/salchinugget_1000x1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
    {
        id: 9,
        name: 'Salchipapa',
        price: 'S/ 10.90',
        image: 'https://www.bembos.com.pe/media/catalog/product/s/a/salchipapa_1000x1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
    {
        id: 10,
        name: 'Papas Fritas',
        price: 'S/ 6.90',
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146464253.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
    {
        id: 11,
        name: 'Cheese Fingers',
        price: 'S/ 13.90',
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146464255.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
    {
        id: 12,
        name: 'Nuggets',
        price: 'S/ 12.90',
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146464256.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
    {
        id: 13,
        name: 'Nuggetspapa',
        price: 'S/ 15.90',
        image: 'https://www.bembos.com.pe/media/catalog/product/n/u/nuggets_con_papas_1000x1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
    // Bebidas
    {
        id: 14,
        name: 'Coca Cola 500 ml',
        price: 'S/ 5.00',
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146469602.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },

    {
        id: 15,
        name: 'Inca Kola 500 ml',
        price: 'S/ 5.00',
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146469604.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
];


const BestSellers = () => {
    const navigate = useNavigate();
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Productos por categoría
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {productosMasVendidos.map((product) => (
                    <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden transition hover:scale-105 flex flex-col h-full">
                        <div className="relative">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-contain bg-white cursor-pointer"
                                loading="lazy"
                                onClick={() => {
                                    if (product.name.toLowerCase().includes('hamburguesa')) {
                                        navigate('/catalog/hamburger');
                                    } else if (product.name.toLowerCase().includes('chicken')) {
                                        navigate('/catalog/chicken');
                                    } else if (product.name.toLowerCase().includes('mcflurry') || product.name.toLowerCase().includes('helado') || product.name.toLowerCase().includes('cono')) {
                                        navigate('/catalog/icecream');
                                    } else if (product.name.toLowerCase().includes('coca') || product.name.toLowerCase().includes('inca')) {
                                        navigate('/catalog/drinks');
                                    } else if (product.name.toLowerCase().includes('salchi') || product.name.toLowerCase().includes('papa') || product.name.toLowerCase().includes('nugget') || product.name.toLowerCase().includes('cheese')) {
                                        navigate('/catalog/snacks');
                                    } else {
                                        navigate('/catalog');
                                    }
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                            />
                            <button
                                onClick={() => toggleFavorite(product.id)}
                                className="absolute top-2 right-2 text-red-500 text-xl"
                            >
                                {favorites.has(product.id) ? <FaHeart /> : <FaRegHeart />}
                            </button>
                        </div>
                        <div className="p-4 text-center flex flex-col flex-1">
                            <h2 className="font-semibold text-xl">{product.name}</h2>
                            <span className="text-black font-bold text-center">{product.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestSellers;
