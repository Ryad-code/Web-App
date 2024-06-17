import React from "react";

import { ProjectRowStyle } from "../../../styles/ProjectPageStyle/ProjectPage.style.ts";
import Project1 from "./Project1.tsx";
import Project2 from "./Project2.tsx";

function ProjectRow1() {
  return (
    <ProjectRowStyle>
      <Project1 />
      <Project2 />
    </ProjectRowStyle>
  );
}

export default ProjectRow1;
