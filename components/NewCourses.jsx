import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const cardData = [
  {
    id: 1,
    title: "Web and App Development",
    img: "https://images.unsplash.com/photo-1599008633840-052c7f756385?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxlYXJuaW5nJTIwbWFuYWdlbWVudCUyMHN5c3RlbXxlbnwwfHwwfHx8MA%3D%3D",
    description: "this course make you a perfect web and app developer",
  },
  {
    id: 2,
    title: "App Development",
    img: "https://images.unsplash.com/photo-1599008633840-052c7f756385?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxlYXJuaW5nJTIwbWFuYWdlbWVudCUyMHN5c3RlbXxlbnwwfHwwfHx8MA%3D%3D",
    description: "this course make you a perfect app developer",
  },
  {
    id: 3,
    title: "Web Development",
    img: "https://images.unsplash.com/photo-1599008633840-052c7f756385?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxlYXJuaW5nJTIwbWFuYWdlbWVudCUyMHN5c3RlbXxlbnwwfHwwfHx8MA%3D%3D",
    description: "this course make you a perfect web developer",
  },
  {
    id: 4,
    title: "python Development",
    img: "https://images.unsplash.com/photo-1599008633840-052c7f756385?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxlYXJuaW5nJTIwbWFuYWdlbWVudCUyMHN5c3RlbXxlbnwwfHwwfHx8MA%3D%3D",
    description: "this course make you a perfect python developer",
  },
];

const NewCourses = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="flex px-10 justify-between">
        <h1>Newly Courses</h1>
        <Button>See All</Button>
      </div>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 my-4 px-5">
          {cardData.map((data) => {
            return (
              <Card key={data.id} className="w-full md:w-[300px]">
                <CardHeader className="flex items-center justify-between">
                  <Image
                    src={data?.img}
                    height={500}
                    width={500}
                    alt="Thumbnail"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle>{data.title}</CardTitle>
                  <CardDescription>{data.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button>Apply Now</Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewCourses;
