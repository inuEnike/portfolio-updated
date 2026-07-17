import React from "react";

const About = () => {
  return (
    <section className="flex flex-col gap-7 text-sm text-muted" id="about">
      <h2 className="font-semibold uppercase">
        Full-Stack Engineer focused on backend systems
      </h2>

      <div className="md:w-[80%] flex flex-col gap-5">
        <p className="leading-7">
          I build scalable backend systems, APIs, and modern web applications
          using Node.js, Express, MongoDB, and Redis. I’m interested in system
          design, performance optimization, and production-grade architecture.
        </p>

        <p className="leading-7">
          Currently seeking internship or entry-level full-stack/backend roles,
          including remote opportunities.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 text-sm text-accent">
        <span>TypeScript</span>
        <span>Node.js</span>
        <span>Next.js</span>
        <span>Tailwind CSS</span>
        <span>Express.js</span>
        <span>Redis</span>
          <span>SQL</span>
        <span>MongoDB</span>

      </div>
      <hr className="my-12 text-muted " />
    </section>
  );
};

export default About;
