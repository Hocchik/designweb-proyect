import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-50 text-white text-sm">
      {/* Sección superior: redes sociales */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-4 border-b border-neutral-50">
        <span className="mb-2 lg:mb-0 font-semibold">Conéctate con nosotros en redes sociales:</span>
        <div className="flex space-x-4">
          {/* Aquí puedes usar FontAwesomeIcon o seguir usando SVG directamente */}
          <a href="#"><FontAwesomeIcon icon={faInstagram} className="text-white text-xl hover:text-amber-400" /></a>
          <a href="#"><FontAwesomeIcon icon={faGithub} className="text-white text-xl hover:text-amber-400" /></a>
          {/* Puedes agregar más íconos sociales aquí si los integras como componentes */}
        </div>
      </div>

      {/* Sección de contenido principal */}
      <div className="px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left border-b border-neutral-50">
        {/* Info del producto */}
        <div>
          <h6 className="uppercase font-bold mb-4">FastQRPay</h6>
          <p>
            FastQRPay es un prototipo de app móvil para optimizar pagos en cadenas de comida rápida mediante códigos QR. Mejora la experiencia con transacciones rápidas, seguras y sin contacto.
          </p>
        </div>

        {/* Enlaces útiles */}
        <div>
          <h6 className="uppercase font-bold mb-4">Enlaces útiles</h6>
          <ul className="space-y-2">
            <li><Link to="/home" className="hover:underline">Home</Link></li>
            <li><Link to="/products" className="hover:underline">Productos</Link></li>
            <li><Link to="/promotions" className="hover:underline">Promociones</Link></li>
            <li><Link to="/contactus" className="hover:underline">Contáctanos</Link></li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="md:text-right">
          <h6 className="uppercase font-bold mb-4">Contacto</h6>
          <ul className="space-y-2">
            <li>Lima, Perú</li>
            <li>FastQRPay.contacto@gmail.com</li>
            <li>+51 987 654 321</li>
            <li>+51 912 345 678</li>
          </ul>
        </div>
      </div>

      {/* Footer legal */}
      <div className="text-center py-4 bg-black bg-opacity-40">
        © {new Date().getFullYear()} Derechos Reservados: <span className="font-semibold">FastQRPay</span>
      </div>
    </footer>
  );
};

export default Footer;