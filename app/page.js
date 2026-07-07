import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Servicios from "@/components/sections/Servicios";
import Proceso from "@/components/sections/Proceso"
import Proyectos from "@/components/sections/Proyectos";
import Nosotros from "@/components/sections/Nosotros";
import Contacto from "@/components/sections/Contacto";
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/sections/FaQ";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Servicios />
      <Proceso />
      {/* <Proyectos /> */}
      <Nosotros />
      <FAQ />
      <Contacto />
      <Footer />
    </main>
  );
}