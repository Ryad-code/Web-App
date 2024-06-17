import React from "react";

import { SubProjectPageStyle } from "../../../styles/ProjectPageStyle/ProjectPage.style.ts";
import ProjectRow1 from "./ProjectRow1.tsx";
import ProjectRow2 from "./ProjectRow2.tsx";

function SubProjectPage() {
  return (
    <SubProjectPageStyle>
      <ProjectRow1 />
      <ProjectRow2 />
    </SubProjectPageStyle>
  );
}

export default SubProjectPage;
