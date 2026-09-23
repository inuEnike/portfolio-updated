"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Nav from "@/components/nav";
import MobileNav from "@/components/nav/MobileNav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { useEffect, useState } from "react";
import { FaArrowTurnUp } from "react-icons/fa6";

const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="md:w-200 lg:w-235 not-lg:mx-3 m-auto ">
      <Nav />
      <MobileNav />
      <section className="my-10">
        <Header />
        <About />
        <Skills />

        <Projects />
        <Contact />
      </section>
      {showScrollTop && (
        <button
          className="fixed right-0 z-10 bottom-0 p-7 cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="flex items-center gap-2">
            <p className="text-sm">Scroll to top</p>
            <FaArrowTurnUp />
          </div>
        </button>
      )}
    </section>
  );
};

export default Home;
