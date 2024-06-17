import React from "react";
import {
  Project1Style,
  ProjectTextStyle,
  ProjectTitle,
} from "../../../styles/ProjectPageStyle/ProjectPage.style.ts";
import { Button } from "../../../styles/FrontPageStyle/FrontPage.style.ts";
import ProjectImage from "../../../img/project_img.jpg";

function Project1() {
  return (
    <Project1Style>
      <img src={ProjectImage} width="80%" height="53%" />
      <ProjectTitle>PROJECT 1</ProjectTitle>
      <ProjectTextStyle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </ProjectTextStyle>
      <Button>Look it up</Button>
    </Project1Style>
  );
}

export default Project1;
