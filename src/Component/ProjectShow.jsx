import React from "react";

const ProjectShow = (props) => {
  return (
    <div className="group h-[69vh] w-[45vw]">
      <div className="h-[60vh] w-[45vw]">
        <img src={props.project.img} className="h-full w-full group-hover:scale-[1.01] ease-in duration-200 object-cover object-left " alt="" />
      </div>
      <div className="flex gap-55">
       <h1 className="text-white text-3xl m-3 font3 opacity-0 group-hover:opacity-100 group-hover:-translate-y-3 transition mt-5">{props.project.title}</h1>
       <h1 className="text-orange-500 text-xl m-3 font3 opacity-0 group-hover:opacity-100  group-hover:-translate-y-3 transition mt-7">{props.project.desc}</h1>
      </div>
    </div>
  );
};

export default ProjectShow;
