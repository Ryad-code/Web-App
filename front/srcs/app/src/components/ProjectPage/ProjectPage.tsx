import React from "react";
import logo from "../../img/logo192.png";

import { ProjectPageStyle } from "../../styles/ProjectPageStyle/ProjectPage.style.ts";

function Image() {
  return <img src={logo} alt="Logo" />;
}

function ProjectPage() {
  return (
    <ProjectPageStyle>
      <p>Hello</p>
      <Image />
    </ProjectPageStyle>
  );
}

export default ProjectPage;
