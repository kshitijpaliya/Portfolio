"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
// import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ParticleBackground = dynamic(
  () => import("@/components/ParticleBackground"),
  { ssr: false },
);

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030014] text-white overflow-x-hidden">
      {/* Background */}
      <ParticleBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <main className="relative z-10">
        <Hero />
        <About showDivider />
        <Experience showDivider />
        <Projects showDivider />
        <Skills showDivider />
        <Achievements showDivider />
        {/* <CurrentlyBuilding showDivider /> */}
        <Contact showDivider />
      </main>

      <Footer />
    </div>
  );
}
