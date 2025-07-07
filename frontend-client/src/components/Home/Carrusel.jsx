import React, { useState } from 'react';

const Carrusel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        "https://www.bembos.com.pe/media/wysiwyg/bembos/CategoriasAsociadasBB/_duo_queso_tocino__personal_720x724_.webp",
        "https://www.bembos.com.pe/media/wysiwyg/bembos/CategoriasAsociadasBB/LA_PATRIOTA_720X724_1_.webp",
        "https://www.bembos.com.pe/media/wysiwyg/bembos/CategoriasAsociadasBB/duo_imperdible_WEB_720X724.webp",
        "https://www.bembos.com.pe/media/wysiwyg/bembos/CategoriasAsociadasBB/_d_o_sabroso_720x724_1_.webp",
    ];

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="relative pt-20 bg-white mx-2.5">
            <div className="relative h-80 overflow-hidden rounded-lg md:h-[600px]">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img
                            src={src}
                            alt={`Imagen ${index + 1}`}
                            className="absolute block w-full h-full object-contain top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        />
                    </div>
                ))}

                {/* Botón Anterior */}
                <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center px-2 py-2 cursor-pointer group"
                    onClick={handlePrev}
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black hover:bg-gray-800/60">
                        <svg className="w-4 h-4 text-white" viewBox="0 0 6 10">
                            <path d="M5 1 1 5l4 4" stroke="currentColor" strokeWidth="2" fill="none" />
                        </svg>
                    </span>
                </button>

                {/* Botón Siguiente */}
                <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center px-2 py-2 cursor-pointer group"
                    onClick={handleNext}
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

export default Carrusel;
