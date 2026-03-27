import React, { useState } from "react";
import echochat from "../assets/Images/EchoChat.webp";
import ProjectShow from "../Component/ProjectShow";

const ProjectComponent = () => {
  const [project, setProject] = useState([
    {
      img: "https://framerusercontent.com/images/V4lj1ojcwHYYwKbpMzJdTrapej4.jpg?scale-down-to=1024",
      title: "Order-Karo",
      desc: "Grocery delivery WebApp",
    },
    {
      img: echochat,
      title: "EchoChat",
      desc: "Real Time Chating Application",
    },
    {
      img: "https://framerusercontent.com/images/PZB0rXS1ZYIMaOVnG0gQICdoM.jpg?scale-down-to=1024",
      title: "Perfume",
      desc: "Real Time Chating Application",
    },
  ]);
  return (
    <div className="" >
        <h1 className="text-6xl text-white px-13 pt-10 font5">Projects</h1>
      <div className="p-15  grid grid-cols-2">
        {project.map((val) => {
          return <ProjectShow project={val} />;
        })}
      </div>
    </div>
  );
};

export default ProjectComponent;
