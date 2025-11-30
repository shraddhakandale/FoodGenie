import React, { useEffect, useState } from "react";
import CreateRecipe from "./CreateRecipe";
import ShowRecipe from "./ShowRecipe";
import Header from "./Header";
import { useSelector } from "react-redux";
import recipeLoader from "../utility/assets/loadingCooking.gif";
import { loadingMessages } from "../utility/constants";
import RecipeCardPopUp from "./RecipeCardPopUp";

const Body = () => {
  const loading = useSelector((store) => store.gptkey.loading);
  const [message, setMessage] = useState(0);

  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setMessage(
          (prevMsgCount) => (prevMsgCount + 1) % loadingMessages.length
        );
      }, 2000);
    } else {
      setMessage(0);
    }

    return () => clearInterval(interval);
  }, [loading]);

  return (
    <>
      <div className="m-10">
        <div className="flex flex-col justify-center items-center gap-16">
          <CreateRecipe />
          {loading && (
            <div
              className={`w-[300px] sm:w-[500px] transition-opacity duration-700 ease-out ${
                loading ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={recipeLoader}
                alt="recipe-loader-image"
                className="w-[50%] h-auto m-auto relative -top-8"
              />
              <p className="text-lg font-semibold animate-pulse -mt-8 text-center">
                👨‍🍳{loadingMessages[message]}
              </p>
            </div>
          )}
          <div
            className={`
              transition-opacity duration-700 ease-out
              ${loading ? "opacity-0" : "opacity-100"}
            `}
          >
            {!loading && <ShowRecipe />}
          </div>
          <RecipeCardPopUp />
        </div>
      </div>
    </>
  );
};

export default Body;
