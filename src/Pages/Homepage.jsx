import React, { useEffect, useState } from "react";
import AddProductForm from "./Addproduct";
import ProductList from "./Productlist";

function HomePage({ setIsLoggedIn }) {
  const [products, setProducts] = useState([]);
  
  const removeProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };
  return (
    <>
      <div className="p-4 flex justify-between">
        <h2 className="text-2xl font-semibold mb-4">Home Page</h2>
        <button
          onClick={handleLogout}
          className="text-white bg-red-500 hover:bg-red-600 text-black font-semibold px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </div>
      <div>
        <AddProductForm products={products} setProducts={setProducts} />
        <ProductList products={products} removeProduct={removeProduct}/>
      </div>
    </>
  );
}

export default HomePage;
