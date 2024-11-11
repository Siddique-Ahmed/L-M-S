import React from "react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Explore Your Learning Journey
              <br className="hidden lg:inline-block" />
              with Our LMS
            </h1>
            <p className="mb-8 leading-relaxed">
              Discover an immersive learning experience with our LMS, designed
              to empower learners and educators alike. Access diverse courses,
              track progress, and engage with interactive content tailored for
              today’s digital age. Join us in shaping a future where knowledge
              is just a click away.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                About Us
              </Button>
              <Button className="inline-flex text-white bg-gray-300 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Apply For Teacher
              </Button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxlYXJuaW5nJTIwbWFuYWdlbWVudCUyMHN5c3RlbXxlbnwwfHwwfHx8MA%3D%3D"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
