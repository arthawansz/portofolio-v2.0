import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Projects from "@/app/components/Projects";
import Certificates from "@/app/components/Certificates";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#09090B] min-h-screen text-white selection:bg-[#FF1E27] selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Footer />
    </main>
  );
}