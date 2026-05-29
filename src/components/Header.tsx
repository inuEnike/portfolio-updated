import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col gap-4">
      <p className="md:text-md text-sm uppercase text-muted">Hi, I'm</p>

      <h1 className="text-4xl md:text-6xl font-bold">Inu George Enike</h1>

      <h2 className="text-md md:text-xl font-semibold text-accent">
        Full-Stack Engineer
      </h2>

      <p className="text-sm text-muted font-semibold">
        Imperium — I design and build reliable software systems using Node.js,
        Next.js, and modern web technologies.
      </p>

      <div className="flex items-center gap-8 my-4">
        <button className="border text-sm px-7 py-3 border-muted rounded-full cursor-pointer">
          View Resume
        </button>
      </div>
      <hr className="my-12 text-muted " />
    </header>
  );
};

export default Header;
