"use client";

import { skills } from "@/data";
import React from "react";
import { Button } from "./ui/moving-border";

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <h1 className="heading">
        My Tech
        <span className="text-purple"> Stack</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 text-nowrap">
        {skills.map((skill) => (
          <Button
            key={skill.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-row lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={skill.img}
                alt={skill.img}
                className="lg:w-50 md:w-7 w-7"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-lg md:text-xl lg:text-2xl font-bold">
                  {skill.name}
                </h1>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Skills;
