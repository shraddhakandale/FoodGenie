import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../utility/popUpSlice";

const RecipeCards = ({ recipe }) => {
  const dispatch = useDispatch();
  const handleRecipePopUp = (recipe) => {
    dispatch(openModal(recipe));
  };
  return (
    <div
      className="shadow-[1px_2px_4px_1px_#0000003D] rounded-md px-2 py-3 w-[300px] sm:w-[500px] hover:cursor-pointer bg-orange-200 bg-opacity-30 hover:bg-opacity-40 flex flex-col gap-1.5 transform transition-transform duration-200 hover:scale-105"
      onClick={() => handleRecipePopUp(recipe)}
    >
      <div className="w-full flex justify-between">
        <h2 className="text-lg sm:text-xl font-bold text-orange-800 max-w-[75%]">
          {recipe.name}
        </h2>
        <span className="text-sm sm:text-md text-orange-800 font-semibold">
          {(recipe.classification === "veg" ? "🟢" : "🔴") +
            recipe.classification.charAt(0).toUpperCase() +
            recipe.classification.slice(1)}
        </span>
      </div>
      <h3 className="text-md sm:text-lg font-semibold text-gray-600">
        Instructions:
      </h3>
      <p className="line-clamp-2 text-gray-600">
        {recipe.instructions.join(" ")}
      </p>
    </div>
  );
};

export default RecipeCards;
