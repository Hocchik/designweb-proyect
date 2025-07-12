import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDropdown = () => {
  const { cart } = useCart();

  const parsePrice = (priceString) => {
    return parseFloat(priceString.replace(/S\/\s?/, '').replace(',', '.')) || 0;
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-lg p-4 z-40 text-center">
        <p className="text-sm text-gray-500">Tu carrito está vacío</p>
      </div>
    );
  }

  return (
    <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-lg p-4 z-40">
      <h3 className="text-base font-bold text-gray-700 mb-2">
        Carrito ({totalItems} {totalItems > 1 ? 'productos' : 'producto'})
      </h3>

      <ul className="max-h-48 overflow-y-auto divide-y divide-gray-200 mb-3">
        {cart.map((item, i) => (
          <li key={i} className="py-2 flex justify-between text-sm">
            <span>{item.name} × {item.quantity}</span>
            <span className="text-gray-700 font-medium">
              S/ {(parsePrice(item.price) * item.quantity).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex justify-between text-sm font-semibold text-gray-800 mb-4">
        <span>Total:</span>
        <span>S/ {totalPrice.toFixed(2)}</span>
      </div>

      <Link
        to="/checkout"
        className="block text-center bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md transition"
      >
        Realizar Pedido
      </Link>
    </div>
  );
};

export default CartDropdown;