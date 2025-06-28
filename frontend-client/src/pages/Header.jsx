import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [activeMenu, setActiveMenu] = useState(null);

    const toggleMenu = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    const closeMenu = () => {
        setActiveMenu(null);
    };

    return (
        <header
            className="fixed top-0 left-0 w-full shadow-lg flex items-center justify-between px-8 py-4 z-50"
            style={{ backgroundColor: "#FCF0E8" }}
        >
            <div className="flex items-center space-x-4">
                <img
                    src="/img/hmLoguito.png"
                    alt="Logotipo de Healthy Mind"
                    className="w-[50px] h-[50px]"
                />
                <h1 className="text-2xl font-bold text-black">
                    <Link
                        to="/home"
                        className="hover:text-amber-700 transition duration-200"
                    >
                        name
                    </Link>
                </h1>
            </div>

            <nav className="nav font-bold text-lg text-black">
                <ul className="flex items-center justify-end space-x-8">
                    <li className="relative group">
                        <Link
                            to="/home"
                            className="hover:text-amber-700 transition duration-200"
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                    </li>

                    <li className="relative group">
                        <Link
                            to="/products"
                            className="hover:text-amber-700 transition duration-200"
                            onClick={closeMenu}
                        >
                            Productos
                        </Link>
                    </li>
                    <li className="relative group">
                        <Link
                            to="/promotions"
                            className="hover:text-amber-700 transition duration-200"
                            onClick={closeMenu}
                        >
                            Promociones
                        </Link>
                    </li>

                    <li className="relative group">
                        <Link
                            to="/contactus"
                            className="hover:text-amber-700 transition duration-200"
                            onClick={closeMenu}
                        >
                            Contáctanos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
