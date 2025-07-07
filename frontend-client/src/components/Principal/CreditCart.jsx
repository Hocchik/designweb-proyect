// components/CreditCard.jsx
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCreditCard } from 'react-icons/fa';
import './credit-card.css';

const CreditCard = ({ numero, nombre, expiracion }) => {
  const getCardIcon = () => {
    if (numero.startsWith('4')) return <FaCcVisa />;
    if (numero.startsWith('5')) return <FaCcMastercard />;
    if (numero.startsWith('3')) return <FaCcAmex />;
    return <FaCreditCard />;
  };

  const formatNumber = (num) => {
    const str = num.replace(/\D/g, '').padEnd(16, '#');
    return str.match(/.{1,4}/g).join(' ');
  };

  return (
    <div className="credit-card-box">
      <div className="credit-card">
        <div className="chip" />
        <div className="card-type">{getCardIcon()}</div>
        <div className="card-number">{formatNumber(numero || '')}</div>
        <div className="card-info">
          <div>
            <span className="label">Titular</span>
            <span className="value">{nombre || 'NOMBRE Y APELLIDO'}</span>
          </div>
          <div>
            <span className="label">Expira</span>
            <span className="value">{expiracion || 'MM/AA'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;