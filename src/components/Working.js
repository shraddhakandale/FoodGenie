import React from "react";

const Working = () => {
  return (
    <div className="m-10 flex gap-4 flex-col">
      <h2 className="text-lg sm:text-xl font-bold ">Drop your ingredients:</h2>
      <p className="text-sm sm:text-md font-semibold">
        Type in whatever ingredients you have (comma separated) — even the ones you forgot
        existed. 👀🥕
      </p>
      <h2 className="text-lg sm:text-xl font-bold ">
        Add your Gemini API key:
      </h2>
      <p className="text-sm sm:text-md font-semibold">
        This app uses your own Gemini API key to generate recipes (don’t worry,
        it’s super safe — the key stays on your device). Just paste your key
        once and you’re good to go! 🔑✨
      </p>
      <h2 className="text-lg sm:text-xl font-bold ">Tap “Generate Recipe”:</h2>
      <p className="text-sm sm:text-md font-semibold">
        Our "Genie Chef" puts on its virtual apron and whips up delicious ideas
        in seconds. No drama, no MasterChef pressure.
      </p>
      <h2 className="text-lg sm:text-xl font-bold ">Get your recipe lineup:</h2>
      <p className="text-sm sm:text-md font-semibold">
        Boom. You get a list of recipes that actually make sense (your fridge
        will finally respect you).
      </p>
      <h2 className="text-lg sm:text-xl font-bold ">Cook, eat, repeat:</h2>
      <p className="text-sm sm:text-md font-semibold">
        Pick what you like, Follow the recipe, enjoy the meal, and pretend
        you’re a natural-born chef 😄🍳
      </p>
      <h2 className="text-lg sm:text-xl font-bold ">
        Don't know how to get API key?
      </h2>
      <p className="text-sm sm:text-md font-semibold">
        Click this link to get your API key — you might discover something cool!
        and its FREE!!!
      </p>
      <a
          className="font-bold underline text-blue-600"
          href="https://aistudio.google.com/api-keys"
          target="_blank"
          rel="noreferrer"
        >
          Generate Key
        </a>
    </div>
  );
};

export default Working;
