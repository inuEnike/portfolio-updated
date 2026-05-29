import React from "react";
import { CiHome } from "react-icons/ci";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

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
          <FaGithub />
        </li>
        <li className="text-xl text-muted">
          <FaXTwitter />
        </li>
        <li className="text-xl text-muted">
          <FaLinkedinIn />
        </li>
        <li className="text-xl text-muted">
          <BiLogoGmail />
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
