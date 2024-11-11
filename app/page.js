import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NewCourses from "@/components/NewCourses";

export default function Home() {
  const isHome = true;
  return (
    <div>
      <Header />
      <HeroSection />
      <NewCourses isHome={isHome} />
      <Footer />
    </div>
  );
}
