"use client";

import { useState } from "react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const initialCourses = [
  {
    id: 1,
    name: "Introduction to React",
    batch: "Batch A",
    batchStatus: "Ongoing",
    status: "Ongoing",
  },
  {
    id: 2,
    name: "Advanced JavaScript",
    batch: "Batch B",
    batchStatus: "Available",
    status: "Pending",
  },
  {
    id: 3,
    name: "Node.js Fundamentals",
    batch: "Batch C",
    batchStatus: "Ongoing",
    status: "Closed",
  },
];

export default function CoursesPage() {
  const [courses, setCourses] = useState(initialCourses);
  const [newCourse, setNewCourse] = useState({ name: "", batch: "" });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">
        Course Management
      </h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
          Add New Course
        </h2>
        <form className="space-y-4">
          <div>
            <Label htmlFor="courseName">Course Name</Label>
            <Input
              id="courseName"
              placeholder="Enter course name"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="batchName">Batch Name</Label>
            <Input
              id="batchName"
              placeholder="Enter batch name"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="batchName">Course Description</Label>
            <textarea
              id="courseDesciption"
              placeholder="Enter Course Description"
              className="mt-1 w-full border-gray-300 px-3 py-2 border"
              rows={4}
              cols={4}
            ></textarea>
          </div>
          <div>
            <Label htmlFor="batchName">Batch Status</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Available">Open</SelectItem>
                <SelectItem value="Ongoing">Ongoing</SelectItem>
                <SelectItem value="Ongoing">Close</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full flex flex-col gap-3">
            <Label htmlFor="batchName">Course Status</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Available">Open</SelectItem>
                <SelectItem value="Closed">Closed</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Ongoing">Ongoing</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">
            <PlusCircle className="mr-2 h-4 w-4" /> Add Course
          </Button>
        </form>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100 dark:bg-gray-700">
              <TableHead className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Course ID
              </TableHead>
              <TableHead className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Course Name
              </TableHead>
              <TableHead className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Batch
              </TableHead>
              <TableHead className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Batch Status
              </TableHead>
              <TableHead className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Course Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map((course, index) => (
              <TableRow
                key={course.id}
                className={`${
                  index % 2 === 0
                    ? "bg-gray-50 dark:bg-gray-900"
                    : "bg-white dark:bg-gray-800"
                } hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200`}
              >
                <TableCell className="py-4 px-6 text-sm text-gray-900 dark:text-gray-100">
                  {course.id}
                </TableCell>
                <TableCell className="py-4 px-6 text-sm text-gray-900 dark:text-gray-100">
                  {course.name}
                </TableCell>
                <TableCell className="py-4 px-6 text-sm text-gray-500 dark:text-gray-300">
                  {course.batch}
                </TableCell>
                <TableCell className="py-4 px-6 text-sm font-medium">
                  <Select
                    onValueChange={(value) =>
                      handleBatchStatusChange(course.id, value)
                    }
                    defaultValue={course.batchStatus}
                  >
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Available">Available</SelectItem>
                      <SelectItem value="Ongoing">Ongoing</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className="py-4 px-6 text-sm font-medium">
                  <Select
                    onValueChange={(value) =>
                      handleStatusChange(course.id, value)
                    }
                    defaultValue={course.status}
                  >
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Available">Available</SelectItem>
                      <SelectItem value="Closed">Closed</SelectItem>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Ongoing">Ongoing</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
