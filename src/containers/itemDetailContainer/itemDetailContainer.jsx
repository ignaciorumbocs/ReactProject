import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../itemDetail/itemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [datos, setDatos] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(json => {
        setDatos(json);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      {loading ? <div>Cargando...</div> : <ItemDetail producto={datos} />}
    </>
  );
};

export default ItemDetailContainer;

 
