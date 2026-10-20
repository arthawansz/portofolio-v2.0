import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";

export default function Home() {
  return (
    <main className="bg-[#09090B] min-h-screen text-white">
      <Navbar />
      <Hero />
      <About id="about" />
    </main>
  );
}