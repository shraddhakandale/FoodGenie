import React, { useState } from "react";
import appLogo from "../utility/assets/chef-gennie.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-2 bg-orange-600 w-full flex justify-between">
      <div className="max-h-16 flex items-center justify-between w-full">
        <div className="flex items-center gap-2 w-full">
          <img className="w-12 h-12" alt="app-logo" src={appLogo} />
          <span className="text-white font-bold text-2xl">FoodieGenie</span>
        </div>
        <div className="flex items-end">
          <button
            className="flex flex-col gap-1 md:hidden"
            onClick={() => setOpen(!open)}
          >
            <span
              className={`h-1 w-6 bg-white transition ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`h-1 w-6 bg-white transition ${
                open ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-1 w-6 bg-white transition ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Nav Links */}
      <nav
        className={`text-white font-bold md:flex md:items-center md:static absolute 
        top-16 left-0 w-full bg-orange-600 md:max-w-max transition-all duration-300 
        ${open ? "block" : "hidden md:block"}`}
      >
        <ul className="flex flex-col md:flex-row gap-4 p-4 md:pr-4">
          <li>
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/how-it-works" onClick={() => setOpen(false)}>
              How it Works
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
