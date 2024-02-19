import React from "react";
import NavBar from "../widgets/NavBar";
import Products from "../widgets/Products";

const HomePage = () => {
  return (
    <div className=" bg-gradient-to-r from-primary to-secondary min-h-screen">
      <NavBar />
      <Products />
    </div>
  );
};

export default HomePage;
