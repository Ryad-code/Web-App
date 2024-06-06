import React from "react";
import { FrontPageStyle } from "../../styles/FrontPageStyle/FrontPage.style.ts";
import NavBar from "./NavBar/NavBar.tsx";
import SubFrontPage from "./SubFrontPage.tsx";

function FrontPage() {
  return (
    <FrontPageStyle>
      <NavBar />
      <SubFrontPage />
    </FrontPageStyle>
  );
}

export default FrontPage;
