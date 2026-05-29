import About from "@/components/About";
import Header from "@/components/Header";
import Nav from "@/components/nav";
import MobileNav from "@/components/nav/MobileNav";
import Projects from "@/components/Projects";
import React from "react";

export const metadata = {
  title: "Imperium | Full-Stack Engineer - Inu George Enike",
  description:
    "Full-stack Enginner in Nigeria building scalable backend systems and web applications with Next.js and Node.js.",
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
    title: "Imperium | Full-Stack Developer",
    description:
      "Imperium (Inu George Enike) builds scalable backend systems and web applications.",
    url: "https://your-domain.com",
    siteName: "Imperium Portfolio",
    images: [
      {
        url: "/favicon.ico",
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
        <Projects/>
      </section>
    </section>
  );
};

export default Home;
