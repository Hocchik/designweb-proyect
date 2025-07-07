import { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { useCart } from '../../../context/CartContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const products = [
    {
        id: 20,
        name: 'McFlurry Oreo®',
        description: 'Delicioso helado de vainilla mezclado con trozos de galleta Oreo®. Una combinación irresistible de cremosidad y crujiente.',
        price: 7.00,
        image: 'https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kpXMGerB/200/200/original?country=pe',
    },
    {
        id: 21,
        name: 'Super Cono Combinado',
        description: 'Helado suave en cono con una deliciosa mezcla de vainilla y chocolate. El balance perfecto entre dos sabores clásicos.',
        price: 4.00,
        image: 'https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$supercono.png/200/200/original?country=pe',
    },
    {
        id: 22,
        name: 'McFlurry M&M',
        description: 'Cremoso helado de vainilla con coloridos chocolates M&M. Una explosión de sabor y diversión en cada cucharada.',
        price: 7.00,
        image: 'https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kpXA1VM3/200/200/original?country=pe',
    },
    {
        id: 23,
        name: 'Super Cono Chocolate',
        description: 'Generoso cono de helado suave sabor chocolate. El placer del chocolate en su forma más refrescante.',
        price: 4.00,
        image: 'https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$supercono.png/200/200/original?country=pe',
    },
    {
        id: 24,
        name: 'Sundae Chocolate',
        description: 'Helado de vainilla bañado en salsa de chocolate. Un clásico que nunca pasa de moda.',
        price: 6.50,
        image: 'https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$sundae-de-chocolate.png/200/200/original?country=pe',
    },
    {
        id: 25,
        name: 'Super Cono Vainilla',
        description: 'Abundante helado suave de vainilla en cono. La opción perfecta para los amantes.',
        price: 4.00,
        image: 'https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$supercono.png/200/200/original?country=pe',
    },
    {
        id: 26,
        name: 'Sundae Fresa',
        description: 'Helado de vainilla cubierto con salsa de fresa. Una combinación frutal y refrescante.',
        price: 7.00,
        image: 'https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$sundae-fresa.png/200/200/original?country=pe',
    },
    {
        id: 27,
        name: 'Sundae de Dulce de Leche',
        description: 'Helado de vainilla con abundante dulce de leche. Un postre con el dulzor perfecto del manjar blanco.',
        price: 7.00,
        image: 'https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$sundae-manjar%20blanco.png/200/200/original?country=pe',
    },
    {
        id: 28,
        name: 'McFlurry Sublime',
        description: 'Helado de vainilla mezclado con trozos de chocolate Sublime. Una experiencia única.',
        price: 7.00,
        image: 'https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kUX902rV/200/200/original?country=pe',
    },
    {
        id: 29,
        name: 'Cono Chocolate',
        description: 'Helado suave de chocolate en cono. El antojo perfecto para los amantes del chocolate.',
        price: 3.00,
        image: 'https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$Cono-chocolate.png/200/200/original?country=pe',
    },
    {
        id: 30,
        name: 'Cono Vainilla',
        description: 'Clásico helado suave de vainilla en cono. Simple y delicioso.',
        price: 3.50,
        image: 'https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$cono.png/200/200/original?country=pe',
    },
];

const IceCream = () => {
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
            <h1 className="text-3xl font-bold mb-6 text-center">Helados</h1>
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

export default IceCream;