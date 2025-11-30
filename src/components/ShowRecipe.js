import React from "react";
import RecipeCards from "./RecipeCards";
import { useSelector } from "react-redux";

const ShowRecipe = () => {
  const generatedRecipes = useSelector(
    (store) => store.recipe.generatedRecipes
  );
  console.log(generatedRecipes)
  if (!generatedRecipes) return;
  return (
    <div className="flex flex-col gap-6 justify-center items-center">
      <h1 className="text-lg sm:text-xl font-bold text-pink-900 animate-pulse">Tadaa! Your recipes are ready! 🍽️</h1>
      {generatedRecipes.map((generatedRecipe) => (
        <RecipeCards key={generatedRecipe.name} recipe={generatedRecipe} />
      ))}
    </div>
  );
};

export default ShowRecipe;
