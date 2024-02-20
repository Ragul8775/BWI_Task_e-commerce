import React, { useState } from "react";

import ProfileDropdown from "./ProfileDropdown"; // Assuming you've created this component
import { CiShoppingCart } from "react-icons/ci";
import Logo from "../assets/icon_logo.png";
import CartIcon from "./CartIcon";
const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-primary to-secondary shadow-2xl text-light ">
      <div className="mx-2 px-2 py-5 w-full flex justify-between items-center">
        <div
          onClick={() => {
            window.location.href = "/";
          }}
          className="flex justify-center items-center space-x-4 cursor-pointer"
        >
          <h1 className="text-3xl font-semibold text-light opacity-80">
            CartFusion
          </h1>
        </div>
        <div className="flex justify-between items-center gap-6 mx-6">
          <a href="/cart" className="py-2 px-4 rounded hover:drop-shadow-2xl ">
            <CartIcon />{" "}
          </a>

          <div className="flex">
            <ProfileDropdown />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
