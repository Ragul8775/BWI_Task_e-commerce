// CartIcon.js
import React from 'react';
import { useCart } from '../context/CartContext';
import { FiShoppingCart } from 'react-icons/fi';

const CartIcon = () => {
  const { cartItems } = useCart();

  return (
    <div className="relative inline-block">
      <FiShoppingCart className="h-6 w-6 text-gray-700" />
      <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
        {cartItems.length}
      </span>
    </div>
  );
};

export default CartIcon;
