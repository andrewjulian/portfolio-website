import React, { useState, useEffect } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Loading from "./components/Loading";
import Fade from "react-reveal/Fade";

function App() {
  return (
    <Fade timeout="4500">
      <div>
        <Navbar />
        <Hero />
        <BackToTop />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </Fade>
  );
}

export default App;
