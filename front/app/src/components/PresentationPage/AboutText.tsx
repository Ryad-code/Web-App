import React from "react";
import { AboutTextStyle } from "../../styles/AboutPageStyle/About.style.ts";
import AboutParag from "./AboutParag.tsx";

function AboutText() {
  return (
    <AboutTextStyle>
      <h2>About me</h2>
      <h3>My journey with code</h3>
      <AboutParag/>
    </AboutTextStyle>
  );
}

export default AboutText;
