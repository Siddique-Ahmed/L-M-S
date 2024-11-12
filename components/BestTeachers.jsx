"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "./Header";

const BestTeachers = ({ isHome }) => {
  const [findTeacher, setFindTeacher] = useState(null);
  // teacher data
  const teachers = [
    {
      id: "T001",
      name: "Ahmed Ali",
      course: "Web and App Development",
      image: "https://via.placeholder.com/150",
    },
    {
      id: "T002",
      name: "Sara Khan",
      course: "App Development",
      image: "https://via.placeholder.com/150",
    },
    {
      id: "T003",
      name: "Usman Raza",
      course: "Web Development",
      image: "https://via.placeholder.com/150",
    },
    {
      id: "T004",
      name: "Fatima Malik",
      course: "Python Development",
      image: "https://via.placeholder.com/150",
    },
    {
      id: "T005",
      name: "Hassan Mirza",
      course: "Machine Learning",
      image: "https://via.placeholder.com/150",
    },
    {
      id: "T006",
      name: "Ayesha Noor",
      course: "Data Science",
      image: "https://via.placeholder.com/150",
    },
    {
      id: "T007",
      name: "Bilal Shah",
      course: "Cybersecurity",
      image: "https://via.placeholder.com/150",
    },
    {
      id: "T008",
      name: "Zainab Farooq",
      course: "AI for Beginners",
      image: "https://via.placeholder.com/150",
    },
    {
      id: "T009",
      name: "Kamran Zafar",
      course: "Blockchain Development",
      image: "https://via.placeholder.com/150",
    },
    {
      id: "T010",
      name: "Nadia Qureshi",
      course: "Cloud Computing",
      image: "https://via.placeholder.com/150",
    },
    {
      id: "T011",
      name: "Raza Khan",
      course: "React.js Development",
      image: "https://via.placeholder.com/150",
    },
    {
      id: "T012",
      name: "Sana Ahmed",
      course: "Vue.js Essentials",
      image: "https://via.placeholder.com/150",
    },
    {
      id: "T013",
      name: "Waqas Ali",
      course: "Angular Development",
      image: "https://via.placeholder.com/150",
    },
    {
      id: "T014",
      name: "Amna Tariq",
      course: "Java Programming",
      image: "https://via.placeholder.com/150",
    },
    {
      id: "T015",
      name: "Ali Raza",
      course: "C++ Programming",
      image: "https://via.placeholder.com/150",
    },
    {
      id: "T016",
      name: "Maira Khan",
      course: "Swift for iOS",
      image: "https://via.placeholder.com/150",
    },
    {
      id: "T017",
      name: "Hira Ali",
      course: "UI/UX Design",
      image: "https://via.placeholder.com/150",
    },
    {
      id: "T018",
      name: "Kashan Malik",
      course: "Digital Marketing",
      image: "https://via.placeholder.com/150",
    },
    {
      id: "T019",
      name: "Noman Siddiqui",
      course: "Big Data Analytics",
      image: "https://via.placeholder.com/150",
    },
    {
      id: "T020",
      name: "Iqra Qamar",
      course: "Ethical Hacking",
      image: "https://via.placeholder.com/150",
    },
  ];

  const filteredTeachers = findTeacher
    ? teachers.filter((teacher) => teacher.name === findTeacher)
    : isHome
    ? teachers.slice(0, 6)
    : teachers;

  return (
    <div className="min-h-screen">
      <Header />
      <div className="px-10 my-24">
        <div className="flex justify-between items-center my-10">
          <h1 className="font-bold text-2xl">Best Teachers</h1>
          {isHome ? (
            <Link href={"/best-teacher"}>
              <Button>See All</Button>
            </Link>
          ) : (
            <div>
              <Select onValueChange={(val) => setFindTeacher(val)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a Teachers" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {teachers.map((data) => {
                      return (
                        <SelectItem key={data.name} value={data.name}>
                          {data.name}
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
        <div className="w-full flex flex-wrap items-center justify-evenly gap-3 lg:grid-cols-3">
          {filteredTeachers.map((teacher) => (
            <div
              key={teacher.id}
              className="w-full sm:w-[250px] md:w-[300] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex flex-col items-center py-6">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={teacher.image}
                  alt={teacher.name}
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {teacher.name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {teacher.course}
                </span>
                <div className="flex mt-4 md:mt-6">
                  <Link
                    href={`/best-teacher/${teacher.id}`}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    See Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestTeachers;
