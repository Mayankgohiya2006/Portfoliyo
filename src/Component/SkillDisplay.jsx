import React from "react";
import { FaPlus } from "react-icons/fa6";

const SkillDisplay = (props) => {
    // console.log(props);
    
  return (
    <div>
    <div className="h-20 w-full group cursor-pointer  flex justify-between items-center px-1 transition-all duration-200  hover:bg-[rgba(193,193,193,0.22)] hover:backdrop-blur-[3.2px]  hover:shadow-[0_4px_30px_rgba(0,0,0,0.1)] ">
      <h1 className="text-2xl text-gray-200 group-hover:translate-x-3 transition-all duration-200 group-hover:text-white">
        {props.data.sno}
      </h1>
      <h1 className="text-gray-200 text-2xl group-hover:-translate-x-5 transition-all duration-500 group-hover:text-white">
        {props.data.skillname}
      </h1>
      <FaPlus className="text-gray-200 text-2xl mr-5" />
    </div>
    <div  className="h-[0.3px] w-full bg-gray-500"></div>
    </div>
  );
};

export default SkillDisplay;
