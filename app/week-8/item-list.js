"use client";

import { useState } from "react";
import Item from "./item";

export function ItemList({ items, onItemSelect }) {
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
          className={`p-2 mr-2 rounded ${
            sortBy === "name"
              ? "bg-blue-800 text-white font-bold"
              : "bg-blue-400 text-black"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`p-2 mr-2 rounded ${
            sortBy === "category"
              ? "bg-blue-800 text-white font-bold"
              : "bg-blue-400 text-black"
          }`}
        >
          Category
        </button>
        <button
          onClick={() => setSortBy("groupedCategory")}
          className={`p-2 rounded ${
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
              <ul>
                {sortedItems[category].map((item) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                    onSelect={() => onItemSelect(item)}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul>
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              onSelect={() => onItemSelect(item)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
