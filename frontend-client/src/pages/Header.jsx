import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const Header = () => {

  const navigate = useNavigate();
  const { isAuthenticated, userName } = useAuth();
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  const [showCart, setShowCart] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleCart = () => setShowCart((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#ffffff] shadow-md z-50 px-4 py-3 flex items-center justify-between">
      {/* Logo y Marca */}
      <Link to="/home" className="flex items-center space-x-2">
        <span className="font-bold text-xl text-black hover:text-red-600">FastQRPay</span>
      </Link>

      {/* Navegación derecha */}
      <div className="flex items-center space-x-6 relative">
        {/* Saludo si está logeado */}
        {isAuthenticated && (
          <span className="hidden sm:inline-block text-sm font-medium text-gray-800 hover:text-red-600">
            ¡Hola, {userName}!
          </span>
        )}

        {/* Enlace al Catálogo */}
        <Link
          to="/catalog/hamburger"
          className="text-sm font-medium text-gray-800 hover:text-red-600 transition hidden sm:inline"
        >
          Catálogo
        </Link>

        {/* Enlace al Catálogo - ícono para pantallas pequeñas */}
        <Link
          to="/catalog/hamburger"
          className="text-black hover:text-red-600 transition sm:hidden"
          aria-label="Catálogo"
        >
          <FontAwesomeIcon icon={faUtensils} size="lg" />
        </Link>


        {/* Icono Carrito con contador y dropdown */}
        <div className="relative">
          <button
            onClick={toggleCart}
            className="relative text-black hover:text-red-600 transition"
          >
            <FontAwesomeIcon icon={faCartShopping} size="lg" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          {showCart && (
            <div className="absolute right-0 mt-3 w-80 bg-white rounded-xl shadow-lg p-4 z-50">
              <h4 className="text-base font-semibold mb-2 text-gray-800">Tu carrito</h4>

              {cart.length === 0 ? (
                <p className="text-sm text-gray-500 text-center">Tu carrito está vacío</p>
              ) : (
                <>
                  <ul className="divide-y max-h-52 overflow-y-auto mb-3">
                    {cart.map((item, idx) => (
                      <li key={idx} className="py-2 text-sm">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{item.name}</span>
                          <span className="text-gray-700 font-medium">
                            S/ {(item.price*item.quantity).toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between items-center mt-1">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => decreaseQuantity(item.id)}
                              className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                            >−</button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() => increaseQuantity(item.id)}
                              className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                            >+</button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-xs text-red-600 hover:text-red-700"
                          >Eliminar</button>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => {
                      setShowCart(false);
                      navigate('/checkout');
                    }}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md transition"
                  >
                    Realizar Pedido
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* Icono Usuario */}
        <Link to="/login" className="text-black hover:text-red-600 transition">
          <FontAwesomeIcon icon={faCircleUser} size="lg" />
        </Link>
      </div>
    </header>
  );
};

export default Header;