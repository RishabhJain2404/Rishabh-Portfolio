"use client";

import { skills } from "@/data";
import React from "react";
import { BackgroundGradientAnimation } from "./ui/GradientBg";

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <h1 className="heading">
        My Tech
        <span className="text-purple"> Stack</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-16 md:gap-16 max-lg:mt-10">
        {skills.map((skill) => (
          <React.Fragment key={skill.id}>
              <div className="flex items-center justify-center md:max-w-60 max-w-32 gap-2">
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="md:w-15 w-10 lg:mt-10 lg:w-12"
                />
                <div className="font-semibold flex items-center justify-center text-2xl lg:mt-10">
                  {skill.name}
                </div>
              </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Skills;
