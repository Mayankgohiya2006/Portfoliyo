import React from "react";
import GC from "../assets/Images/GClogo.webp";

const Archievement = (props) => {
  // console.log(props);

  return (
    <div>
      <div className="h-80 w-120 text-white p-5 flex  flex-col justify-between bg-[#1C1C1C] mt-15">
        <h1 className="text-center text-3xl font5">{props.data.title}</h1>
        <p className="text-sm  text-justify font3">{props.data.Desc}</p>
        <div className=" h-10 w-full flex items-center gap-6  ">
          <div className=" h-full w-10 ">
            <img
              src={props.data.logo}
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <h1 className="text-2xl">-{props.data.by} </h1>
        </div>
      </div>
    </div>
  );
};

export default Archievement;
