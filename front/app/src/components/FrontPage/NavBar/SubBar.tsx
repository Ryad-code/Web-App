import React from "react";
import Logo from "./Logo.tsx";
import Menu from "./Menu.tsx";

import { SubBarStyle } from "../../../styles/FrontPageStyle/NavBar.style.ts";

function SubBar() {
  return (
    <SubBarStyle>
      <Logo />
      <Menu />
    </SubBarStyle>
  );
}

export default SubBar;
