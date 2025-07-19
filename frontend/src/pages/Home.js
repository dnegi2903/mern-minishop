import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error("Error fetching products", err));
  }, []);

  const handleAddToCart = (product) => {
    setCart(prev => [...prev, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-6">Welcome to MiniShop 🛍️</h1>

    <button
      onClick={() => navigate("/cart", { state: { cart } })}
      className="mb-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
    >
      Go to Cart ({cart.length})
    </button>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard 
          key={product._id} 
          product={product} 
          onAddToCart={handleAddToCart} 
        />
      ))}
    </div>
  </div>
);

}

export default Home;
