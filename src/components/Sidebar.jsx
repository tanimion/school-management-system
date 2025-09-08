import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ className }) => {
  const linkClass =
    "block px-4 py-2 rounded hover:bg-gray-700 transition-colors";

  const activeClass = "bg-gray-700";

  return (
    <aside className={className}>
      <h2 className="text-2xl font-bold p-4 border-b border-gray-700">
        School Records
      </h2>
      <nav className="mt-4">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? `${linkClass} ${activeClass}` : linkClass)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/students"
          className={({ isActive }) => (isActive ? `${linkClass} ${activeClass}` : linkClass)}
        >
          Students
        </NavLink>
        <NavLink
          to="/teachers"
          className={({ isActive }) => (isActive ? `${linkClass} ${activeClass}` : linkClass)}
        >
          Teachers
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;