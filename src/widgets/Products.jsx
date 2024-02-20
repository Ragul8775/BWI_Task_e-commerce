import React, { useEffect, useState } from "react";
import RatingStar from "./RatingStar";
import { useCart } from "../context/CartContext";
const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4 mx-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col rounded-md bg-gradient-to-r from-slate-200 to-gray-400  shadow-xl h-full"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-72 w-full object-cover rounded-t-md"
            />
            <div className="flex flex-col justify-between p-2 h-full">
              <div>
                <h3 className="font-semibold">Product: {product.title}</h3>
                <p className="text-sm font-light line-clamp-2">
                  {product.description}
                </p>
              </div>
              <div className="flex justify-between items-end pt-2">
                <div className="flex flex-col justify-center items-start">
                  <div className="flex gap-2 m-2">
                    <p>${product.price}</p>
                    <p className="text-red-500">
                      -{product.discountPercentage}%
                    </p>
                  </div>
                  <div>
                    <RatingStar rating={product.rating} />
                  </div>
                </div>

                <button
                  onClick={() => addToCart(product)}
                  className="mt-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
