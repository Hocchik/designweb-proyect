import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const productosMasVendidos = [
    // Pollo
    {
        id: 1,
        name: 'Chicken Grill',
        description: 'Deliciosa pechuga de pollo a la parrilla con lechuga fresca, tomate y nuestra salsa especial',
        price: 'S/ 17.90',
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146463868.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
    {
        id: 2,
        name: 'Bembroster Clásica',
        description: 'Crujiente filete de pollo empanizado con lechuga y mayonesa casera',
        price: 'S/ 14.90',
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146464442.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
    {
        id: 3,
        name: 'Bembroster Tártara',
        description: 'Pollo empanizado con salsa tártara especial, lechuga y tomate',
        price: 'S/ 16.90',
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146464443_1.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
    {
        id: 4,
        name: 'Bembroster Queso Tocino',
        description: 'Pollo empanizado con queso derretido, tocino crujiente y salsa especial',
        price: 'S/ 17.90',
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146464446.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },


    // Hamburguesas
    {
        id: 12,
        name: 'Hamburguesa Clasica',
        description: 'La hamburguesa tradicional con carne a la parrilla, lechuga fresca, tomate y mayonesa. El sabor auténtico que nunca pasa de moda.',
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146463820.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg&dpr=2',
        price: 'S/. 17.90',
    },
    {
        id: 13,
        name: 'Hamburguesa Extrema',
        description: 'Hamburguesa doble a la parrilla con queso edam, tocino, tomate, lechuga y mayonesa. Una explosión de sabores para los más exigentes.',
        image: 'https://www.bembos.com.pe/media/wysiwyg/bembos/home/productos_de_menu_extrema_384x320_2.png',
        price: 'S/. 25.90',
    },
    {
        id: 14,
        name: 'Hamburguesa Cheese',
        description: 'Jugosa hamburguesa con doble queso cheddar derretido, cebolla y nuestra salsa especial. El paraíso de los amantes del queso.',
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146463725.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg&dpr=2',
        price: 'S/. 19.90',
    },
    {
        id: 15,
        name: 'Hamburguesa Mexicana',
        description: 'Hamburguesa con guacamole, jalapeños, queso cheddar, tomate y lechuga. El auténtico sabor mexicano en cada mordida.',
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146469168.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg&dpr=2',
        price: 'S/. 21.90',
    },

    // Helados
    {
        id: 20,
        name: 'McFlurry Oreo®',
        description: 'Delicioso helado de vainilla mezclado con trozos de galleta Oreo®. Una combinación irresistible de cremosidad y crujiente.',
        price: 'S/ 7.00',
        image: 'https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kpXMGerB/200/200/original?country=pe',
    },
    {
        id: 21,
        name: 'Super Cono Combinado',
        description: 'Helado suave en cono con una deliciosa mezcla de vainilla y chocolate. El balance perfecto entre dos sabores clásicos.',
        price: 'S/ 4.00',
        image: 'https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$supercono.png/200/200/original?country=pe',
    },
    {
        id: 22,
        name: 'McFlurry M&M',
        description: 'Cremoso helado de vainilla con coloridos chocolates M&M. Una explosión de sabor y diversión en cada cucharada.',
        price: 'S/ 7.00',
        image: 'https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kpXA1VM3/200/200/original?country=pe',
    },

    // Snacks
    {
        id: 31,
        name: 'Salchinuggets',
        description: 'Deliciosa combinación de salchichas empanizadas y nuggets de pollo. La mezcla perfecta para los amantes de los snacks.',
        price: 'S/ 17.90',
        image: 'https://www.bembos.com.pe/media/catalog/product/s/a/salchinugget_1000x1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
    {
        id: 32,
        name: 'Salchipapa',
        description: 'Clásica combinación de papas fritas doradas y trozos de salchicha. Un snack tradicional que nunca falla. Disfrutalo con tu salsa favorita.',
        price: 'S/ 10.90',
        image: 'https://www.bembos.com.pe/media/catalog/product/s/a/salchipapa_1000x1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
    {
        id: 33,
        name: 'Papas Fritas',
        description: 'Crujientes papas fritas cortadas en bastones, doradas a la perfección. El acompañamiento ideal para cualquier pedido.',
        price: 'S/ 6.90',
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146464253.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
    {
        id: 34,
        name: 'Cheese Fingers',
        description: 'Deditos de queso mozzarella empanizados y fritos hasta quedar dorados.',
        price: 'S/ 13.90',
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146464255.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
    {
        id: 35,
        name: 'Nuggets',
        description: 'Tiernos trozos de pollo empanizados y fritos hasta obtener un dorado perfecto. Ideales para compartir.',
        price: 'S/ 12.90',
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146464256.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
    {
        id: 36,
        name: 'Nuggetspapa',
        description: 'Combinación ganadora de nuggets de pollo con papas fritas. El snack completo para satisfacer tu antojo.',
        price: 'S/ 15.90',
        image: 'https://www.bembos.com.pe/media/catalog/product/n/u/nuggets_con_papas_1000x1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
    // Bebidas
    {
        id: 5,
        name: 'Coca Cola 500 ml',
        description: 'Refresco carbonatado con el sabor original que todos conocen y aman. Perfecta para acompañar cualquier comida.',
        price: 'S/ 5.00',
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146469602.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },

    {
        id: 7,
        name: 'Inca Kola 500 ml',
        description: 'La bebida de sabor único y original del Perú, con su característico sabor a hierba luisa. El complemento perfecto para tu comida.',
        price: 'S/ 5.00',
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146469604.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },

    {
        id: 9,
        name: 'Sprite 500 ml',
        description: 'Bebida refrescante con sabor a lima-limón. Clara, cristalina y burbujeante, perfecta para refrescarte.',
        price: 'S/ 5.00',
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146469606.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
    {
        id: 10,
        name: 'Fanta 500ml',
        description: 'Refresco con delicioso sabor a naranja. Burbujeante y frutal, ideal para momentos divertidos.',
        price: 'S/ 5.00',
        image: 'https://www.bembos.com.pe/media/catalog/product/2/1/2146469607.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400&format=jpeg',
    },
];


const BestSellers = () => {
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
                        <div className="relative w-full aspect-square bg-white flex items-center justify-center overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="object-contain w-full h-full max-h-60 max-w-60"
                                loading="lazy"
                            />
                            <button
                                onClick={() => toggleFavorite(product.id)}
                                className="absolute top-2 right-2 text-red-500 text-xl"
                            >
                                {favorites.has(product.id) ? <FaHeart /> : <FaRegHeart />}
                            </button>
                        </div>
                        <div className="p-4 text-center flex flex-col flex-1">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[3rem]">
                                {product.name}
                            </h3>
                            <p className="text-gray-600 text-sm mb-3 line-clamp-3 min-h-[3.5rem]">
                                {product.description}
                            </p>
                            <span className="text-gray-700 font-bold block mb-4">{product.price}</span>
                            <button
                                onClick={() =>
                                    isAuthenticated
                                        ? addToCart(product)
                                        : window.location.href = "/login"
                                }
                                className="mt-auto bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 w-full"
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

export default BestSellers;
