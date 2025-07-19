import React from "react";
import {useLocation } from "react-router-dom";


function  Cart(){
  const location = useLocation();
  const cart = location.state?.cart || [];
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return(
     <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-3 mb-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="border p-3 rounded flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">₹{item.price}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="text-right font-bold">
            Total: ₹{total}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;