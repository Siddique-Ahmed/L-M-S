"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Logo from "../public/logo.png";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "../components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

import { FiMenu, FiX } from "react-icons/fi";
import {
  FaBook,
  FaChalkboardTeacher,
  FaHome,
  FaPhone,
  FaQuestionCircle,
} from "react-icons/fa";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const session = null;
  const admin = "/admin";

  return (
    <div>
      <header className="w-full fixed top-0 left-0 bg-gray-100 shadow-xl z-50">
        <div className="container mx-auto p-4 flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center">
            <Image src={Logo} height={50} width={50} alt="LOGO" />
            <span className="ml-3 text-xl">LMS</span>
          </div>

          {/* Desktop Navigation Links (hidden on mobile) */}
          <nav className="hidden md:flex items-center space-x-5">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <Link href="/courses" className="hover:text-gray-900">
              Courses
            </Link>
            <Link href="/best-teacher" className="hover:text-gray-900">
              Teachers
            </Link>
            <Link href="/about" className="hover:text-gray-900">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-gray-900">
              Contact Us
            </Link>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {/* Hamburger Menu Icon for mobile view */}
            <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </div>

            {session ? (
              <>
                {/* Menubar for File Options */}
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger>
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </MenubarTrigger>
                    <MenubarContent>
                      <Link href={"/profile"}>
                      <MenubarItem>Profile</MenubarItem>
                      </Link>
                      <MenubarSeparator />
                      <Link
                        href={student ? student : teacher ? teacher : admin}
                      >
                        <MenubarItem>Dashboard</MenubarItem>
                      </Link>
                      <MenubarSeparator />
                      <MenubarItem>Logout</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </>
            ) : (
              <Link href={"/login"}>
                <Button className="bg-blue-500 hover:bg-blue-300 text-white py-1 px-3 rounded">
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Sidebar for mobile navigation */}
        <div
          className={`fixed top-0 left-0 h-full bg-gray-200 z-40 transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out w-64`}
        >
          <div className="p-4">
            <button className="text-gray-900 sm:hidden" onClick={toggleMenu}>
              <FiX size={24} />
            </button>
            <nav className="flex flex-col mt-4 space-y-4">
              <Link
                href="/"
                className="hover:text-white p-2 bg-gray-300 hover:bg-gray-400 rounded-md flex gap-2 items-center"
                onClick={toggleMenu}
              >
                <FaHome />
                Home
              </Link>
              <Link
                href="/courses"
                className="hover:text-white p-2 bg-gray-300 hover:bg-gray-400 rounded-md flex gap-2 items-center"
                onClick={toggleMenu}
              >
                <FaBook />
                Courses
              </Link>
              <Link
                href="/best-teacher"
                className="hover:text-white p-2 bg-gray-300 hover:bg-gray-400 rounded-md flex gap-2 items-center"
                onClick={toggleMenu}
              >
                <FaChalkboardTeacher />
                Teachers
              </Link>
              <Link
                href="/about"
                className="hover:text-white p-2 bg-gray-300 hover:bg-gray-400 rounded-md flex gap-2 items-center"
                onClick={toggleMenu}
              >
                <FaQuestionCircle />
                About Us
              </Link>
              <Link
                href="/contact"
                className="hover:text-white p-2 bg-gray-300 hover:bg-gray-400 rounded-md flex gap-2 items-center"
                onClick={toggleMenu}
              >
                <FaPhone />
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
