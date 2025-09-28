import React from "react";
import CustomHeader from "./CustomHeader";

const navigationData = [
  { id: 1, name: "Home", path: "/home" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Contact", path: "/contact" },
  { id: 5, name: "Blog", path: "/blog" },
];

const Header = () => {
  return (
    <>
      <header>
        <div className="navbar">
          {/* Dropdown and Logo */}
          <div className="navbar-start">
            {/* Dropdown */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {navigationData.map((route) => (
                <li key={route.id}>
                  <a href={route.path}>{route.name}</a>
                </li>
              ))}
              </ul>
            </div>
            {/* Logo */}
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>

          {/* Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navigationData.map((route) => (
                <li key={route.id}>
                  <a href={route.path}>{route.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Button */}
          <div className="navbar-end">
            <a className="btn btn-accent">Button</a>
          </div>
        </div>
      </header>

        <CustomHeader navigationData={navigationData}></CustomHeader>
    </>
  );
};

export default Header;
