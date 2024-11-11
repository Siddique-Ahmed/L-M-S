import React from "react";
import Link from "next/link";
import { FaGithub, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from "../public/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100 shadow-lg body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          {/* Logo and Title */}
          <Link
            href="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <Image src={Logo} height={50} width={50} />
            <span className="ml-3 text-xl">E-Learning</span>
          </Link>

          {/* Footer Text */}
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2020 LMS —
            <Link
              href="https:/github.com/Siddique-Ahmed"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @Siddique-Ahmed
            </Link>
          </p>

          {/* Social Media Links */}
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              href="https://github.com/Siddique-Ahmed"
              className="text-gray-500 hover:text-gray-900"
              target="blank"
            >
              <FaGithub className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.youtube.com/@Codewithfun07"
              className="ml-3 text-gray-500 hover:text-red-600"
              target="blank"
            >
              <FaYoutube className="w-5 h-5" />
            </Link>
            <Link
              href="https://instagram.com/codewithfun764/"
              className="ml-3 text-gray-500 hover:text-red-600"
              target="blank"
            >
              <FaInstagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/siddique-ahmed-8a3009297/"
              className="ml-3 text-gray-500 hover:text-blue-500"
              target="blank"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
