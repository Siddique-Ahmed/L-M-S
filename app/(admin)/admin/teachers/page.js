'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Edit, Trash, Search } from 'lucide-react'

async function getTeachers() {
  // Simulating an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "John Doe",
          subject: "Mathematics",
          expertize: "App Development",
          address: "123 Main St",
          education: "Ph.D.",
          email: "john@example.com",
          phoneNum: "03403748"
        },
        {
          id: 2,
          name: "Jane Smith",
          subject: "English",
          expertize: "Web Development",
          address: "456 Elm St",
          education: "M.A.",
          email: "jane@example.com",
          phoneNum: "088687645"
        },
        {
          id: 3,
          name: "Bob Johnson",
          subject: "Science",
          expertize: "Python",
          address: "789 Oak St",
          education: "M.Sc.",
          email: "bob@example.com",
          phoneNum: "088687645"
        },
      ]);
    }, 1000); // Simulate a 1-second delay
  });
}

export default function TeachersPage() {
  const [teachers, setTeachers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchTeachers() {
      const fetchedTeachers = await getTeachers()
      setTeachers(fetchedTeachers)
      setIsLoading(false)
    }
    fetchTeachers()
  }, [])

  const filteredTeachers = teachers.filter(teacher =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.expertize.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleEdit = (id) => {
    // Implement edit functionality
    console.log(`Edit teacher with id: ${id}`)
  }

  const handleDelete = (id) => {
    // Implement delete functionality
    console.log(`Delete teacher with id: ${id}`)
    setTeachers(teachers.filter(teacher => teacher.id !== id))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-purple-700 to-indigo-800 rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Teachers Management</h1>
        <p className="text-purple-200">View and manage teacher information</p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <div className="mb-6">
          <div className="relative w-full md:w-1/3">
            <Input
              type="text"
              placeholder="Search teachers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
          {isLoading ? (
            <div className="text-center py-4">Loading...</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-100 dark:bg-gray-800">
                  <TableHead className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">ID</TableHead>
                  <TableHead className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</TableHead>
                  <TableHead className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Expertise</TableHead>
                  <TableHead className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden md:table-cell">Address</TableHead>
                  <TableHead className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden lg:table-cell">Education</TableHead>
                  <TableHead className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden sm:table-cell">Email</TableHead>
                  <TableHead className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden sm:table-cell">Phone</TableHead>
                  <TableHead className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTeachers.map((teacher, index) => (
                  <TableRow
                    key={teacher.id}
                    className={`${
                      index % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800"
                    } hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200`}
                  >
                    <TableCell className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-gray-100">{teacher.id}</TableCell>
                    <TableCell className="py-4 px-6 text-sm text-gray-500 dark:text-gray-300">{teacher.name}</TableCell>
                    <TableCell className="py-4 px-6 text-sm text-gray-500 dark:text-gray-300">
                      <span className="px-4 py-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {teacher.expertize}
                      </span>
                    </TableCell>
                    <TableCell className="py-4 px-6 text-sm text-gray-500 dark:text-gray-300 hidden md:table-cell">{teacher.address}</TableCell>
                    <TableCell className="py-4 px-6 text-sm text-gray-500 dark:text-gray-300 hidden lg:table-cell">{teacher.education}</TableCell>
                    <TableCell className="py-4 px-6 text-sm text-gray-500 dark:text-gray-300 hidden sm:table-cell">{teacher.email}</TableCell>
                    <TableCell className="py-4 px-6 text-sm text-gray-500 dark:text-gray-300 hidden sm:table-cell">{teacher.phoneNum}</TableCell>
                    <TableCell className="py-4 px-6 text-sm font-medium">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-blue-600 hover:text-blue-700 mr-2"
                        onClick={() => handleEdit(teacher.id)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600 hover:text-red-700"
                        onClick={() => handleDelete(teacher.id)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </div>
    </div>
  )
}

