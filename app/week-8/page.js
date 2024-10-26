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
    <main className="bg-red-300 p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-black">Shopping List</h1>
      <div className="flex">
        {/* Left Part */}
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        {/* Right Part */}
        <div>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
