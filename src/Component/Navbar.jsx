import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import Button from "./Button";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let redirect = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black z-50 fixed top-0 w-full">
      <div className="flex items-center justify-between h-[10vh] px-5 lg:px-10">
        {/* Logo */}
        <h1 onClick={()=>{
          redirect("/")
        }} className="text-white text-lg lg:text-2xl font5">
          MAYANK K. GOHIYA
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-white font2">
          <h2
            onClick={() => redirect("/")}
            className={`cursor-pointer ${
              location.pathname === "/" ? "text-orange-400" : "text-white"
            }`}
          >
            Home
          </h2>
          <h2
            onClick={() => redirect("/about")}
            className={`cursor-pointer ${
              location.pathname === "/about" ? "text-orange-400" : "text-white"
            }`}
          >
            About
          </h2>
          <h2
            onClick={() => redirect("/projects")}
            className={`cursor-pointer ${
              location.pathname === "/projects"
                ? "text-orange-400"
                : "text-white"
            }`}
          >
            Projects
          </h2>

          <Button btnName="Contact" />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden  text-white text-2xl">
          {menuOpen ? (
            <HiX onClick={() => setMenuOpen(false)} />
          ) : (
            <HiMenu onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden  bg-black text-white flex flex-col items-center gap-5 pb-5">
          <h2
            onClick={() => {
              redirect("/");
              setMenuOpen(false);
            }}
            className="cursor-pointer"
          >
            Home
          </h2>
          <h2
            onClick={() => {
              redirect("/about");
              setMenuOpen(false);
            }}
            className="cursor-pointer"
          >
            About
          </h2>
          <h2
            onClick={() => {
              redirect("/projects");
              setMenuOpen(false);
            }}
            className="cursor-pointer"
          >
            Projects
          </h2>
          <Button btnName="Contact" />
        </div>
      )}
    </div>
  );
};

export default Navbar;
