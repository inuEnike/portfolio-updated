import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl md:text-4xl font-bold">
          Get in <span className="text-accent">Touch</span>
        </h2>
        <p className="text-sm font-bold">Let&apos;s Build Something Great!!</p>

        <p className="text-sm text-muted md:w-[70%] leading-7">
          I&apos;m currently open to internships, entry-level backend or
          full-stack engineering roles, and remote opportunities. Feel free to
          reach out for collaborations, projects, or opportunities.
        </p>
      </div>
      <hr className="my-12 text-muted " />
    </section>
  );
};

export default Contact;
