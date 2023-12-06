import Item from "antd/es/list/Item";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    "/",
    "business",
    "education",
    "entertainment",
    "technology",
    "sport",
  ];

  return (
    <nav className="shadow-md py-3">
      <div className="flex items-center gap-2 max-w-5xl mx-0">
        <div className="flex items-center gap-2">
          <h3 className="text-blue-500">News O'clock </h3>
          <div>
            {links.map((item) => (
              <NavLink to={item}> {item === "/" ? "Home" : item} </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
