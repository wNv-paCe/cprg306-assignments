"use client";

import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
};

const fetchMealDetails = async (mealId) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  );
  const data = await response.json();
  return data.meals ? data.meals[0] : null;
};

export function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMealId, setSelectedMealId] = useState(null);
  const [selectedMealIngredients, setSelectedMealIngredients] = useState([]);

  const loadMealIdeas = async () => {
    if (ingredient) {
      const fetchedMeals = await fetchMealIdeas(ingredient);
      setMeals(fetchedMeals);
    }
  };

  const loadMealDetails = async (mealId) => {
    const mealDetails = await fetchMealDetails(mealId);
    if (mealDetails) {
      const ingredients = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = mealDetails[`strIngredient${i}`];
        const measure = mealDetails[`strMeasure${i}`];
        if (ingredient) {
          ingredients.push(`${ingredient} (${measure})`);
        }
      }
      setSelectedMealIngredients(ingredients);
    }
  };

  useEffect(() => {
    loadMealIdeas();
    setSelectedMealId(null);
    setSelectedMealIngredients([]);
  }, [ingredient]);

  const handleMealClick = (mealId) => {
    if (selectedMealId === mealId) {
      setSelectedMealId(null);
      setSelectedMealIngredients([]);
    } else {
      setSelectedMealId(mealId);
      loadMealDetails(mealId);
    }
  };

  return (
    <div>
      <h2 className="text-xl text-black font-bold">Meal Ideas</h2>
      {meals.length === 0 ? (
        <p className="text-black">No meal ideas found for {ingredient}</p>
      ) : (
        <>
          <p className="text-black mb-2">
            Here are some meal ideas using for {ingredient}
          </p>
          <ul>
            {meals.map((meal) => (
              <li
                key={meal.idMeal}
                onClick={() => handleMealClick(meal.idMeal)}
                className="cursor-pointer hover:bg-red-400 bg-red-200 rounded-lg p-2 my-1 w-96 text-black"
              >
                {/* Meal name */}
                <h3 className="font-semibold">{meal.strMeal}</h3>
                {/* Meal ingredients */}
                {selectedMealId === meal.idMeal &&
                  selectedMealIngredients.length > 0 && (
                    <ul className="text-sm text-gray-700">
                      <h4 className="mx-1">Ingredients needed:</h4>
                      {selectedMealIngredients.map((ingredient, index) => (
                        <li className="mx-5" key={index}>
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  )}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
