import React, { useEffect, useState } from "react";

function Addproduct({ products, setProducts }) {
  const [productName, setProductName] = useState("");

  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productName || !price) {
      setError("Please enter both product name and price");
      return;
    }
    if (
      products.some(
        (product) => product.name.toLowerCase() === productName.toLowerCase()
      )
    ) {
      setError("Product already exists");
      return;
    }

    setProducts([...products, { name: productName, price }]);
    setProductName("");
    setPrice("");
    setError("");
  };
  return (
    <div className=" h-96 flex justify-center items-center gap-8 flex-col border-2 border-slate-300">
      <h3 className="font-semibold text-4xl">Add Product</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="font-medium text-xl mr-2">Product Name :- </label>
          <input
            className="border-2 border-slate-500 rounded p-2 px-4"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="font-medium text-xl mr-2">Price:-</label>
          <input
            className="border-2 border-slate-500 rounded p-2 px-4 ml-24"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button
          className="font-medium text-xl ml-28 p-2 px-16 bg-blue-500 rounded outline-none ml-20 hover:text-white"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Addproduct;
