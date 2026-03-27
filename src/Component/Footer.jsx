import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { IoArrowUpOutline } from "react-icons/io5";
import footer from "../assets/Images/footer.webp";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  let redirect = useNavigate()

  return (
    <section
      className="h-[90vh] border-t border-gray-300 w-full bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${footer})` }}
    >
      <div className="h-[50vh]  flex flex-col items-center justify-between w-full">
        <div className="h-20 w-100 mt-10 flex items-center justify-center gap-14 ">
          <div  className="h-10 w-10 cursor-pointer text-white flex items-center justify-center rounded-lg hover:bg-amber-600 hover:border-black hover:text-black border border-gray-50">
            <a  href="https://www.linkedin.com/in/mayank-gohiya-8711393b0/"><FaLinkedin className="text-xl" /></a>
          </div>
          <div className="h-10 w-10 cursor-pointer text-white flex items-center justify-center rounded-lg hover:bg-amber-600 hover:border-black hover:text-black border border-gray-50">
           <a href="https://www.instagram.com/m_aan005?igsh=ZGhyaWJ3N3Fpd2Rt"> <FaInstagram  className="text-xl" /></a>
          </div>
          <div className="h-10 w-10 cursor-pointer text-white flex items-center justify-center rounded-lg hover:bg-amber-600 hover:border-black hover:text-black border border-gray-50">
            <FaTwitter className="text-xl" />
          </div>
        </div>
        <div className="flex flex-col text-5xl gap-4 text-white items-center ">
          <h1 className="hover:text-amber-600 font1 cursor-pointer">
            +91 7440651631
          </h1>
          <h1 className="hover:text-amber-600 font1 cursor-pointer">
            officialmayank2525@gmail.com
          </h1>
        </div>
        <div className=" h-20  w-100  flex items-center justify-center  gap-15 text-lg  font2 text-white">
          <h2 onClick={()=>{
            redirect("/")
          }} className="cursor-pointer  hover:text-gray-300">Home</h2>
          <h2 onClick={()=>{
                 redirect("/about")
          }} className="cursor-pointer  hover:text-gray-300">About</h2>
          <h2 onClick={()=>{
                 redirect("/projects")
          }} className="cursor-pointer  hover:text-gray-300">Projects</h2>
        </div>
      </div>
      <div className="h-[30vh]  w-full flex flex-col items-center justify-center ">
        <div className=" group h-25 cursor-pointer overflow-hidden w-130">
          <div className="flex gap-5 items-center">
            <h1 className="text-8xl group-hover:-translate-y-25 transition-all duration-200 flex text-white font2 ">
              Let's Talk
            </h1>
            <IoArrowUpOutline className="text-7xl rotate-45 text-white" />
          </div>
          <h1 className="text-8xl group-hover:-translate-y-25 transition-all duration-200   text-white font2">
            Let's Talk{" "}
          </h1>
        </div>
        <div className="h-1 w-130 bg-gray-300"></div>
      </div>
      <div className="h-[10vh] w-full flex items-center justify-between px-20 text-white">
        <h1>© 2026 Mayank, All Rights Reserved</h1>
        <h1>Jabalpur India</h1>
      </div>
    </section>
  );
};

export default Footer;
