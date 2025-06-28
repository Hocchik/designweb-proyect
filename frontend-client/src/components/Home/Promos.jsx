import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const promosComidaRapida = [
    {
        id: 1,
        name: 'Combo Doble Burger + Papas + Gaseosa',
        image: 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_960_720.jpg',
        price: 'S/. 24.90',
    },
    {
        id: 2,
        name: 'Pizza Familiar de Pepperoni',
        image: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg',
        price: 'S/. 39.90',
    },
    {
        id: 3,
        name: 'Alitas BBQ + Papas Fritas',
        image: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/chicken-wings-1239434_960_720.jpg',
        price: 'S/. 19.90',
    },
    {
        id: 4,
        name: 'Hamburguesa Clásica + Gaseosa',
        image: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg',
        price: 'S/. 15.00',
    },
    {
        id: 5,
        name: 'Combo Nuggets (10 uds) + Papas + Bebida',
        image: 'https://cdn.pixabay.com/photo/2016/03/05/20/07/chicken-nuggets-1239244_960_720.jpg',
        price: 'S/. 21.50',
    },
];

const Promos = () => {
    const carouselRef = useRef(null);
    const navigate = useNavigate();

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

    const handleProductClick = (item) => {
        const urlImg = encodeURIComponent(item.image).replace(/%2F/g, '|');
        const url = `/home/producto/detalles/${item.id}/${item.name}/${item.price}/${urlImg}`;
        navigate(url);
    };

    return (
        <div className="p-4">
            <h2 className="text-white bg-black text-2xl font-semibold p-4 text-center">
                Promociones de Comida Rápida
            </h2>
            <div className="relative mt-10">
                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l-lg z-10"
                    onClick={() => scrollCarousel('left')}
                >
                    &#10094;
                </button>
                <div
                    ref={carouselRef}
                    className="flex overflow-x-auto whitespace-nowrap scroll-smooth"
                >
                    {promosComidaRapida.map((product) => (
                        <div
                            key={product.id}
                            onClick={() => handleProductClick(product)}
                            className="max-w-[300px] m-4 bg-white shadow-xl rounded-lg inline-block transition-transform transform hover:scale-105 cursor-pointer"
                        >
                            <img
                                className="w-full h-64 object-cover rounded-t-lg"
                                src={product.image}
                                alt={product.name}
                            />
                            <div className="p-4">
                                <h2 className="font-semibold text-xl">{product.name}</h2>
                                <p className="text-black font-bold text-lg">{product.price}</p>
                                <button
                                    className="mt-4 w-full text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleAddToCart(product);
                                    }}
                                >
                                    Añadir al Carrito
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r-lg z-10"
                    onClick={() => scrollCarousel('right')}
                >
                    &#10095;
                </button>
            </div>
        </div>
    );
};

export default Promos;
