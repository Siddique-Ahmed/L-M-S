"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaChalkboardTeacher,
  FaUserGraduate,
  FaBook,
  FaChartBar,
  FaBars,
} from "react-icons/fa";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Header */}
      <header className="w-full px-4 py-4 bg-gray-100 shadow-xl flex items-center justify-between lg:hidden">
        <Link className="text-xl font-bold" href="/admin">
          LMS
        </Link>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-gray-700"
        >
          <FaBars size={24} />
        </button>
      </header>

      {/* Sidebar */}
      <aside
        className={`bg-gray-200 min-h-screen lg:w-1/5 p-4 space-y-4 lg:space-y-8 flex flex-col transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out fixed lg:relative z-40 h-full`}
      >
        <Link
          className="text-2xl font-bold text-center lg:text-left"
          href="/admin"
        >
          LMS Dashboard
        </Link>

        <nav className="flex flex-col space-y-4">
          <Link
            className="flex items-center space-x-2 text-gray-700 hover:bg-gray-300 p-2 rounded-md"
            href="/admin"
          >
            <FaChartBar />
            <span className="font-semibold">Dashboard</span>
          </Link>
          <Link
            className="flex items-center space-x-2 text-gray-700 hover:bg-gray-300 p-2 rounded-md"
            href="/admin/teachers"
          >
            <FaChalkboardTeacher />
            <span className="font-semibold">Teachers</span>
          </Link>
          <Link
            className="flex items-center space-x-2 text-gray-700 hover:bg-gray-300 p-2 rounded-md"
            href="/admin/students"
          >
            <FaUserGraduate />
            <span className="font-semibold">Students</span>
          </Link>
          <Link
            className="flex items-center space-x-2 text-gray-700 hover:bg-gray-300 p-2 rounded-md"
            href="/admin/classes"
          >
            <FaBook />
            <span className="font-semibold">Classes</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow min-h-screen p-4 lg:w-4/5 bg-gray-50">
        <div className="container mx-auto">{children}</div>
      </main>
    </div>
  );
}
