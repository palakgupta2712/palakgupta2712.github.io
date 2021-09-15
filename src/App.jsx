import React, { useState } from "react";
import Heading from "./components/Heading";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <Heading />
      <Introduction />
      <SocialLinks />
      <Skills />
    </div>
  );
}

export default App;
