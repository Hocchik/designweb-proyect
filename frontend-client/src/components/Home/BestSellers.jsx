import React from 'react';

const productosMasVendidos = [
    {
        id: 1,
        nombre: 'Proteína Whey',
        descripcion: 'Suplemento de proteína ideal para recuperación muscular.',
        imagen: '/img/proteina-whey.jpg',
        precio: 'S/ 120.00',
    },
    {
        id: 2,
        nombre: 'Multivitamínico',
        descripcion: 'Vitaminas esenciales para el día a día.',
        imagen: '/img/multivitaminico.jpg',
        precio: 'S/ 45.00',
    },
    {
        id: 3,
        nombre: 'Creatina Monohidratada',
        descripcion: 'Mejora el rendimiento y la fuerza.',
        imagen: '/img/creatina.jpg',
        precio: 'S/ 75.00',
    },
];

const BestSellers = () => {
    return (
        <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                Productos Más Vendidos
            </h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {productosMasVendidos.map((producto) => (
                    <div
                        key={producto.id}
                        className="bg-[#FCF0E8] shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            src={producto.imagen}
                            alt={producto.nombre}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {producto.nombre}
                            </h3>
                            <p className="text-gray-600 text-sm mb-3">
                                {producto.descripcion}
                            </p>
                            <span className="text-red-700 font-bold">{producto.precio}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BestSellers;
