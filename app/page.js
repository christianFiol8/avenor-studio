import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Servicios from "@/components/sections/Servicios";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Servicios />
    </main>
  );
}