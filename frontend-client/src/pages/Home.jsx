import Carrusel from '../components/Home/Carrusel';
import Promos from '../components/Home/Promos';
import BestSellers from '../components/Home/BestSellers';
export default function Home() {
    return (
        <>
            <h1 className="text-2xl font-bold text-center mt-4">Bienvenido al Home</h1>
            <Carrusel />
            <Promos />
            <BestSellers />
        </>
    );
}
