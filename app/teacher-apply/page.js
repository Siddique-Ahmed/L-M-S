import Header from "@/components/Header";
import React from "react";

export default function TeacherApplicationForm() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mt-24">
        <form className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Teacher Application Form
          </h2>

          {/* Teacher Full Name */}
          <div className="mb-5">
            <label
              htmlFor="fullName"
              className="block text-gray-600 font-medium"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="w-full p-2 mt-1 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              placeholder="Enter full name"
              required
            />
          </div>

          {/* CNIC */}
          <div className="mb-5">
            <label htmlFor="cnic" className="block text-gray-600 font-medium">
              CNIC
            </label>
            <input
              type="text"
              id="cnic"
              name="cnic"
              className="w-full p-2 mt-1 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              placeholder="Enter CNIC (XXXXX-XXXXXXX-X)"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-5">
            <label htmlFor="phone" className="block text-gray-600 font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full p-2 mt-1 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              placeholder="Enter phone number"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-600 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 mt-1 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              placeholder="Enter email address"
              required
            />
          </div>

          {/* Qualification */}
          <div className="mb-5">
            <label
              htmlFor="qualification"
              className="block text-gray-600 font-medium"
            >
              Qualification
            </label>
            <input
              type="text"
              id="qualification"
              name="qualification"
              className="w-full p-2 mt-1 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              placeholder="Enter highest qualification"
              required
            />
          </div>

          {/* Expertise */}
          <div className="mb-5">
            <label
              htmlFor="expertise"
              className="block text-gray-600 font-medium"
            >
              Expertise
            </label>
            <input
              type="text"
              id="expertise"
              name="expertise"
              className="w-full p-2 mt-1 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              placeholder="Enter your area of expertise"
              required
            />
          </div>

          {/* Address */}
          <div className="mb-5">
            <label
              htmlFor="address"
              className="block text-gray-600 font-medium"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="w-full p-2 mt-1 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              placeholder="Enter address"
              required
            />
          </div>

          {/* Profile Image */}
          <div className="mb-5">
            <label
              htmlFor="profileImage"
              className="block text-gray-600 font-medium"
            >
              Profile Image
            </label>
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              className="w-full p-2 mt-1 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              accept="image/*"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
