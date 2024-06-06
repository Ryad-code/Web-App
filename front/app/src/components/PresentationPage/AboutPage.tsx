import React from "react";
import SubAboutPage from "./SubAboutPage.tsx";
import { AboutStyle } from "../../styles/AboutPageStyle/About.style.ts";

function AboutPage() {
  return (
    <AboutStyle>
      <SubAboutPage />
    </AboutStyle>
  );
}

export default AboutPage;
