import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { About } from "@/components/sections/About";
import { Leadership } from "@/components/sections/Leadership";
import { Projects } from "@/components/sections/Projects";
import { Competitions } from "@/components/sections/Competitions";
import { Certificates } from "@/components/sections/Certificates";
import { Activities } from "@/components/sections/Activities";
import { Timeline } from "@/components/sections/Timeline";
import { FutureGoals } from "@/components/sections/FutureGoals";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Leadership />
        <Projects />
        <Competitions />
        <Certificates />
        <Activities />
        <Timeline />
        <FutureGoals />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
