import React from "react";
import NavBar from "../widgets/NavBar";
import CartItem from "../widgets/CartItem";

const CartPage = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary min-h-screen">
      <NavBar />
      <CartItem />
    </div>
  );
};

export default CartPage;
