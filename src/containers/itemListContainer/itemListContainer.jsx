import { useEffect, useState } from "react";
import './itemListContainer.css';
import { useParams } from "react-router-dom";
import { ItemList } from "../../components/itemList/itemList";

const categoryMap = {
  'Electronica': 'electronics',
  'Joyeria': 'jewelery',
  'Ropa de hombre': "men's clothing",
  'Ropa de Mujer': "women's clothing"
};

const ItemListContainer = () => {
  const { idCategory } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiCategory = categoryMap[idCategory];
    const apiUrl = 'https://fakestoreapi.com/products';
    const fetchUrl = apiCategory ? `${apiUrl}/category/${apiCategory}` : apiUrl;

    fetch(fetchUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);  
      });
  }, [idCategory]);

  return (
    <>
      {loading ? <div>Cargando...</div> : <ItemList productos={products} />}
    </>
  );
};

export default ItemListContainer;
