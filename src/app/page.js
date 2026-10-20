import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx"

export default function Home() {
  return (
   <>
   <main className="bg-[#09090B] min-h-screen text-white">
      <Navbar />
      <Hero />
    </main>
   </>
  );
}
