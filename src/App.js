import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <html className="scroll-smooth">
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </html>
  );
}
