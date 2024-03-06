import React from "react";
import NavBar from "../widgets/NavBar";
import Products from "../widgets/Products";
import { IoConstructSharp } from "react-icons/io5";

const HomePage = () => {
  return (
    <div className=" bg-gradient-to-r from-primary to-secondary min-h-screen">
      {/* <NavBar />
      <Products /> */}
      <div className= " flex items-center justify-center">
      <IoConstructSharp />
      Under Construction
      </div>
    </div>
  );
};

export default HomePage;
