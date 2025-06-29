import React from 'react';

const products = [
    {
        id: 1,
        name: 'Pizza Pepperoni',
        price: 'S/ 29.90',
        image: 'https://images.unsplash.com/photo-1601924582975-4d8e6a06d0f7',
    },
    {
        id: 2,
        name: 'Hamburguesa Clásica',
        price: 'S/ 19.90',
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
    },
    {
        id: 3,
        name: 'Hot Dog Americano',
        price: 'S/ 12.00',
        image: 'https://images.unsplash.com/photo-1631515243349-57e8f3e7320c',
    },
    {
        id: 4,
        name: 'Pizza Hawaiana',
        price: 'S/ 31.50',
        image: 'https://images.unsplash.com/photo-1601924928403-028ca5c29ec1',
    },
    {
        id: 5,
        name: 'Pollo Broaster',
        price: 'S/ 25.00',
        image: 'https://images.unsplash.com/photo-1600490036275-35f54c5e09a9',
    },
    {
        id: 6,
        name: 'Bebida Refrescante',
        price: 'S/ 5.50',
        image: 'https://images.unsplash.com/photo-1606788075761-50be5861d2ad',
    },
];

const Products = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Nuestros Productos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{product.name}</h2>
                            <p className="text-gray-600">{product.price}</p>
                            <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                                Agregar al carrito
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
