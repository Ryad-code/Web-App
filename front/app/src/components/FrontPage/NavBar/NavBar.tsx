import React from "react";
import SubBar from "./SubBar.tsx";
import { NavBarStyle } from "../../../styles/FrontPageStyle/NavBar.style.ts";

function NavBar() {
  return (
    <NavBarStyle>
      <SubBar />
    </NavBarStyle>
  );
}

export default NavBar;
