import React, { useState } from "react";
import Heading from "./components/Heading";
import Introduction from "./components/Introduction";
import Skills from "./pages/Skills";
import SocialLinks from "./components/SocialLinks";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";

function App() {
  return (
    <div>
      <div style={{ height: "90vh" }}>
        <Heading />
        <Introduction />
        <SocialLinks />
      </div>
      <Skills />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;
