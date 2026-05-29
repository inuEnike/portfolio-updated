import React from "react";
import { CiHome } from "react-icons/ci";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail, BiLogoWhatsapp } from "react-icons/bi";

const MobileNav = () => {
  return (
    <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 md:hidden z-10">
      <ul className="flex items-center gap-6 border border-white/10 bg-background px-6 py-4 rounded-full shadow-lg">
        <li>
          <Link href="/" className="text-xl">
            <CiHome />
          </Link>
        </li>
        <li className="text-xs text-muted">|</li>
        <li className="text-xl text-muted">
          <a
            href="https://github.com/inuEnike"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub />
          </a>
        </li>
        <li className="text-xl text-muted">
          <a
            href="https://x.com/Imperium04"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaXTwitter />
          </a>
        </li>
        <li className="text-xl text-muted">
          <a
            href="https://www.linkedin.com/in/inu-enike-90797434a/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li className="text-xl text-muted">
          <a
            href="mailto:imperium.dev01"
            rel="noopener noreferrer"
            target="_blank"
          >
            <BiLogoGmail />
          </a>
        </li>
        <li className="text-xl text-muted">
          <a
            href="https://wa.me/2349012113050"
            rel="noopener noreferrer"
            target="_blank"
          >
            <BiLogoWhatsapp />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
