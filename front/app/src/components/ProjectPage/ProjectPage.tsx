import React from "react";

import { ProjectPageStyle } from "../../styles/ProjectPageStyle/ProjectPage.style.ts";
import MainBox from "./Boxes/MainBox.tsx";
import Project1 from "./Boxes/Project1.tsx";
import Project2 from "./Boxes/Project2.tsx";
import Project3 from "./Boxes/Project3.tsx";

/*function Image() {
  return <img src={logo} alt="Logo" />;
}------> balise <Image/>*/

function ProjectPage() {
  return (
    <ProjectPageStyle>
      <MainBox />
      <Project1 />
      <Project2 />
      <Project3 />
    </ProjectPageStyle>
  );
}

export default ProjectPage;
