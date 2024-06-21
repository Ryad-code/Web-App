import React from "react";
import { SubTitleStyle } from "../../styles/new_style/SubContainer.style";

function SubTitle({ subtitle }: { subtitle: string }) {
  return (
    <SubTitleStyle>
      <h2>{subtitle}</h2>
    </SubTitleStyle>
  );
}

export default SubTitle;
