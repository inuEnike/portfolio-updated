import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Nav from "@/components/nav";
import MobileNav from "@/components/nav/MobileNav";
import Projects from "@/components/Projects";
import React from "react";
import {Metadata} from "next";

export const metadata:Metadata = {
  title: "Imperium | Full-Stack Engineer - Inu George Enike",
  description:
    "Full-stack developer in Nigeria building scalable backend systems and web applications with Next.js and Node.js.",
  keywords: [
    "Inu George Enike",
    "Inu Enike",
    "Inu George",
    "Inu Enike George",
    "Imperium",
    "Imperium Developer",
    "Inu George Enike developer",
    "Inu George Enike software engineer",
    "Inu George Enike frontend developer",
    "Frontend Engineer Nigeria",
    "Frontend Developer Nigeria",
    "React Developer Nigeria",
    "Next.js Developer Nigeria",
    "TypeScript Developer Nigeria",
    "JavaScript Developer Nigeria",
    "Software Engineer Nigeria",
    "React Developer",
    "Next.js Developer",
    "Express.js Developer",
    "TypeScript Developer",
    "SaaS Developer",
    "Web Application Developer",
    "Full Stack Developer Nigeria",
    "Website Developer in Edo state",
    "Website Developer in Auchi",
    "Website Developer Near Me"
  ],

  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
      },
    ],
  },

  openGraph: {
    title: "Imperium | Full-Stack Engineer - Inu George Enike",
    description:
      "Imperium (Inu George Enike) builds scalable backend systems and web applications.",
    url: "https://inugeorge.vercel.app",
    siteName: "Imperium Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Imperium Portfolio",
      },
    ],
    type: "website",
  },
};

const Home = () => {
  return (
    <section className="md:w-200 lg:w-215  not-lg:mx-3 m-auto ">
      <Nav />
      <MobileNav />
      <section className="my-10">
        <Header />
        <About />
        <Projects />
        <Contact />
      </section>
    </section>
  );
};

export default Home;
