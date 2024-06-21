import React from "react";
import { MainTitleStyle } from "../../styles/new_style/SubContainer.style";
import SubTitle from "./Subtitle";

function MainTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <MainTitleStyle>
      <h1>{title}</h1>
      <SubTitle subtitle={subtitle} />
    </MainTitleStyle>
  );
}

export default MainTitle;
