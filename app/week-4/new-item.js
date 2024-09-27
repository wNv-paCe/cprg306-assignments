"use client";
import { useState } from "react";

export function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = function () {
    setQuantity(quantity + 1);
  };

  const decrement = function () {
    setQuantity(quantity - 1);
  };

  return (
    <div className="bg-red-100 rounded-lg shadow-md w-52 h-16 flex items-center justify-center">
      <p className="text-xl w-12 text-center">{quantity}</p>
      <button
        onClick={increment}
        disabled={quantity === 20}
        className="bg-red-500 text-white p-2 w-12 rounded m-2 disabled:opacity-50"
      >
        +
      </button>
      <button
        onClick={decrement}
        disabled={quantity === 1}
        className="bg-green-500 text-white p-2 w-12 rounded m-2 disabled:opacity-50"
      >
        -
      </button>
    </div>
  );
}
