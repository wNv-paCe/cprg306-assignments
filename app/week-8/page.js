"use client";

import { useState } from "react";
import { NewItem } from "./new-item";
import { ItemList } from "./item-list";
import { MealIdeas } from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanName = item.name
      .split(",")[0]
      .replace(/[^\w\s]/gi, "")
      .trim();
    setSelectedItemName(cleanName);
  };

  return (
    <div className="bg-gray-400 min-h-screen flex justify-center items-center">
      <main className="bg-red-300 p-6 flex flex-col items-center w-full max-w-4xl">
        <h1 className="text-4xl font-extrabold mb-8 text-black text-center">
          Shopping List
        </h1>
        <hr className="border-t-2 border-gray-600 w-full mb-8" />
        <div className="flex justify-between w-full">
          {/* Left Part */}
          <div className="w-1/2 pr-1">
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
          {/* Right Part */}
          <div className="w-1/2 pl-1">
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </main>
    </div>
  );
}
