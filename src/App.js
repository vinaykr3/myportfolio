import React from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Service from "./Components/Service";
import Skills from "./Components/Skills";
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Home />
      <About />
      <Skills />
      <Service />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
