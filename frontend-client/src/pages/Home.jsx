import { useEffect, useState } from 'react';
import Carrusel from '../components/Home/Carrusel';
import Promos from '../components/Home/Promos';
import BestSellers from '../components/Home/BestSellers';
import findNearest from '../helpers/findNearest';

export default function Home() {
  const [userCoords, setUserCoords] = useState(null);
  const [locales, setLocales] = useState([]);
  const [nearestLocal, setNearestLocal] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setUserCoords({ lat: coords.latitude, lng: coords.longitude });
      },
      (err) => {
        console.warn("Geolocation error:", err.message);
      }
    );
  }, []);

  useEffect(() => {
    const fetchLocales = async () => {
      const res = await fetch('/api/locals.json');
      const data = await res.json();
      setLocales(data);
    };
    fetchLocales();
  }, []);

  const handleSelectNearest = () => {
    if (!userCoords || locales.length === 0) return;
    const closest = findNearest(userCoords.lat, userCoords.lng, locales);
    setNearestLocal(closest);
  };

  return (
    <main className="pt-20 px-4 max-w-screen-xl mx-auto w-full">
      <section className="w-full max-w-3xl mx-auto mb-8 px-6">
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 md:flex md:items-center md:justify-between gap-6">
            <div className="mb-4 md:mb-0">
            {nearestLocal ? (
                <>
                <h2 className="text-lg font-semibold text-gray-800">Local seleccionado</h2>
                <p className="text-red-700 text-xl font-bold mt-1">{nearestLocal.nombre}</p>
                </>
            ) : (
                <>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">¿Dónde estás?</h2>
                <button
                    onClick={handleSelectNearest}
                    className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-5 py-2 rounded-md transition"
                >
                    Buscar local más cercano
                </button>
                </>
            )}
            </div>

            {/* Lista alternativa de selección rápida (si se desea mantener) */}
            {locales?.length > 0 && (
            <div className="w-full md:w-1/2">
                <label className="block text-gray-600 font-medium text-sm mb-2">Elegir otro local:</label>
                <select
                onChange={(e) =>
                    setNearestLocal(locales.find((l) => l.nombre === e.target.value))
                }
                value={nearestLocal?.nombre || ''}
                className="w-full border border-gray-300 text-gray-800 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                <option value="">Selecciona un local...</option>
                {locales.map((local, idx) => (
                    <option key={idx} value={local.nombre}>
                    {local.nombre}
                    </option>
                ))}
                </select>
            </div>
            )}
        </div>
        </section>

      <Carrusel />
      <Promos />
      <BestSellers />
    </main>
  );
}