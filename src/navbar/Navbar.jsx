import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 ">
        <div className="flex flex-wrap justify-between mx-2 p-3 max-w-screen-2xl ">
          <img
            src="ship.png"
            className="h-8 "
            alt="Logo"
          />
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
