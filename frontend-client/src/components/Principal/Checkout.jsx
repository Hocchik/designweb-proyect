import { useCart } from '../../context/CartContext';
import { useState } from 'react';
import CreditCard from './CreditCart';


const Checkout = () => {
  const { cart } = useCart();
  const [metodo, setMetodo] = useState('tarjeta');
  const [monto, setMonto] = useState('');
  const [qrGenerado, setQrGenerado] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [card, setCard] = useState({ numero: '', nombre: '', expiracion: '', cvv: '' });


  const parsePrice = (price) => parseFloat(price) || 0;
  const total = cart.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0).toFixed(2);

  const handlePagoRealizado = () => {
    setShowSuccess(true);
    setQrGenerado(false);
    setTimeout(() => setShowSuccess(false), 2500); // auto cierra el modal
  };

  return (
    <main className="pt-24 px-4 max-w-3xl mx-auto w-full space-y-6">
      <h1 className="text-2xl font-bold text-center">Finalizar Pedido</h1>

      {/* Resumen del Carrito */}
      <section className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold mb-3 text-gray-700">🧾 Resumen del Pedido</h2>
        <ul className="divide-y text-sm text-gray-700">
          {cart.map((item, i) => (
            <li key={i} className="py-2 flex justify-between">
              <span>{item.name} × {item.quantity}</span>
              <span>S/ {(parsePrice(item.price) * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between font-bold text-gray-800 mt-3">
          <span>Total:</span>
          <span>S/ {total}</span>
        </div>
      </section>

      {/* Método de Pago */}
      <section className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold mb-3 text-gray-700">💳 Método de Pago</h2>
        <div className="flex gap-3">
          {['tarjeta', 'efectivo', 'billetera'].map((m) => (
            <button
              key={m}
              onClick={() => setMetodo(m)}
              className={`flex-1 py-2 rounded-md font-medium ${
                metodo === m ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              {m === 'tarjeta' && 'Tarjeta'}
              {m === 'efectivo' && 'Efectivo'}
              {m === 'billetera' && 'Wallet'}
            </button>
          ))}
        </div>
      </section>

      {/* Formulario por método */}
      {metodo === 'tarjeta' && (
        <section className="bg-white rounded-lg shadow-md p-4 space-y-4">
            <h3 className="font-semibold text-gray-700">🧾 Datos de Tarjeta</h3>

            <CreditCard
            numero={card.numero}
            nombre={card.nombre}
            expiracion={card.expiracion}
            />

            <input
            placeholder="N° Tarjeta"
            className="input"
            maxLength={16}
            value={card.numero}
            onChange={(e) => setCard({ ...card, numero: e.target.value })}
            />

            <input
            placeholder="Nombre en la tarjeta"
            className="input"
            value={card.nombre}
            onChange={(e) => setCard({ ...card, nombre: e.target.value })}
            />

            <div className="flex gap-2">
            <input
                placeholder="MM/YY"
                className="input w-1/2"
                maxLength={5}
                value={card.expiracion}
                onChange={(e) => setCard({ ...card, expiracion: e.target.value })}
            />
            <input
                placeholder="CVV"
                className="input w-1/2"
                maxLength={4}
                value={card.cvv}
                onChange={(e) => setCard({ ...card, cvv: e.target.value })}
            />
            </div>

            <button onClick={handlePagoRealizado} className="btn-red w-full">
            Pagar S/ {total}
            </button>
        </section>
    )}


      {metodo === 'efectivo' && (
        <section className="bg-white rounded-lg shadow-md p-4 space-y-3">
          <h3 className="font-semibold text-gray-700">💵 Monto a entregar</h3>
          <input
            type="number"
            placeholder="Ej: 50"
            className="input"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
          />
          <button onClick={() => { setQrGenerado(true); }} className="btn-red w-full">Generar QR</button>
          {qrGenerado && (
            <>
              <img src="/img/qr_pago_cajero.png" alt="QR pago efectivo" className="mx-auto w-40 mt-4" />
              <button onClick={handlePagoRealizado} className="btn-red w-full mt-4">Confirmar Pago</button>
            </>
          )}
        </section>
      )}

      {metodo === 'billetera' && (
        <section className="bg-white rounded-lg shadow-md p-4 space-y-3">
          <h3 className="font-semibold text-gray-700">📱 Selecciona tu billetera</h3>
          <div className="flex justify-around">
            <img src="/src/img/yape.png" alt="Yape" className="w-15 h-15" />
            <img src="/src/img/plin.png" alt="Plin" className="w-15 h-15" />
            <img src="/src/img/prexpe.png" alt="Prexpe" className="w-11 h-15" />
          </div>
          <button onClick={() => setQrGenerado(true)} className="btn-red w-full">Generar QR/CIP</button>
          {qrGenerado && (
            <div className="text-center space-y-2">
              <img src="/img/qr_wallet.png" alt="QR billetera" className="mx-auto w-36 mt-4" />
              <p className="text-sm text-gray-700">CIP Alternativo: <strong>01374290461</strong></p>
              <button onClick={handlePagoRealizado} className="btn-red w-full mt-3">Confirmar Pago</button>
            </div>
          )}
        </section>
      )}

      {/* ✅ Modal de Confirmación */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl text-center max-w-xs">
            <svg className="w-14 h-14 text-green-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <h2 className="text-lg font-bold text-gray-800">Pago realizado correctamente</h2>
            <p className="text-sm text-gray-600 mt-1">Gracias por tu pedido 🧾</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default Checkout;