import { createContext, useContext, useEffect, useState } from "react";
import { getData } from "../firebase/client";
import { Children } from "react";


export const CartContext = createContext();

export const useProducts = () => { 
  return useContext(CartContext);
};

export const CartComponentContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getData("Products");
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.log("Error fetching products", err);
        setLoading(false);
      }
    };
    const fetchCategories = async () => {
      try {
        const data = await getData("Category");
        setCategories(data);
      } catch (err) {
        console.log("Error fetching products", err);
      }
    };
    fetchProducts();
    fetchCategories();
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.categoryId === selectedCategory.id)
    : products;

  const addToCart = (product, quantity) => {
    const {id,title,price,image} = product
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.product.id === product.id
      );
      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += quantity;
        return updatedCart;
      }
      return [...prevCart, { product:{id,title,price,image}, quantity }];
    });
  };
  const updateCartQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + quantity }
          : item
      )
    );
  };
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };
  const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        products: filteredProducts,
        categories,
        loading,
        setSelectedCategory,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        cartQuantity,
        setCart,
        cart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
