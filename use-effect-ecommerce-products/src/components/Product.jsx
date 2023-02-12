import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import "./Product.css";

const getData = () => {
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // as soon as this component is mounted,
  // wants to get the product data,
  // display on the UI
  const fetchAndUpdateProduct = async () => {
    setLoading(true);
    try {
      const data = await getData();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAndUpdateProduct();
  }, []);

  // maintain loading indicator
  // set Error state
  console.log("products", products);

  return (
    <div>
      <h1 style={{color:"teal"}}><em>Products Page</em></h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h2>Something went wrong</h2>
      ) : (
        <div className="container">
          {products.map((item) => (
            <ProductItem key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Products;
