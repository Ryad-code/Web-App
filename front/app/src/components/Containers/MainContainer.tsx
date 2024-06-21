import React from "react";
import SubContainer from "./SubContainer";
import { MainContainerStyle } from "../../styles/new_style/MainContainer.style";

function MainContainer({
  title,
  subtitle,
  text,
}: {
  title: string;
  subtitle: string;
  text: string;
}) {
  return (
    <MainContainerStyle>
      <SubContainer title={title} subtitle={subtitle} text={text} />
    </MainContainerStyle>
  );
}

export default MainContainer;
