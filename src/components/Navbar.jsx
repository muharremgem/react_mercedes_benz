import React from "react";
import icon from "../assets/icon.jpeg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-end bg-black p-8 text-white text-xl">
        <img className="w-[5rem] " src={icon} alt="icon" />
        <p className="flex mt-12 ml-[1rem] font-thin">Mercedes-Benz</p>
        <div className="flex mx-auto">
          <div className="flex gap-5 ">
            <NavLink
              className=" transition ease-in-out delay-100 hover:scale-125 text-white"
              to="/Home"
              style={({ isActive }) => ({
                color: isActive ? "red" : "",
              })}
            >
              Home
            </NavLink>
            <NavLink
              className="transition ease-in-out delay-100 hover:scale-125 text-white"
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "red" : "",
              })}
            >
              About
            </NavLink>
            <NavLink
              className="transition ease-in-out delay-100 hover:scale-125 text-white"
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "white" : "",
              })}
            >
              Logout
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
