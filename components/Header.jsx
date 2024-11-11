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
  MenubarShortcut,
  MenubarTrigger,
} from "../components/ui/menubar";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../components/ui/avatar"

import { FiMenu, FiX } from "react-icons/fi";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const session = "null";

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
              First Link
            </Link>
            <Link href="/" className="hover:text-gray-900">
              Second Link
            </Link>
            <Link href="/" className="hover:text-gray-900">
              Third Link
            </Link>
            <Link href="/" className="hover:text-gray-900">
              Fourth Link
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
                      <MenubarItem>Profile</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Dashboard</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Logout</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </>
            ) : (
              <Button className="bg-blue-500 hover:bg-blue-300 text-white py-1 px-3 rounded">
                Login
              </Button>
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
            <button className="text-gray-900" onClick={toggleMenu}>
              <FiX size={24} />
            </button>
            <nav className="flex flex-col mt-4 space-y-4">
              <Link
                href="/"
                className="hover:text-gray-900"
                onClick={toggleMenu}
              >
                First Link
              </Link>
              <Link
                href="/"
                className="hover:text-gray-900"
                onClick={toggleMenu}
              >
                Second Link
              </Link>
              <Link
                href="/"
                className="hover:text-gray-900"
                onClick={toggleMenu}
              >
                Third Link
              </Link>
              <Link
                href="/"
                className="hover:text-gray-900"
                onClick={toggleMenu}
              >
                Fourth Link
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
