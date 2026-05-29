import Link from "next/link";
import React from "react";
import { BiLogoGmail, BiLogoWhatsapp } from "react-icons/bi";
import { CiHome } from "react-icons/ci";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Nav = () => {
  return (
    <nav className="my-10 border md:block hidden sticky top-0 z-10 border-white/5 bg-background py-3 px-3 rounded-full">
      <ul className="flex items-center gap-6 justify-between">
        <li className="flex items-center gap-6">
          <Link href="/" className="text-2xl">
            <CiHome />
          </Link>
          <span className="text-xs text-muted">|</span>
        </li>
        <ul className="flex items-center gap-6">
          <li className="text-2xl text-muted">
            <a
              href="https://github.com/inuEnike"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub />
            </a>
          </li>
          <li className="text-2xl text-muted">
            <a
              href="https://x.com/Imperium04"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaXTwitter />
            </a>
          </li>
          <li className="text-2xl text-muted">
            <a
              href="https://linkedin.com/in/inu-enike"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="text-2xl text-muted">
            <a
              href="mailto:imperium.dev01"
              rel="noopener noreferrer"
              target="_blank"
            >
              <BiLogoGmail />
            </a>
          </li>
          <li className="text-2xl text-muted">
            <a
              href="https://wa.me/2349012113050"
              rel="noopener noreferrer"
              target="_blank"
            >
              <BiLogoWhatsapp />
            </a>
          </li>
        </ul>

        <button className="border text-sm px-7 py-3 border-accent rounded-full cursor-pointer">
          Get in Touch
        </button>
      </ul>
    </nav>
  );
};

export default Nav;
