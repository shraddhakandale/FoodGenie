import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGptKey, addToCache } from "../utility/gptSlice";
import { addGeneratedRecipes, addIngredients } from "../utility/recipeSlice";
import useGenerateRecipe from "../hooks/useGenerateRecipe";
import { prompt } from "../utility/constants";
import chefImg from "../utility/assets/chef.png";
import { getIngredientSuggestions } from "../utility/getSearchResults";

const CreateRecipe = () => {
  const gptKey = useRef();
  const dispatch = useDispatch();
  const userKey = useSelector((store) => store.gptkey.userKey);
  const ingredients = useSelector((store) => store.recipe.ingredients);
  const { generateRecipes, error } = useGenerateRecipe();

  const [searchQuery, setSeachQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const cacheSuggestions = useSelector((store) => store.gptkey.cache);

  // ---------------------------
  // FIXED USEEFFECT (NO INFINITE LOOPS)
  // ---------------------------
  useEffect(() => {
    if (!userKey || !searchQuery.trim()) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(() => {
      // CACHE HIT → Instant return
      if (cacheSuggestions[searchQuery]) {
        setSuggestions(cacheSuggestions[searchQuery]);
        return;
      }

      // CACHE MISS → AI CALL
      getSuggestions(searchQuery, userKey);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]); // ⭐ ALL required deps

  // ---------------------------
  // FIXED ASYNC FUNCTION
  // ---------------------------
  const getSuggestions = async (searchQuery, userKey) => {
    if (!searchQuery.trim()) return;
    const results = await getIngredientSuggestions(searchQuery, userKey);
    dispatch(addToCache({ query: searchQuery, suggestions: results }));
    setSuggestions(results);
  };

  const handleClick = async () => {
    dispatch(addGptKey(gptKey.current.value));

    const key = userKey ? userKey : gptKey.current.value;
    const results = await generateRecipes(key, prompt, ingredients);

    dispatch(addGeneratedRecipes(results));
  };

  return (
    <div>
      <div className="flex flex-col gap-12 w-[300px] sm:w-[500px]">
        <div className="flex w-[300px] sm:w-[500px] gap-4 items-center">
          <img
            src={chefImg}
            alt="talking-chef-image"
            className="w-32 h-32 sm:w-48 sm:h-48 rounded-full"
          />
          <h1 className="text-2xl sm:text-3xl font-bold text-orange-800">
            Let’s unlock a hidden dish! What ingredients do you have?
          </h1>
        </div>

        <form
          className="flex flex-col gap-4 justify-center items-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            name="input"
            className="bg-orange-50 border-2 border-orange-300 text-gray-800 
            focus:ring-orange-500 focus:border-orange-500 outline-none
            placeholder-gray-400 rounded-md p-2 w-[300px] sm:w-[500px]"
            onChange={(e) => {
              setSeachQuery(e.target.value);
              dispatch(addIngredients(e.target.value));
            }}
            placeholder="Enter ingredients comma separated"
            onFocus={() => setShowSuggestions(true)} // ⭐ FIXED
            onBlur={() => setTimeout(() => setShowSuggestions(false), 150)} // ⭐ FIXED
          />

          {/* Only show suggestions when available */}
          {showSuggestions && suggestions.length > 0 && (
            <ul className="bg-white w-[300px] sm:w-[500px] shadow-md border rounded-md p-2">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="p-1 cursor-pointer hover:bg-orange-100"
                  onMouseDown={() => {
                    // Prevent blur from hiding before click
                    setSeachQuery(suggestion);
                    dispatch(addIngredients(suggestion));
                  }}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}

          <input
            type="password"
            name="input"
            ref={gptKey}
            onChange={(e) => dispatch(addGptKey(e.target.value))}
            className="bg-orange-50 border-orange-300 text-gray-800 
            focus:ring-orange-500 focus:border-orange-500 outline-none
            placeholder-gray-400 rounded-md p-2 w-[300px] sm:w-[500px] border-2"
            placeholder="Enter your Gemini API key"
          />

          <button
            onClick={handleClick}
            className="bg-orange-500 text-white font-bold hover:bg-orange-400 rounded-md p-2 w-[300px] sm:w-[500px]"
          >
            Create Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateRecipe;
