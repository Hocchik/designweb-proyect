import React, { useState } from 'react';

const Carrusel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        {
            src: "https://images.unsplash.com/photo-1606755962773-0c1bfbf0d4c2",
            title: "Combo Doble Cheeseburger",
            description: "Incluye 2 hamburguesas con queso, papas medianas y gaseosa por S/ 18.90."
        },
        {
            src: "https://images.unsplash.com/photo-1604908177225-c2f739b88962",
            title: "Pizza Familiar 2x1",
            description: "Llévate 2 pizzas familiares por el precio de 1. ¡Solo esta semana!"
        },
        {
            src: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
            title: "Pollo Broaster + Papas",
            description: "1/4 de pollo broaster con papas y ensalada por S/ 12.50. ¡Rápido y delicioso!"
        },
        {
            src: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
            title: "10 Nuggets + Salsa Gratis",
            description: "Ordena 10 nuggets y recibe una salsa BBQ o tártara totalmente gratis."
        },
    ];

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="relative pt-20 bg-white mx-5">
            <div className="relative h-96 overflow-hidden rounded-lg md:h-[680px]">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img
                            src={image.src}
                            alt={image.title}
                            className="absolute block w-full h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                            <h2 className="text-white text-2xl">{image.title}</h2>
                            <p className="text-white">{image.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Botones de navegación */}
            <button
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
                onClick={handlePrev}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/60">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 6 10">
                        <path d="M5 1 1 5l4 4" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                </span>
            </button>

            <button
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
                onClick={handleNext}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/60">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 6 10">
                        <path d="m1 9 4-4-4-4" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                </span>
            </button>
        </div>
    );
};

export default Carrusel;
