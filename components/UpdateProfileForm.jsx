"use client";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function UpdateProfileForm() {
  const [profile, setProfile] = useState({
    fullName: "",
    username: "",
    email: "",
    bio: "",
    profilePic: null,
    profilePicPreview: null,
    address: "",
    education: "",
    courses: "",
    city: "",
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile({
        ...profile,
        profilePic: file,
        profilePicPreview: URL.createObjectURL(file),
      });
    }
  };

  const handleUpdate = () => {
    alert("Profile Updated Successfully!");
    console.log(profile);
  };

  return (
    <div className="w-full sm:w-[450px] mx-auto  px-4 py-3 bg-white rounded-lg shadow-xl">
      <div className="w-full h-10 flex items-center">
        <Link className="text-gray-400 hover:text-blue-600" href={"/profile"}>
          <FaArrowLeft />
        </Link>
      </div>
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        Update Profile
      </h1>
      <form className="space-y-4 flex flex-col item">
        {/* Profile Picture */}
        <div>
          <label className="block text-sm font-medium text-blue-600">
            Profile Picture
          </label>
          <input
            type="file"
            name="profilePic"
            accept="image/*"
            className="mt-2 block w-full border-gray-300 rounded-md"
            onChange={handleImageUpload}
          />
          {/* Image Preview */}
          {profile.profilePicPreview && (
            <div className="mt-4">
              <img
                src={profile.profilePicPreview}
                alt="Uploaded Profile"
                className="w-32 h-32 object-cover rounded-full border"
              />
            </div>
          )}
        </div>

        <div className="flex gap-3 flex-col sm:flex-row">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-blue-600">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              className="py-3 px-2 mt-2 outline-none w-full border-gray-300 rounded-md bg-gray-100 placeholder:text-gray-400"
              placeholder="Full Name"
            />
          </div>
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-blue-600">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="py-3 px-2 mt-2 outline-none w-full border-gray-300 rounded-md bg-gray-100 placeholder:text-gray-400"
              placeholder="username"
            />
          </div>
        </div>
        <div className="flex gap-4 flex-col sm:flex-row">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-blue-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="py-3 px-2 mt-2 outline-none w-full border-gray-300 rounded-md bg-gray-100 placeholder:text-gray-400"
              placeholder="email"
            />
          </div>
          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-blue-600">
              Address
            </label>
            <input
              type="text"
              name="address"
              className="py-3 px-2 mt-2 outline-none w-full border-gray-300 rounded-md bg-gray-100 placeholder:text-gray-400"
              placeholder="address"
            />
          </div>
        </div>
        <div className="flex gap-4 flex-col sm:flex-row">
          {/* Education */}
          <div>
            <label className="block text-sm font-medium text-blue-600">
              Education
            </label>
            <input
              type="text"
              name="education"
              className="py-3 px-2 mt-2 outline-none w-full border-gray-300 rounded-md bg-gray-100 placeholder:text-gray-400"
              placeholder="education"
            />
          </div>
          {/* City */}
          <div>
            <label className="block text-sm font-medium text-blue-600">
              City
            </label>
            <input
              type="text"
              name="city"
              className="py-3 px-2 mt-2 outline-none w-full border-gray-300 rounded-md bg-gray-100 placeholder:text-gray-400"
              placeholder="city"
            />
          </div>
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm font-medium text-blue-600">Bio</label>
          <textarea
            name="bio"
            className="py-3 px-2 mt-2 outline-none w-full border-gray-300 rounded-md bg-gray-100 placeholder:text-gray-400"
            placeholder="bio"
            rows="2"
          ></textarea>
        </div>

        {/* Update Button */}
        <button
          type="button"
          className="w-full sm:w-[210px] py-2 px-4 bg-blue-600 text-white font-bold rounded-md self-center"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}
