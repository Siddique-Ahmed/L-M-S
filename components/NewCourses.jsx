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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";

// dummy card data
const cardData = [
  {
    id: 1,
    title: "Web and App Development",
    img: "https://images.unsplash.com/photo-1599008633840-052c7f756385?w=600&auto=format&fit=crop&q=60",
    description: "This course makes you a perfect web and app developer.",
  },
  {
    id: 2,
    title: "App Development",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=60",
    description:
      "Become a skilled app developer with this comprehensive course.",
  },
  {
    id: 3,
    title: "Web Development",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60",
    description: "Learn the essentials to become a web development pro.",
  },
  {
    id: 4,
    title: "Python Development",
    img: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=600&auto=format&fit=crop&q=60",
    description: "Master Python and build your coding career with this course.",
  },
  {
    id: 5,
    title: "Machine Learning",
    img: "https://images.unsplash.com/photo-1517430816045-df4b7de1db35?w=600&auto=format&fit=crop&q=60",
    description: "An introduction to the world of machine learning algorithms.",
  },
  {
    id: 6,
    title: "Data Science",
    img: "https://images.unsplash.com/photo-1559056199-79f71e02b5da?w=600&auto=format&fit=crop&q=60",
    description: "Understand data science concepts and analytics tools.",
  },
  {
    id: 7,
    title: "Cybersecurity",
    img: "https://images.unsplash.com/photo-1558085077-001f2b3ed937?w=600&auto=format&fit=crop&q=60",
    description: "Become a cybersecurity expert and safeguard data.",
  },
  {
    id: 8,
    title: "AI for Beginners",
    img: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?w=600&auto=format&fit=crop&q=60",
    description: "Get started in Artificial Intelligence and its applications.",
  },
  {
    id: 9,
    title: "Blockchain Development",
    img: "https://images.unsplash.com/photo-1573164573931-8ad0f26e9d1d?w=600&auto=format&fit=crop&q=60",
    description:
      "Explore blockchain technology and learn to develop decentralized applications.",
  },
  {
    id: 10,
    title: "Cloud Computing",
    img: "https://images.unsplash.com/photo-1542098365-e6e3c7c2d9f3?w=600&auto=format&fit=crop&q=60",
    description: "Learn cloud infrastructure management and deployment.",
  },
  {
    id: 11,
    title: "React.js Development",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=60",
    description: "Build dynamic web applications with React.js.",
  },
  {
    id: 12,
    title: "Vue.js Essentials",
    img: "https://images.unsplash.com/photo-1565372914064-268297f1e26a?w=600&auto=format&fit=crop&q=60",
    description: "Learn the basics of Vue.js for frontend development.",
  },
  {
    id: 13,
    title: "Angular Development",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=60",
    description: "Develop enterprise-level applications with Angular.",
  },
  {
    id: 14,
    title: "Java Programming",
    img: "https://images.unsplash.com/photo-1516245834210-c4c142787335?w=600&auto=format&fit=crop&q=60",
    description: "Master Java programming for backend and Android development.",
  },
  {
    id: 15,
    title: "C++ Programming",
    img: "https://images.unsplash.com/photo-1517430816045-df4b7de1db35?w=600&auto=format&fit=crop&q=60",
    description: "Learn C++ for software development and competitive coding.",
  },
  {
    id: 16,
    title: "Swift for iOS",
    img: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=600&auto=format&fit=crop&q=60",
    description: "Learn Swift to develop high-performance iOS applications.",
  },
  {
    id: 17,
    title: "UI/UX Design",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60",
    description: "Build engaging user interfaces and improve UX.",
  },
  {
    id: 18,
    title: "Digital Marketing",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60",
    description: "Gain insights into SEO, social media, and content marketing.",
  },
  {
    id: 19,
    title: "Big Data Analytics",
    img: "https://images.unsplash.com/photo-1559056199-79f71e02b5da?w=600&auto=format&fit=crop&q=60",
    description: "Analyze and interpret big data with modern tools.",
  },
  {
    id: 20,
    title: "Ethical Hacking",
    img: "https://images.unsplash.com/photo-1558085077-001f2b3ed937?w=600&auto=format&fit=crop&q=60",
    description: "Learn ethical hacking techniques and secure systems.",
  },
];
// dummy course Category
const courseTitles = [
  "Web and App Development",
  "App Development",
  "Web Development",
  "Python Development",
  "Machine Learning",
  "Data Science",
  "Cybersecurity",
  "AI for Beginners",
  "Blockchain Development",
  "Cloud Computing",
  "React.js Development",
  "Vue.js Essentials",
  "Angular Development",
  "Java Programming",
  "C++ Programming",
  "Swift for iOS",
  "UI/UX Design",
  "Digital Marketing",
  "Big Data Analytics",
  "Ethical Hacking",
];

const NewCourses = ({ isHome }) => {
  const filterData = isHome ? cardData.slice(0, 6) : cardData;

  return (
    <div className={`container mx-auto ${isHome ? "my-10" : "mt-[120px]"}`}>
      <div className="flex px-10 justify-between">
        <h1 className="font-bold text-2xl">Newly Courses</h1>
        {isHome ? (
          <Link href={"/courses"}>
            <Button>See All</Button>
          </Link>
        ) : (
          <div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a Course" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {courseTitles.map((data) => {
                    return (
                      <SelectItem key={data} value={data}>
                        {data}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        )}
      </div>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 my-4 px-5">
          {filterData.map((data) => {
            return (
              <Card key={data.id} className="w-fullmy-3 md:w-[300px]">
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
