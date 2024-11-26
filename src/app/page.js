import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import DoctorSection from "./components/DoctorSection";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <Hero />
      <DoctorSection isHome={true} />
    </div>
  );
}
