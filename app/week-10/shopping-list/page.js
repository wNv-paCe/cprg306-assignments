"use client";

import { useState, useEffect } from "react";
import { NewItem } from "./new-item";
import { ItemList } from "./item-list";
import { MealIdeas } from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import {
  getItems,
  addItem,
  updateItem,
  deleteItem,
} from "../_services/shopping-list-service";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();

  // Function to load items from Firestore for the current user
  const loadItems = async () => {
    if (user) {
      try {
        const itemsList = await getItems(user.uid);
        setItems(itemsList);
      } catch (error) {
        console.error("Error loading items", error);
      }
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  const handleAddItem = async (newItem) => {
    if (user) {
      try {
        const itemId = await addItem(user.uid, newItem);
        setItems((prevItems) => [...prevItems, { id: itemId, ...newItem }]);
      } catch (error) {
        console.error("Error adding item", error);
      }
    }
  };

  const handleItemSelect = (item) => {
    const cleanName = item.name
      .split(",")[0]
      .replace(/[^\w\s]/gi, "")
      .trim();
    setSelectedItemName(cleanName);
  };

  // Function to update an item in Firestore
  const handleUpdateItem = async (itemId, updateData) => {
    if (user) {
      try {
        await updateItem(user.uid, itemId, updateData);
        setItems((prevItems) =>
          prevItems.map((item) =>
            item.id === itemId ? { ...item, ...updateData } : item
          )
        );
      } catch (error) {
        console.error("Error updating item", error);
      }
    }
  };

  // Function to delete an item from Firestore
  const handleDeleteItem = async (itemId) => {
    if (user) {
      try {
        await deleteItem(user.uid, itemId);
        setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
      } catch (error) {
        console.error("Error deleting item", error);
      }
    }
  };

  if (!user) {
    return (
      <main className="bg-gray-800 flex min-h-screen flex-col items-center p-14">
        <h1 className="text-white text-2xl font-bold mb-5">Shopping List</h1>
        <p>Please sign in to use the shopping list.</p>
      </main>
    );
  }

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
            <ItemList
              items={items}
              onItemSelect={handleItemSelect}
              onUpdatedItem={handleUpdateItem}
              onDeleteItem={handleDeleteItem}
            />
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
