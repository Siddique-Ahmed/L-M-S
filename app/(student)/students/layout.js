"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaChalkboard,
  FaClipboardList,
  FaFileAlt,
  FaUserCheck,
  FaEnvelopeOpenText,
  FaDollarSign,
  FaBars,
} from "react-icons/fa";

export default function StudentLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Header */}
      <header className="w-full px-4 py-4 bg-gray-100 shadow-xl flex items-center justify-between lg:hidden">
        <Link className="text-xl font-bold" href="/student">
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
        className={`min-h-screen bg-gray-200 lg:w-1/5 p-4 space-y-4 lg:space-y-8 flex flex-col transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out fixed lg:relative z-40 h-full`}
      >
        <Link
          className="text-2xl font-bold text-center lg:text-left"
          href="/student"
        >
          Student Dashboard
        </Link>

        <nav className="flex flex-col space-y-4">
          <Link
            className="flex items-center space-x-2 text-gray-700 hover:bg-gray-300 p-2 rounded-md"
            href="/students"
          >
            <FaChalkboard />
            <span className="font-semibold">Dashboard</span>
          </Link>
          <Link
            className="flex items-center space-x-2 text-gray-700 hover:bg-gray-300 p-2 rounded-md"
            href="/students/homework"
          >
            <FaClipboardList />
            <span className="font-semibold">Homework Submission</span>
          </Link>
          <Link
            className="flex items-center space-x-2 text-gray-700 hover:bg-gray-300 p-2 rounded-md"
            href="/students/tests"
          >
            <FaFileAlt />
            <span className="font-semibold">Tests</span>
          </Link>
          <Link
            className="flex items-center space-x-2 text-gray-700 hover:bg-gray-300 p-2 rounded-md"
            href="/students/leave-requests"
          >
            <FaEnvelopeOpenText />
            <span className="font-semibold">Leave Requests</span>
          </Link>
          <Link
            className="flex items-center space-x-2 text-gray-700 hover:bg-gray-300 p-2 rounded-md"
            href="/students/fee-management"
          >
            <FaDollarSign />
            <span className="font-semibold">Fee Management</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-4 lg:w-4/5 bg-gray-50">
        <div className="container mx-auto">{children}</div>
      </main>
    </div>
  );
}
