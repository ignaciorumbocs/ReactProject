import React from 'react';
import './itemListContainer.css';
import { ItemList } from "../../components/itemList/itemList";
import { useProducts } from '../../context/cartContext';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const ItemListContainer = () => {
  const {idCategory} = useParams()
  const { products,loading,setSelectedCategory,categories } = useProducts();

  useEffect(()=>{
    if(idCategory){
      const category = categories.find(cat => cat.name.toLowerCase() === idCategory.toLowerCase());
      setSelectedCategory(category)
    }else{
      setSelectedCategory(null)
    }
  },[idCategory,categories,setSelectedCategory])

  return (
    <>
      {loading ? <div>Cargando...</div> : <ItemList productos={products} />}
    </>
  )
}

export default ItemListContainer;
