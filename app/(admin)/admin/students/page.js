"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';

const initialStudents = [
  {
    id: 1,
    name: "Alice Johnson",
    grade: "10th",
    address: "234 Pine St",
    parentName: "Carol Johnson",
    email: "alice@example.com",
    status: "Enrolled",
    cnic: 9834693471874,
    phoneNum : "0290342534",
    courseName : "Web and App Development",
    batchNo : "batch 01",
  },
  {
    id: 2,
    name: "Bob Williams",
    grade: "11th",
    address: "567 Maple Ave",
    parentName: "David Williams",
    email: "bob@example.com",
    status: "Enrolled",
    cnic: 9834693471874,
    phoneNum : "0290342534",
    courseName : "Web Development",
    batchNo : "batch 01",
  },
  {
    id: 3,
    name: "Charlie Brown",
    grade: "9th",
    address: "890 Cedar Ln",
    parentName: "Eve Brown",
    email: "charlie@example.com",
    status: "Not Enrolled",
    cnic: 9834693471874,
    phoneNum : "0290342534",
    courseName : "App Development",
    batchNo : "batch 01",
  },
  {
    id: 4,
    name: "Diana Martinez",
    grade: "12th",
    address: "123 Oak Rd",
    parentName: "Frank Martinez",
    email: "diana@example.com",
    status: "Eliminated",
    cnic: 9834693471874,
    phoneNum : "0290342534",
    courseName : "python",
    batchNo : "batch 01",
  },
];

export default function StudentsPage() {
  const [students, setStudents] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState("");

  const handleStatusChange = (studentId, newStatus) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === studentId ? { ...student, status: newStatus } : student
      )
    );
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Students
        </h1>
      </div>
      <div className="mb-6">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full md:w-1/3"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100 dark:bg-gray-700">
                <TableHead className="w-[100px] py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  ID
                </TableHead>
                <TableHead className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Name
                </TableHead>
                <TableHead className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Education
                </TableHead>
                <TableHead className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden md:table-cell">
                  Address
                </TableHead>
                <TableHead className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden lg:table-cell">
                 CNIC
                </TableHead>
                <TableHead className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden lg:table-cell">
                  Parent Name
                </TableHead>
                <TableHead className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden sm:table-cell">
                  Email
                </TableHead>
                <TableHead className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden sm:table-cell">
                  Phone Number
                </TableHead>
                <TableHead className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden sm:table-cell">
                  Course Name
                </TableHead>
                <TableHead className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden sm:table-cell">
                  Batch Number
                </TableHead>
                <TableHead className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student, index) => (
                <TableRow
                  key={student.id}
                  className={`${
                    index % 2 === 0
                      ? "bg-gray-50 dark:bg-gray-900"
                      : "bg-white dark:bg-gray-800"
                  } hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200`}
                >
                  <TableCell className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-gray-100">
                    {student.id}
                  </TableCell>
                  <TableCell className="py-4 px-6 text-sm text-gray-500 dark:text-gray-300">
                    {student.name}
                  </TableCell>
                  <TableCell className="py-4 px-6 text-sm text-gray-500 dark:text-gray-300">
                    {student.grade}
                  </TableCell>
                  <TableCell className="py-4 px-6 text-sm text-gray-500 dark:text-gray-300 hidden md:table-cell">
                    {student.address}
                  </TableCell>
                  <TableCell className="py-4 px-6 text-sm text-gray-500 dark:text-gray-300 hidden lg:table-cell">
                    {student.cnic}
                  </TableCell>
                  <TableCell className="py-4 px-6 text-sm text-gray-500 dark:text-gray-300 hidden lg:table-cell">
                    {student.parentName}
                  </TableCell>
                  <TableCell className="py-4 px-6 text-sm text-gray-500 dark:text-gray-300 hidden sm:table-cell">
                    {student.email}
                  </TableCell>
                  <TableCell className="py-4 px-6 text-sm text-gray-500 dark:text-gray-300 hidden sm:table-cell">
                    {student.phoneNum}
                  </TableCell>
                  <TableCell className="py-4 px-6 text-sm text-gray-500 dark:text-gray-300 hidden sm:table-cell">
                    {student.courseName}
                  </TableCell>
                  <TableCell className="py-4 px-6 text-sm text-gray-500 dark:text-gray-300 hidden sm:table-cell">
                    {student.batchNo}
                  </TableCell>
                  <TableCell className="py-4 px-6 text-sm font-medium">
                    <Select
                      onValueChange={(value) =>
                        handleStatusChange(student.id, value)
                      }
                      defaultValue={student.status}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Enrolled">Enrolled</SelectItem>
                        <SelectItem value="Not Enrolled">
                          Not Enrolled
                        </SelectItem>
                        <SelectItem value="Eliminated">Eliminated</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

