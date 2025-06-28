import React from 'react';

const promotions = [
    {
        id: 1,
        title: 'Combo Pizza + Gaseosa',
        description: 'Pizza grande + bebida de 1L a solo S/ 34.90',
        image: 'https://images.unsplash.com/photo-1594007654729-e26c2b6a3dc8',
    },
    {
        id: 2,
        title: '2 Hamburguesas x 1',
        description: 'Llévate 2 hamburguesas por el precio de 1 todos los miércoles',
        image: 'https://images.unsplash.com/photo-1625946708403-fb69bdc713d4',
    },
    {
        id: 3,
        title: 'Pollo Broaster Familiar',
        description: 'Pollo entero + papas + bebida a solo S/ 45.00',
        image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90',
    },
];

const Promotions = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Promociones Especiales</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {promotions.map((promo) => (
                    <div
                        key={promo.id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                        <img
                            src={promo.image}
                            alt={promo.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{promo.title}</h2>
                            <p className="text-gray-600">{promo.description}</p>
                            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                                ¡Ordenar ahora!
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Promotions;
