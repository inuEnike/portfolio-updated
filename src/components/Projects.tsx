import { projects } from "@/lib/projects";
import Link from "next/link";
import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";

const Projects = () => {
  return (
    <section id="projects">
      <div className="">
        <h2 className="text-2xl md:text-4xl font-bold">Projects</h2>
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-7">
          {projects.map((project, key) => (
            <div
              className="bg-surface p-5 rounded-md flex flex-col gap-5"
              key={key}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{project.title}</h3>
                <div className="flex gap-3 items-center">
                  {project.github && (
                    <p className="text-xs flex items-center gap-1 text-accent">
                      <Link href={project.github}>Repo</Link>
                      <FaArrowTrendUp />
                    </p>
                  )}
                  {project.live && (
                    <p className="text-xs ">
                      <Link href={project.live}>Live</Link>
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full">
                <p className="text-accent text-sm leading-7 md:tracking-wide">
                  {project.description}
                </p>
              </div>
              <div className="highlights grid grid-cols-3 gap-3 ">
                {project.stack?.map((stack, key) => (
                  <div
                    className="w-full bg-background text-muted rounded-md flex items-center justify-center text-center py-1 text-sm px-2 font-semibold"
                    key={key}
                  >
                    <small>{stack}</small>
                  </div>
                ))}
              </div>
              <div className="highlights grid grid-cols-3 gap-3 ">
                {project.highlights?.map((highlight, key) => (
                  <div
                    className="w-full bg-background text-muted rounded-md flex items-center justify-center text-center py-1 text-sm px-2 font-semibold"
                    key={key}
                  >
                    <small>{highlight}</small>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="my-12 text-muted " />
    </section>
  );
};

export default Projects;
