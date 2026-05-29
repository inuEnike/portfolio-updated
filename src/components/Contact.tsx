import React from "react";
import { FaPhone, FaPhoneAlt } from "react-icons/fa";
import { RiWhatsappLine } from "react-icons/ri";

const Contact = () => {
  return (
    <section id="contact">
      <div className="flex flex-col gap-5">
        <div className=""></div>
        <h2 className="text-2xl md:text-4xl font-bold">
          Get in <span className="text-accent">Touch</span>
        </h2>
        <p className="text-sm font-bold">
          Let&apos;s Build Something Amazing!!
        </p>

        <p className="text-sm text-muted md:w-[70%] leading-7">
          I&apos;m currently open to internships, entry-level backend or
          full-stack engineering roles, and remote opportunities. Feel free to
          reach out for collaborations, projects, or opportunities.
        </p>
        <div className="flex items-center gap-3 mb-4">
          <a href="tel:+2349036252432">
            <FaPhoneAlt className="text-xl" />
          </a>
          <a
            href="https://wa.me/2349012113050"
            rel="noopener noreferrer"
            target="_blank"
          >
            <RiWhatsappLine className="text-2xl" />
          </a>
        </div>
      </div>
      <hr className="my-12 text-muted " />
    </section>
  );
};

export default Contact;
