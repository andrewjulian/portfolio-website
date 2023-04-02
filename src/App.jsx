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
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  return !isLoading ? (
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
    <Loading />
  );
}

export default App;
