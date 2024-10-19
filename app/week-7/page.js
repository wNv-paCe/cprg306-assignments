"use client";

import { useState } from "react";
import { NewItem } from "./new-item";
import { ItemList } from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="bg-red-300 p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-black">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
