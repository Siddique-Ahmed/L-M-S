import UserLogin from "@/components/UserLogin";
import Link from "next/link";

export default function Login() {
  return(
    <div className="min-h-screen container mx-auto flex items-center justify-center px-6">
      <UserLogin/>
    </div>
  )
}