import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Cursordiv = () => {
  const cursorRef = useRef();

  useGSAP(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power3.out",
      });
    };
    const main = document.getElementById("main");

    main.addEventListener("mousemove", moveCursor);

    return () => {
      main.removeEventListener("mousemove", moveCursor);
    };
  });
  return (
    <div
      ref={cursorRef}
      className="w-4 h-4 bg-gray-400 rounded-full fixed top-0 left-0 pointer-events-none z-999"
    ></div>
  );
};

export default Cursordiv;
