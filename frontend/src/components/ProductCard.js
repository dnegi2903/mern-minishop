import React from "react";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-40 object-cover mb-3 rounded" 
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-700 mb-2">₹{product.price}</p>
      <button 
        onClick={() => onAddToCart(product)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
