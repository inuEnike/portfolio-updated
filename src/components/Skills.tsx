import { skills } from "@/lib/skills";
import React from "react";
import { SiTypescript } from "react-icons/si";

const Skills = () => {
  return (
    <div className="my-3">
      <h2 className="text-2xl md:text-4xl font-bold">Skills</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
        <div className="hover:border-muted border-surface cursor-pointer transition-all ease-in-out duration-700 border w-full rounded-md p-5 bg-surface ">
          <h3 className="text-sm">Frontend</h3>
          <div className="flex gap-3 gap-y-1 flex-wrap">
            {skills
              .find((skill) => skill.category === "Frontend")
              ?.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="border-muted flex gap-2 items-center py-2 border w-fit px-3 rounded-full text-center my-5"
                  >
                    {Icon && <Icon size={16} />}

                    <p className="text-xs">{skill.name}</p>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="hover:border-muted border-surface cursor-pointer transition-all ease-in-out duration-700 border w-full rounded-md p-5 bg-surface ">
          <h3 className="text-sm">Backend</h3>
          <div className="flex gap-3 gap-y-1 flex-wrap">
            {skills
              .find((skill) => skill.category === "Backend")
              ?.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="border-muted flex gap-2 items-center py-2 border w-fit px-3 rounded-full text-center my-5"
                  >
                    {Icon && <Icon size={16} />}

                    <p className="text-xs">{skill.name}</p>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="hover:border-muted border-surface cursor-pointer transition-all ease-in-out duration-700 border w-full rounded-md p-5 bg-surface ">
          <h3 className="text-sm">Database & Caching</h3>
          <div className="flex gap-3 gap-y-1 flex-wrap">
            {skills
              .find((skill) => skill.category === "Database")
              ?.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="border-muted flex gap-2 items-center py-2 border w-fit px-3 rounded-full text-center my-5"
                  >
                    {Icon && <Icon size={16} />}

                    <p className="text-xs">{skill.name}</p>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="hover:border-muted border-surface cursor-pointer transition-all ease-in-out duration-700 border w-full rounded-md p-5 bg-surface ">
          <h3 className="text-sm">Tools & Engineering</h3>
          <div className="flex gap-3 gap-y-1 flex-wrap">
            {skills
              .find((skill) => skill.category === "Tools & Engineering")
              ?.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="border-muted flex gap-2 items-center py-2 border w-fit px-3 rounded-full text-center my-5"
                  >
                    {Icon && <Icon size={16} />}

                    <p className="text-xs">{skill.name}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      <hr className="my-12 text-muted " />
    </div>
  );
};

export default Skills;
