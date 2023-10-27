"use client";

import { TypeAnimation } from "react-type-animation";

const Animation = () => {
  return (
    <TypeAnimation
      className="text-emerald-300 font-bold drop-shadow"
      sequence={["Full Stack Developer", 1000, "Hobbyist Programmer", 1000]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};

export default Animation;
