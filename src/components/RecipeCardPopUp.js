import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../utility/popUpSlice";

const RecipeCardPopUp = () => {
  // const r = useSelector(store => store.recipe.generatedRecipes[0])
  const r = {
    name: "Spicy Soya Paneer Stir-fry",
    classification: "veg",
    ingredients: [
      "Paneer",
      "Soya chunks",
      "Sauce",
      "Oregano",
      "Oil",
      "Salt",
      "Black Pepper",
      "Chili powder",
      "Garlic powder",
    ],
    instructions: [
      "Rehydrate soya chunks according to package instructions, then squeeze out excess water and chop if large.",
      "Cut paneer into bite-sized cubes.",
      "Heat oil in a pan over medium heat. Add rehydrated soya and sauté until lightly browned.",
      "Add paneer cubes to the pan and cook for another 3-4 minutes until lightly golden.",
      "Pour in the sauce, sprinkle with oregano, chili powder, garlic powder, salt, and black peppeselectedRecipe.",
      "Stir well to combine and simmer for 5-7 minutes, or until the sauce thickens and coats the ingredients.",
    ],
  };
  const dispatch = useDispatch();
  const { isOpen, selectedRecipe } = useSelector((store) => store.popup);
  if (!isOpen) return;
  return (
    <div>
      <div
  className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
  onClick={() => dispatch(closeModal())}
>
  <div
    className="
      bg-orange-50 
      w-[300px] sm:w-[500px] 
      max-h-[90vh] 
      overflow-y-auto 
      p-4 
      relative 
      rounded-lg 
      my-10
    "
    onClick={(e) => e.stopPropagation()}  // prevents modal closing on inner click
  >
    <button
      className="border-2 border-orange-300 hover:border-orange-500 absolute right-4 text-orange-300 hover:text-orange-500 w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] rounded-full flex justify-center items-center"
      onClick={() => dispatch(closeModal())}
    >
      X
    </button>

    <p className="absolute left-4 text-sm sm:text-md font-semibold">
      {(selectedRecipe.classification === "veg" ? "🟢" : "🔴") +
        selectedRecipe.classification.charAt(0).toUpperCase() +
        selectedRecipe.classification.slice(1)}
    </p>

    <div className="mt-8 flex flex-col gap-4">
      <h2 className="text-lg sm:text-xl font-bold text-center">
        {selectedRecipe.name}
      </h2>

      <div>
        <h3 className="text-md sm:text-lg font-semibold mb-2">Ingredients:</h3>
        <ul className="pl-4">
          {selectedRecipe.ingredients.map((ingredient, index) => (
            <li className="list-disc" key={index}>
              {ingredient}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-md sm:text-lg font-semibold mb-2">Instructions:</h3>
        <ul className="pl-4">
          {selectedRecipe.instructions.map((instruction, index) => (
            <li className="list-disc" key={index}>
              {instruction}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default RecipeCardPopUp;
