"use client";
import { useState } from "react";

export function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = function (event) {
    event.preventDefault();

    // Create an item object with the current values of name, quantity, and category.
    const item = {
      id: Math.floor(Math.random() * 1000000).toString(),
      name,
      quantity,
      category,
    };

    onAddItem(item);

    // Reset the state variables to their initial values.
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const increment = function () {
    setQuantity(quantity + 1);
  };

  const decrement = function () {
    setQuantity(quantity - 1);
  };

  return (
    <main>
      <div className="w-96 shadow-md bg-red-100 p-4 m-4 rounded-lg">
        <form onSubmit={handleSubmit}>
          {/* Name input */}
          <input
            required
            type="text"
            value={name}
            placeholder="Item name"
            onChange={(event) => setName(event.target.value)}
            className="w-full text-black shadow-md h-10 p-2 bg rounded-lg"
          />

          {/* Quantity and category inputs */}
          <div className="w-full flex items-center justify-center space-x-4">
            <div className="w-1/2 p-2 flex items-center">
              <p className="text-xl w-20 font-semibold text-center text-black">
                {quantity}
              </p>
              <div className=" text-white text-3xl flex items-center space-x-2">
                <button
                  type="button"
                  onClick={increment}
                  disabled={quantity === 20}
                  className="bg-red-500 w-8 h-8 rounded disabled:opacity-50 flex items-center justify-center"
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={decrement}
                  disabled={quantity === 1}
                  className="bg-green-500 h-8 w-8 rounded disabled:opacity-50 flex items-center justify-center"
                >
                  -
                </button>
              </div>
            </div>

            {/* Category select */}
            <div className="w-1/2">
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="w-full text-black shadow-md p-2 h-10 rounded-lg"
              >
                <option value="category" disabled>
                  Category
                </option>
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen">Frozen Foods</option>
                <option value="canned">Canned Goods</option>
                <option value="dry">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="text-lg mt-2 p-2 font-bold bg-gray-500 text-white rounded-lg w-full hover:bg-black"
          >
            +
          </button>
        </form>
      </div>
    </main>
  );
}
