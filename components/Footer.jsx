import React from "react";
import Link from "next/link";
import {
  FaGithub ,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from "../public/logo.png"
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
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
            <Link href="https://facebook.com" className="text-gray-500 hover:text-gray-900">
              <FaGithub  className="w-5 h-5" />
            </Link>
            <Link href="https://twitter.com" className="ml-3 text-gray-500 hover:text-blue-400">
              <FaTwitter className="w-5 h-5" />
            </Link>
            <Link href="https://instagram.com" className="ml-3 text-gray-500 hover:text-red-600">
              <FaInstagram className="w-5 h-5" />
            </Link>
            <Link href="https://linkedin.com" className="ml-3 text-gray-500 hover:text-blue-500">
              <FaLinkedinIn className="w-5 h-5" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
