import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Catalog from './components/Catalog/Catalog';
import ContactUs from './components/Principal/ContactUs';
import Login from './pages/Login';
import Register from './pages/Register';
import './index.css';
import Checkout from './components/Principal/checkout';
import CatalogProducts from './CatalogProducts';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirección desde la raíz hacia la página principal */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Rutas sin Header y Footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rutas que incluyen Header y Footer */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/catalog" element={<Catalog />}>
            <Route path=":category" element={<CatalogProducts />} />
          </Route>
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>

        {/* Ruta para manejar páginas no encontradas */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

// Componente Layout que incluye Header y Footer
const Layout = () => {
  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh', padding: '20px' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

// Componente para manejar páginas no encontradas
const NotFound = () => {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2>404 - Página No Encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
    </div>
  );
};

export default App;
