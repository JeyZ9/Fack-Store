import React, { createContext, useState, useEffect } from 'react';

// Create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // Products state
  const [products, setProducts] = useState([]);
    // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
