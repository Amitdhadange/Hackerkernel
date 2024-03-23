import React, { useState } from "react";

function ProductList({ products }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        <p>No Product Found</p>
      ) : (
        <ul className="p-2 w-">
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              className="border-b border-gray-300 py-2 flex justify-between items-center"
            >
              <div>
                <span className="font-semibold">{product.name}</span>
              </div>
              <span className="font-semibold">${product.price}</span>
              <button className="text-red-600 font-serif font-extrabold hover:text-red-800">
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
