"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const sortedItems =
    sortBy === "groupedCategory"
      ? groupedItems
      : [...items].sort((a, b) => {
          if (sortBy === "name") {
            return a.name.localeCompare(b.name);
          } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
          }
          return 0;
        });

  return (
    <div className="p-6">
      {/* Sort Buttons */}
      <div className="mb-2 flex items-center flex-wrap">
        <h2 className="text-lg mr-2 text-gray-800 font-semibold">Sort By:</h2>
        <button
          onClick={() => setSortBy("name")}
          className={`py-2 w-24 mr-4 rounded ${
            sortBy === "name"
              ? "bg-blue-800 text-white font-bold"
              : "bg-blue-400 text-black"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`py-2 w-24 mr-4 rounded ${
            sortBy === "category"
              ? "bg-blue-800 text-white font-bold"
              : "bg-blue-400 text-black"
          }`}
        >
          Category
        </button>
        <button
          onClick={() => setSortBy("groupedCategory")}
          className={`py-2 w-32 rounded ${
            sortBy === "groupedCategory"
              ? "bg-blue-800 text-white font-bold"
              : "bg-blue-400 text-black"
          }`}
        >
          Grouped Category
        </button>
      </div>

      {/* Item List */}
      {sortBy === "groupedCategory" ? (
        <div>
          {Object.keys(sortedItems).map((category) => (
            <div key={category}>
              <h3 className="text-lg text-black font-bold mt-4">
                {category
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </h3>
              <ul className="w-1/3">
                {sortedItems[category].map((item) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="w-1/3">
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
