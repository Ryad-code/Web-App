import React from "react";
import { SubAboutStyle } from "../../styles/AboutPageStyle/About.style.ts";
import AboutText from "./AboutText.tsx";
import ProfilePic from "./ProfilePicture.tsx";

function SubAboutPage() {
  return (
    <SubAboutStyle>
      <AboutText/>
      <ProfilePic/>
    </SubAboutStyle>
  );
}

export default SubAboutPage;
