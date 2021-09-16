import React, { useState } from "react";
import Heading from "./components/Heading";
import Introduction from "./components/Introduction";
import Skills from "./pages/Skills";
import SocialLinks from "./components/SocialLinks";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Footer from "./pages/Footer";

function App() {
  return (
    <div>
      <div
        style={{
          height: "90vh",
          // display: "flex",
          // alignItems: "center",
          // flexDirection: "column",
        }}
      >
        <Heading />
        <Introduction />
        <SocialLinks />
      </div>
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
