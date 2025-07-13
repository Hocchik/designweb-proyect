import { useCart } from '../../context/CartContext';
import { useState } from 'react';
import CreditCard from './CreditCart';
import { useNavigate } from 'react-router-dom';
/* import emailjs from 'emailjs-com';
import { useAuth } from '../../context/AuthContext'; */

const Checkout = () => {
  const { cart, clearCart  } = useCart();
  /* const { userName, email } = useAuth(); */
  const navigate = useNavigate();
  const [metodo, setMetodo] = useState('tarjeta');
  const [monto, setMonto] = useState('');
  const [walletSeleccionada, setWalletSeleccionada] = useState("");
  const [qrGenerado, setQrGenerado] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [card, setCard] = useState({ numero: '', nombre: '', expiracion: '', cvv: '' });
  const [loadingQr, setLoadingQr] = useState(false)

  const parsePrice = (price) => parseFloat(price) || 0;
  const total = cart.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0).toFixed(2);

  /* const sendEmail = () => {
    const templateParams = {
      to_name: userName,
      to_email: email,
      message: `Tu compra de S/ ${total} ha sido registrada correctamente`,
    };

    emailjs.send(
      'service_qhh1k5c',
      'pago_confirmado',
      templateParams,
      'Nyvy5jdKchItA5zVp'
    )
    .then(() => console.log("Correo enviado"))
    .catch((error) => console.error("Error enviando correo:", error));
  }; */

  const handlePagoRealizado = () => {
    setShowSuccess(true);
    setQrGenerado(false);
    setTimeout(() => {
      setShowSuccess(false);
      clearCart();         // limpia el carrito
      /* sendEmail(); */
      navigate('/');       // redirige al home
    }, 2500);

  };

  return (
    <main className="pt-24 px-4 max-w-3xl mx-auto w-full space-y-6">
      <h1 className="text-2xl font-bold text-center">Finalizar Pedido</h1>

      {/* Resumen del Carrito */}
      <section className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-bold mb-3 text-black">Resumen del Pedido:</h2>
        <ul className="divide-y text-sm text-black">
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
        <h2 className="text-lg font-bold mb-3 text-black">Método de Pago:</h2>
        <div className="flex gap-3">
          {['tarjeta', 'efectivo', 'billetera'].map((m) => (
            <button
              key={m}
              onClick={() => setMetodo(m)}
              className={`flex-1 py-2 rounded-md font-medium ${metodo === m ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'
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
      {/* Método de pago: Tarjeta */}
      {metodo === 'tarjeta' && (
        <section className="bg-white rounded-xl shadow-lg p-6 space-y-5">
          <h3 className="text-lg font-semibold text-gray-800">🧾 Datos de Tarjeta</h3>

          <CreditCard
            numero={card.numero}
            nombre={card.nombre}
            expiracion={card.expiracion}
          />

          <input
            placeholder="N° Tarjeta"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            maxLength={16}
            value={card.numero}
            onChange={(e) => setCard({ ...card, numero: e.target.value })}
          />
          <input
            placeholder="Nombre en la tarjeta"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            maxLength={20}
            value={card.nombre}
            onChange={(e) => setCard({ ...card, nombre: e.target.value })}
          />

          <div className="flex gap-4">
            <input
              placeholder="MM/YY"
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              maxLength={5}
              value={card.expiracion}
              onChange={(e) => setCard({ ...card, expiracion: e.target.value })}
            />
            <input
              placeholder="CVV"
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              maxLength={3}
              value={card.cvv}
              onChange={(e) => setCard({ ...card, cvv: e.target.value })}
            />
          </div>

          <div className="flex justify-center">
            <button
              onClick={handlePagoRealizado}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
            >
              Pagar S/ {total}
            </button>
          </div>
        </section>
      )}

      {/* Método de pago: Efectivo */}
      {metodo === 'efectivo' && (
        <section className="bg-white rounded-xl shadow-lg p-6 space-y-5">
          <h3 className="text-lg font-semibold text-gray-800">💵 Monto a entregar</h3>
          <input
            type="number"
            placeholder="Ej: 50"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
          />

          <div className="flex justify-center">
            <button
              onClick={() => {
                setLoadingQr(true);
                setTimeout(() => {
                  setQrGenerado(true);
                  setLoadingQr(false);
                }, 1500);
              }}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
            >
              Generar QR
            </button>
          </div>

          {loadingQr && (
            <div className="flex justify-center mt-4">
              <svg className="animate-spin h-6 w-6 text-red-500" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" />
              </svg>
            </div>
          )}

          {qrGenerado && (
            <>
              <img src="https://pngimg.com/d/qr_code_PNG33.png" alt="QR pago efectivo" className="mx-auto w-40 mt-4" />
              <div className='flex justify-center'>
                <button onClick={handlePagoRealizado} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200">
                  Confirmar Pago
                </button>
              </div>
            </>
          )}
        </section>
      )}

      {/* Método de pago: Billetera */}
      {metodo === 'billetera' && (
        <section className="bg-white rounded-xl shadow-lg p-6 space-y-5">
          <h3 className="text-lg font-semibold text-gray-800">📱 Selecciona tu billetera</h3>

          <div className="flex justify-around">
            <img
              src="/src/img/yape.png"
              alt="Yape"
              onClick={() => setWalletSeleccionada("Yape")}
              className={`w-20 h-20 object-contain cursor-pointer transition-transform ${
                walletSeleccionada === "Yape" ? "ring-4 ring-blue-500 scale-105" : "hover:scale-105"
              }`}
            />
            <img
              src="/src/img/plin.png"
              alt="Plin"
              onClick={() => setWalletSeleccionada("Plin")}
              className={`w-20 h-20 object-contain cursor-pointer transition-transform ${
                walletSeleccionada === "Plin" ? "ring-4 ring-blue-500 scale-105" : "hover:scale-105"
              }`}
            />
            <img
              src="/src/img/prexpe.png"
              alt="Prexpe"
              onClick={() => setWalletSeleccionada("Prexpe")}
              className={`w-16 h-20 object-contain cursor-pointer transition-transform ${
                walletSeleccionada === "Prexpe" ? "ring-4 ring-blue-500 scale-105" : "hover:scale-105"
              }`}
            />
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => {
                if (!walletSeleccionada) {
                  alert("Selecciona una billetera digital antes de continuar");
                  return;
                }
                setQrGenerado(false);
                setLoadingQr(true);
                setTimeout(() => {
                  setQrGenerado(true);
                  setLoadingQr(false);
                }, 1500);
              }}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
            >
              Generar QR/CIP
            </button>
          </div>

          {loadingQr && (
            <div className="flex justify-center mt-4">
              <svg className="animate-spin h-6 w-6 text-red-500" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" />
              </svg>
            </div>
          )}

          {qrGenerado && (
            <div className="text-center space-y-2 mt-4">
              <p className="text-sm text-gray-700">Método seleccionado: <strong>{walletSeleccionada}</strong></p>
              <img
                src="https://pngimg.com/d/qr_code_PNG33.png"
                alt="QR billetera"
                className="mx-auto w-36 transition-opacity duration-300 animate-fadeIn"
              />
              <p className="text-sm text-gray-700">CIP Alternativo: <strong>01374290461</strong></p>
              <button
                onClick={handlePagoRealizado}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
              >
                Confirmar Pago
              </button>
            </div>
          )}
        </section>
      )}

      {/* Modal de Confirmación */}
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