import React, { Suspense } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <BackToTop />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
