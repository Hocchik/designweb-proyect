import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, userName } = useAuth();
  const { cart } = useCart();
  const [showCart, setShowCart] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleCart = () => setShowCart((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#FCF0E8] shadow-md z-50 px-4 py-3 flex items-center justify-between">
      {/* Logo y Marca */}
      <Link to="/home" className="flex items-center space-x-2">
        <img src="/img/hmLoguito.png" alt="Logo de FastQRPay" className="w-10 h-10" />
        <span className="font-bold text-xl text-black">FastQRPay</span>
      </Link>

      {/* Navegación derecha */}
      <div className="flex items-center space-x-6 relative">
        {/* Enlace al Catálogo */}
        <Link
          to="/products"
          className="text-sm font-medium text-gray-800 hover:text-red-600 transition hidden sm:inline"
        >
          Catálogo
        </Link>

        {/* Saludo si está logeado */}
        {isAuthenticated && (
          <span className="hidden sm:inline-block text-sm font-medium text-gray-800">
            ¡Hola, {userName}!
          </span>
        )}

        {/* Icono Usuario */}
        <Link to="/login" className="text-black hover:text-amber-600 transition">
          <FontAwesomeIcon icon={faCircleUser} size="lg" />
        </Link>

        {/* Icono Carrito con contador y dropdown */}
        <div className="relative">
          <button
            onClick={toggleCart}
            className="relative text-black hover:text-amber-600 transition"
          >
            <FontAwesomeIcon icon={faCartShopping} size="lg" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          {showCart && (
            <div className="absolute right-0 mt-3 w-72 bg-white rounded-xl shadow-lg p-4 z-50">
              <h4 className="text-base font-semibold mb-2 text-gray-800">Tu carrito</h4>

              {cart.length === 0 ? (
                <p className="text-sm text-gray-500 text-center">Tu carrito está vacío</p>
              ) : (
                <>
                  <ul className="divide-y max-h-40 overflow-y-auto mb-3">
                    {cart.map((item, idx) => (
                      <li key={idx} className="py-2 flex justify-between text-sm">
                        <span>{item.name} × {item.quantity}</span>
                        <span className="font-medium text-gray-700">{item.price}</span>
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
      </div>
    </header>
  );
};

export default Header;