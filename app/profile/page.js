import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

// pages/profile.js
export default function ProfilePage() {
  const user = {
    profilePic: "https://via.placeholder.com/150", // Placeholder profile picture
    fullName: "John Doe",
    username: "john_doe",
    email: "johndoe@example.com",
    bio: "Web developer with a passion for creating amazing applications.",
    address: "123, Maple Street, NY",
    education: "Bachelor's in Computer Science",
    courses: "React, Node.js, Tailwind CSS",
    city: "New York",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-md overflow-hidden">
        {/* Profile Header */}
        <div className="bg-blue-600 p-6 text-white text-center">
        <div>
          <Link href={"/"}>
            <FaArrowLeft />
          </Link>
        </div>
          <img
            src={user.profilePic}
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full border-4 border-white"
          />
          <h1 className="text-2xl font-bold mt-4">{user.fullName}</h1>
          <p className="text-sm">@{user.username}</p>
        </div>

        {/* Profile Details */}
        <div className="p-6 space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Email:</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Bio:</h2>
            <p className="text-gray-600">{user.bio}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Address:</h2>
            <p className="text-gray-600">{user.address}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Education:</h2>
            <p className="text-gray-600">{user.education}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Enrolled Courses:
            </h2>
            <p className="text-gray-600">{user.courses}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">City:</h2>
            <p className="text-gray-600">{user.city}</p>
          </div>

          {/* Edit Profile Button */}
          <div className="text-center">
            <Link href={"/profile/id"}>
              <button className="px-6 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
