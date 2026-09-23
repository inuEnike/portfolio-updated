import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Nav from "@/components/nav";
import MobileNav from "@/components/nav/MobileNav";
import Projects from "@/components/Projects";
import React from "react";
import { Metadata } from "next";
import Skills from "@/components/Skills";
import { FaArrowTurnUp } from "react-icons/fa6";
import Home from "@/Home/Home";

export const metadata: Metadata = {
  title: "Inu George Enike | Frontend Engineer",
  description:
    "Inu George Enike is a Full stack Engineer from Nigeria specializing in React, Next.js, TypeScript, and scalable web applications.",

  keywords: [
    "Inu George Enike",
    "Inu Enike",
    "Inu George",
    "Imperium",
    "Inu George Enike developer",
    "Inu George Enike software engineer",
    "Inu George Enike frontend engineer",
    "Frontend Engineer Nigeria",
    "Frontend Developer Nigeria",
    "React Developer Nigeria",
    "Next.js Developer Nigeria",
    "TypeScript Developer Nigeria",
    "JavaScript Developer Nigeria",
    "Software Engineer Nigeria",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "SaaS Developer",
    "Web Application Developer",
    "Full Stack Developer Nigeria",
  ],

  alternates: {
    canonical: "https://inugeorge.vercel.app",
  },

  icons: {
    icon: [
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
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
    title: "Inu George Enike | Frontend Engineer",
    description:
      "Portfolio of Inu George Enike, a Frontend Engineer from Nigeria specializing in React, Next.js, TypeScript, and scalable web applications.",
    url: "https://inugeorge.vercel.app",
    siteName: "Inu George Enike",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Inu George Enike — Frontend Engineer",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Inu George Enike | Frontend Engineer",
    description:
      "Portfolio of Inu George Enike, a Frontend Engineer from Nigeria.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};
const HomePage = () => {
  return <Home />;
};

export default HomePage;
