"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="p-4">
      {/* Sort Buttons */}
      <div className="mb-4 flex items-center">
        <h2 className="text-lg font-semibold mr-2">Sort By:</h2>
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 mr-2 rounded ${
            sortBy === "name" ? "bg-blue-300" : "bg-white"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded ${
            sortBy === "category" ? "bg-blue-300" : "bg-white"
          }`}
        >
          Sort by Category
        </button>
      </div>

      {/* Item List */}
      <ul className="w-1/2">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}
