import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const CustomHeader = ({ navigationData }) => {
  const [toggler, SetToggler] = useState(true);
  const menuLinks = navigationData.map((route) => (
    <li key={route.id}>
      <a
        href={route.link}
        className="transition duration-300 hover:text-accent hover:cursor-pointer"
      >
        {route.name}
      </a>
    </li>
  ));

  return (
    <>
      <header className="relative flex items-center justify-between py-5">
        {/* Logo */}
        <div>
          <h1 className="text-xl font-bold transition duration-300 hover:text-accent">
            <a href="/index.html">Custom</a>
          </h1>
        </div>

        {/* Dropdown Menu */}
        <div onClick={() => SetToggler(!toggler)} className="md:block lg:hidden">
          {toggler ? (
            <Menu className="togglerIcon" />
          ) : (
            <X className="togglerIcon" />
          )}

          <ul className={`absolute right-0 flex flex-col gap-5 p-5 bg-base-300 w-[200px] rounded-xl transition-all duration-500 ease-in-out
          ${!toggler ? "opacity-100 top-16" : "opacity-0 -top-16"}`}>{menuLinks}</ul>
        </div>

        {/* Navigation Menu */}
        <nav className="lg:block md:hidden">
          <ul className="flex items-center gap-5">{menuLinks}</ul>
        </nav>

        {/* Button */}
        <div className="lg:block md:hidden">
          <button className="btn btn-accent font-bold text-white">
            Sign In
          </button>
        </div>
      </header>
    </>
  );
};

export default CustomHeader;
