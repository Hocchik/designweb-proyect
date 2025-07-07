import { useParams } from 'react-router-dom';
import Chicken from './components/Catalog/Products/Chicken';
import Drinks from './components/Catalog/Products/Drinks';
import Hamburger from './components/Catalog/Products/Hamburger';
import IceCream from './components/Catalog/Products/IceCream';
import Snacks from './components/Catalog/Products/Snacks';
const CatalogProducts = () => {
    const { category } = useParams();

    let content = null;
    switch (category) {
        case 'chicken':
            content = <Chicken />;
            break;
        case 'drinks':
            content = <Drinks />;
            break;
        case 'hamburger':
            content = <Hamburger />;
            break;
        case 'icecream':
            content = <IceCream />;
            break;
        case 'snacks':
            content = <Snacks />;
            break;
        default:
            content = <div>Categoría no encontrada.</div>;
    }
    return (
        <div>
            {content}
        </div>
    );
};

export default CatalogProducts;
