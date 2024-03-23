import React, { useState } from "react";

function ProductList({ products,removeProduct }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleRemove = (index) => {
    removeProduct(index);
  };

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">Product List</h3>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-blue-500"
      />
      {filteredProducts.length === 0 ? (
        <p className="ml-[40%] p-10 text-red-600 text-2xl font-serif">No Product Found</p>
      ) : (
        <ul className="p-2 ">
          {filteredProducts.map((product, index) => (
            <li
              key={index}
              className="border-b border-gray-300 py-2 flex justify-between items-center text-xl"
            >
              <div>
                <span className="font-semibold">{product.name}</span>
              </div>
              <span className="font-semibold">${product.price}</span>
              <button onClick={() => handleRemove(index)}
                      className="text-red-600 font-serif font-extrabold hover:text-red-800">
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
