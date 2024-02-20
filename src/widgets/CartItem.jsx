import React from "react";
import { useCart } from "../context/CartContext";
import RatingStar from "./RatingStar";
import { RiDeleteBinLine } from "react-icons/ri";
const CartItem = () => {
  const { cartItems, clearCart, removeFromCart } = useCart();
  return (
    <div>
      <div className="flex justify-around items-center p-2 bg-gradient-to-r from-black to-gray-400 m-2 rounded-md">
        <h2 className="text-2xl font-semibold text-light drop-shadow-lg shadow-black ">
          Cart Items:{cartItems.length}
        </h2>
        <div
          onClick={clearCart}
          className="flex flex-col justify-center items-center hover:text-red-500 hover:cursor-pointer"
        >
          <RiDeleteBinLine className="text-2xl text-black " />
          <p className="hover:text-red-500 text">Delete All </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4 mx-2">
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col rounded-md bg-gradient-to-r from-slate-200 to-gray-400  shadow-xl h-full"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="h-72 w-full object-cover rounded-t-md"
            />
            <div className="flex flex-col justify-between p-2 h-full">
              <div>
                <h3 className="font-semibold">Product: {item.title}</h3>
                <p className="text-sm font-light line-clamp-2">
                  {item.description}
                </p>
              </div>
              <div className="flex justify-between items-end pt-2">
                <div className="flex flex-col justify-center items-start">
                  <div className="flex gap-2 m-2">
                    <p>${item.price}</p>
                    <p className="text-red-500">-{item.discountPercentage}%</p>
                  </div>
                  <div>
                    <RatingStar rating={item.rating} />
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-auto bg-red-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItem;
