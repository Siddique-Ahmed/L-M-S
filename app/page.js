import BestTeachers from "@/components/BestTeachers";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NewCourses from "@/components/NewCourses";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <NewCourses isHome={true} />
      <BestTeachers isHome={true} />
      <Footer />
    </div>
  );
}
