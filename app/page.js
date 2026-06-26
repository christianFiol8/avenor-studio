import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Servicios from "@/components/sections/Servicios";
import Proceso from "@/components/sections/Proceso"
import Proyectos from "@/components/sections/Proyectos";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Servicios />
      <Proceso />
      <Proyectos />
    </main>
  );
}