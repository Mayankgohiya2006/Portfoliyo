import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "./Button";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let redirect = useNavigate();
  const location = useLocation();
  return (
    <div className="bg-black  z-50 fixed top-0 h-[10vh] w-full flex">
      <div className="w-1/3 h-full flex items-center px-10">
        <h1 className="lg:text-2xl md:text-lg text-sm  font5 text-white">MAYANK K. GOHIYA</h1>
      </div>
      <div className="w-1/3 h-full  flex items-center justify-center  gap-5 text-md font2 text-white">
        <h2 onClick={()=>{
          redirect("/")
        }} className={`cursor-pointer ${ location.pathname === "/" ? "text-orange-400" : "text-white"}`}>Home</h2>
        <h2 onClick={()=>{
          redirect("/about")
        }} className={`cursor-pointer ${ location.pathname === "/about" ? "text-orange-400" : "text-white"}`}>About</h2>
        <h2 onClick={()=>{
          redirect("/projects")
        }} className={`cursor-pointer ${ location.pathname === "/projects" ? "text-orange-400" : "text-white"}`}>Projects</h2>
        
      </div>
      <div className="w-1/3 h-full  text-white flex justify-end items-center px-15 flex-nowrap">
        <Button btnName="Contact" />
      </div>
    </div>
  );
};

export default Navbar;
