"use client"

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Users, GraduationCap, School, LayoutDashboard, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { href: '/admin', icon: LayoutDashboard, label: 'Dashboard', },
  { href: '/admin/teachers', icon: Users, label: 'Teachers' },
  { href: '/admin/students', icon: GraduationCap, label: 'Students' },
  { href: '/admin/classes', icon: School, label: 'Classes' },
]

export default function AdminLayout({
  children,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const sidebarRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="hidden md:flex md:flex-col md:w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-2">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="flex font-semibold items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
            >
              <item.icon className="h-5 w-5 mr-3" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile sidebar */}
      <div 
        ref={sidebarRef}
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out md:hidden",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex bg-white justify-between items-center p-4">
          <h1 className="text-2xl text-blue-600 font-bold">Admin Panel</h1>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        <nav className="px-2 py-4 space-y-2">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
              onClick={() => setSidebarOpen(false)}
            >
              <item.icon className="h-5 w-5 mr-3" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle sidebar"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <h2 className="text-2xl font-bold leading-tight text-gray-900">
              Admin Dashboard
            </h2>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white p-4">
          {children}
        </main>
      </div>
    </div>
  )
}

