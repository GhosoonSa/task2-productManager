import { useState } from "react";
import React from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState(["TV", "laptop", "Iphone"]);
  const [newProduct, setNewProduct] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };
  const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(searchTerm)
  );

  const handleChange = (event) => {
    setNewProduct(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setProducts([...products, newProduct]);
    alert("product has been added");
  };

  const handleDelete = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
    alert("Product has been deleted");
  };

  const handleRename = (index) => {
    const newName = prompt("Enter new product name:", products[index]);
    if (newName !== null && newName.trim() !== "") {
      const updatedProducts = [...products];
      updatedProducts[index] = newName;
      setProducts(updatedProducts);
      alert("Product has been renamed");
    }
  };
  return (
    <>
      <div className="rounded-xl shadow-xl h-auto mt-40 mb-14 pr-6 pl-6 pb-6 max-w-96 box-content m-auto">
        <h1 className="text-center my-6 font-semibold text-lg">
          Product Manager
        </h1>
        <form
          onSubmit={handleSubmit}
          className="content-normal grid grid-cols-4 grid-rows-3 gap-4"
        >
          <input
            type="search"
            name="sForP"
            placeholder=" Search products.."
            onChange={handleSearch}
            value={searchTerm}
            className="row-span-1 col-span-4 border border-gray-500 rounded-sm"
          />
          <input
            type="text"
            name={newProduct}
            placeholder=" Enter product name"
            onChange={handleChange}
            className="col-span-3 row-span-2 border border-gray-500 rounded-sm"
            required
          />
          <button
            type="submit"
            className="col-span-1 row-span-2 bg-blue-500 rounded-sm"
          >
            Add Product
          </button>
        </form>
        <ul>
          {filteredProducts.map((product, index) => (
            <>
              <div className="my-3 p-2 shadow-sm bg-gray-200 rounded-lg grid grid-cols-4 gap-4">
                <li key={index} className="col-span-2 text-left">
                  {product}
                </li>
                <button
                  type="button"
                  className="col-span-1 text-yellow-400"
                  onClick={() => handleRename(index)}
                >
                  Rename
                </button>
                <button
                  type="button"
                  className="col-span-1 text-red-500"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
