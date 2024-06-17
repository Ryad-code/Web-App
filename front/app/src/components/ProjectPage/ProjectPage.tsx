import React from "react";

import {
  ProjectPageStyle,
  TitleStyle,
} from "../../styles/ProjectPageStyle/ProjectPage.style.ts";
import SubProjectPage from "./Boxes/SubProjectPage.tsx";

function ProjectPage() {
  return (
    <ProjectPageStyle>
      <TitleStyle>
        <h1>Projects</h1>
      </TitleStyle>
      <SubProjectPage />
    </ProjectPageStyle>
  );
}

export default ProjectPage;
