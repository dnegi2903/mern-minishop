import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">
          <Link to="/">🛒 MiniShop</Link>
        </h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/products" className="hover:text-yellow-400">Products</Link>
          <Link to="/cart" className="hover:text-yellow-400">Cart</Link>
          <Link to="/login" className="hover:text-yellow-400">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
