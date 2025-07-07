import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Catalog = () => {
  // Relación entre nombre visible y ruta
  const categories = [
    { id: 'hamburger', name: 'Hamburguesas', icon: '🍔' },
    { id: 'snacks', name: 'Snacks', icon: '🍟' },
    { id: 'chicken', name: 'Pollo', icon: '🍗' },
    { id: 'icecream', name: 'Helados', icon: '🍦' },
    { id: 'drinks', name: 'Bebidas', icon: '🥤' }
  ];

  const location = useLocation();
  const currentCategory = location.pathname.split('/').pop();

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl mt-10 text-center">
      <div className="flex justify-center items-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
        <div className="inline-flex justify-center gap-4 flex-nowrap">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/catalog/${category.id}`}
              className={`flex flex-col items-center min-w-[120px] px-6 py-4 rounded-xl transition-all duration-300 ${currentCategory === category.id
                ? 'bg-blue-900 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
                }`}
            >
              <span className="text-2xl mb-2">{category.icon}</span>
              <span className="text-sm font-medium">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
        <Outlet />
      </div>
    </div>
  );
};

export default Catalog;