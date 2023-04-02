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

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.addEventListener("load", () => {
      setLoaded(true);
      console.log("loaded");
    });
  }, []);

  return loaded ? (
    <div>
      <Navbar />
      <Hero />
      <BackToTop />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  ) : (
    <div>
      <Loading />
    </div>
  );
}

export default App;
