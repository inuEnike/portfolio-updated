import { FaArrowTurnDown } from "react-icons/fa6";
import Link from "next/link";

const About = () => {
  return (
    <section className="flex flex-col gap-7 text-sm text-muted" id="about">
      <h2 className="font-semibold uppercase">
        Full-Stack Engineer building modern applications
      </h2>

      <div className="md:w-[80%] flex flex-col gap-5">
        <p className="leading-7">
          I build modern web applications and scalable backend systems using
          TypeScript, Node.js, Express.js, React, Next.js, PostgreSQL, MongoDB,
          and Redis. I’m particularly interested in backend architecture, API
          design, databases, performance, and building reliable software that
          can scale.
        </p>

        <p className="leading-7">
          I’m open to opportunities where I can apply my engineering skills to
          real products, solve meaningful problems, and build software that
          delivers measurable value.
        </p>
      </div>
      <Link href={"#projects"} className="flex gap-2 items-center justify-end">
        <p className="">See My Work</p>
        <FaArrowTurnDown />
      </Link>
      <hr className="my-12 text-muted " />
    </section>
  );
};

export default About;
