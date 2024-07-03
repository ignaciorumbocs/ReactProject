import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../itemDetail/itemDetail';
import { getData } from '../../firebase/client';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(()=>{
    const fetchProduct = async ()=>{
      try {
        const data = await getData('Products');
        const selectedProduct = data.find(product => product.id === parseInt(id));
        if(!selectedProduct){
          setProduct(null)
        }else{
          setProduct(selectedProduct);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    }
    fetchProduct()
  },[id])


return (
  <>
    {loading ? <div>Cargando...</div> : (product ? <ItemDetail producto={product} /> : <div>El producto no existe</div>)}
  </>
);
};

export default ItemDetailContainer;

 
