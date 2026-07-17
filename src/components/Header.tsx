import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col gap-4">
      <p className="md:text-md text-sm uppercase text-muted">Hi, I'm</p>

      <h1 className="text-4xl md:text-6xl font-bold">Inu George Enike</h1>

      <h2 className="text-md md:text-xl font-semibold text-accent">
        Full-Stack Engineer
      </h2>

      <p className="text-sm text-muted font-semibold leading-7">
        Imperium — I build scalable backend systems and web applications using
        Node.js, Express, and Next.js. Based in Edo state, Nigeria. Open to internships and
        remote opportunities.
      </p>

      <div className="flex items-center gap-8 my-4">
        <a href="/INU_GEORGE_ENIKE_CV.pdf" download={true}>
          <button className="border text-sm px-7 py-3 border-muted rounded-full cursor-pointer">
            Download Resume
          </button>
        </a>
        <a
          href="/INU_GEORGE_ENIKE_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border text-sm px-7 py-3 border-muted rounded-full cursor-pointer">
            View Resume
          </button>
        </a>
      </div>
      <hr className="my-12 text-muted " />
    </header>
  );
};

export default Header;
