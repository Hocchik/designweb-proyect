import React, { useRef, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const promosComidaRapida = [
    {
        id: 1,
        name: 'Hamburguesa Clasica',
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146463820.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg&dpr=2',
        price: 'S/. 17.90',
    },
    {
        id: 2,
        name: 'Hamburguesa Extrema',
        image: 'https://www.bembos.com.pe/media/wysiwyg/bembos/home/productos_de_menu_extrema_384x320_2.png',
        price: 'S/. 25.90',
    },
    {
        id: 3,
        name: 'Hamburguesa Cheese',
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146463725.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg&dpr=2',
        price: 'S/. 19.90',
    },
    {
        id: 4,
        name: 'Hamburguesa Mexicana',
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146469168.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg&dpr=2',
        price: 'S/. 21.90',
    },
    {
        id: 5,
        name: 'Hamburguesa Hawaiana',
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146468692.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg&dpr=2',
        price: 'S/. 21.90',
    },
    {
        id: 6,
        name: 'Hamburguesa Parrillera',
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146463859.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg&dpr=2',
        price: 'S/. 23.90',
    },
    {
        id: 7,
        name: 'Hamburguesa Royal',
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146463856.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg&dpr=2',
        price: 'S/. 20.90',
    },
    {
        id: 8,
        name: 'Hamburguesa La Churrita',
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146463854_1.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg&dpr=2',
        price: 'S/. 21.90',
    },

];

const Promos = () => {
    const carouselRef = useRef(null);
    const navigate = useNavigate();
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

    const scrollCarousel = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = direction === 'right' ? 400 : -400;
            carouselRef.current.scrollBy({
                top: 0,
                left: scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    const handleAddToCart = (product) => {
        console.log(`Añadido al carrito: ${product.name}`);
    };

    const handleProductClick = () => {
        navigate('/catalog/hamburger');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Productos más vendidos
            </h2>
            <div className="relative mt-0.5">
                {/* Botón anterior */}
                <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center px-2 py-2 cursor-pointer group"
                    onClick={() => scrollCarousel('left')}
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black hover:bg-gray-800/60">
                        <svg className="w-4 h-4 text-white" viewBox="0 0 6 10">
                            <path d="M5 1 1 5l4 4" stroke="currentColor" strokeWidth="2" fill="none" />
                        </svg>
                    </span>
                </button>

                {/* Carrusel de productos */}
                <div
                    ref={carouselRef}
                    className="flex overflow-x-auto whitespace-nowrap scroll-smooth px-12"
                >
                    {promosComidaRapida.map((product) => (
                        <div
                            key={product.id}
                            onClick={handleProductClick}
                            className="max-w-[300px] m-4 bg-white shadow-xl rounded-lg inline-block transition-transform transform hover:scale-105 cursor-pointer"
                        >
                            <div className="relative">
                                <img
                                    className="w-full h-64 object-contain bg-white rounded-t-lg"
                                    src={product.image}
                                    alt={product.name}
                                />
                                <button
                                    onClick={e => {
                                        e.stopPropagation();
                                        toggleFavorite(product.id);
                                    }}
                                    className="absolute top-2 right-2 text-red-500 text-xl"
                                >
                                    {favorites.has(product.id) ? <FaHeart /> : <FaRegHeart />}
                                </button>
                            </div>
                            <div className="p-4">
                                <h2 className="font-semibold text-xl">{product.name}</h2>
                                <p className="text-black font-bold text-center">{product.price}</p>

                            </div>
                        </div>
                    ))}
                </div>

                {/* Botón siguiente */}
                <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center px-2 py-2 cursor-pointer group"
                    onClick={() => scrollCarousel('right')}
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black hover:bg-gray-800/60">
                        <svg className="w-4 h-4 text-white" viewBox="0 0 6 10">
                            <path d="m1 9 4-4-4-4" stroke="currentColor" strokeWidth="2" fill="none" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Promos;
