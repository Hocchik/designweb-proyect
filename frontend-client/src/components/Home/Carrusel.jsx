import React, { useState } from 'react';

const Carrusel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        {
            src: "https://moviecrazyplanet.com/wp-content/uploads/2024/10/El-tiempo-que-tenemos-credito-Imagem-Films-MX-1-scaled.jpg",
            title: "El Tiempo que Tenemos",
            description: "Una historia de amor eterna, profundamente conmovedora y envolvente."
        },
        {
            src: "https://m.media-amazon.com/images/S/pv-target-images/20b22107a5a08f7f38f9ceb1ea742cebacf2b1de10a15a117ee8422fc5ffcea7._SX1080_FMjpg_.jpg",
            title: "Terrifier 3",
            description: "Terror más allá de lo imaginable."
        },
        {
            src: "https://imgmedia.larepublica.pe/1200x630/larepublica/original/2024/05/31/665a867d06ec6a483010c7d5.jpg",
            title: "Haikyu! La batalla del basurero",
            description: "El emocionante partido entre Nekoma y Karasuno."
        },
        {
            src: "https://hips.hearstapps.com/hmg-prod/images/venom-2-fotogramas-1634239260.png?crop=1xw:1xh;center,top&resize=1200:*",
            title: "Venom",
            description: "El antihéroe regresa en una nueva aventura."
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
