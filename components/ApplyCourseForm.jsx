import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const ApplyCourseForm = () => {
  return (
    <div className="w-full sm:w-[650px] bg-white px-5 py-4 shadow-lg rounded-md flex flex-col items-center justify-between gap-5">
      <div className="w-full flex items-center">
        <Link href={"/courses"}>
          <FaArrowLeft className="text-gray-500 hover:text-blue-600" />
        </Link>
      </div>
      <h1 className="font-bold text-2xl text-blue-600">Apply for Course</h1>
      <form className="w-full flex flex-col gap-2">
        <div className="w-full flex flex-col sm:flex-row items-center gap-2 justify-between">
          <input
            className="w-full px-2 py-4 rounded-md placeholder:text-gray-400 outline-none bg-gray-100"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="w-full px-2 py-4 rounded-md placeholder:text-gray-400 outline-none bg-gray-100"
            type="text"
            placeholder="Father Name"
          />
        </div>
        <div className="w-full flex flex-col sm:flex-row items-center gap-2 justify-between">
          <input
            className="w-full px-2 py-4 rounded-md placeholder:text-gray-400 outline-none bg-gray-100"
            type="email"
            placeholder="Email"
          />
          <input
            className="w-full px-2 py-4 rounded-md placeholder:text-gray-400 outline-none bg-gray-100"
            type="text"
            placeholder="Phone Number"
          />
        </div>
        <div className="w-full flex flex-col sm:flex-row items-center gap-2 justify-between">
          <input
            className="w-full px-2 py-4 rounded-md placeholder:text-gray-400 outline-none bg-gray-100"
            type="text"
            placeholder="Qualification"
          />
          <input
            className="w-full px-2 py-4 rounded-md placeholder:text-gray-400 outline-none bg-gray-100"
            type="text"
            placeholder="CNIC"
          />
        </div>
        <div className="w-full flex flex-col sm:flex-row items-center gap-2 justify-between">
          <input
            className="w-full px-2 py-4 rounded-md placeholder:text-gray-400 outline-none bg-gray-100"
            type="text"
            placeholder="Batch No"
          />
          <input
            className="w-full px-2 py-4 rounded-md placeholder:text-gray-400 outline-none bg-gray-100"
            type="text"
            placeholder="Course Name"
          />
        </div>
        <textarea
          className="w-full px-2 py-4 rounded-md placeholder:text-gray-400 outline-none bg-gray-100"
          type="text"
          cols={2}
          rows={2}
          placeholder="Address"
        ></textarea>
        <div className="w-full flex items-center my-3 justify-center">
          <button className="w-full sm:w-[230px] px-5 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-500">Apply</button>
        </div>
      </form>
    </div>
  );
};

export default ApplyCourseForm;
