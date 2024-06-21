import React from "react";
import {
  Button,
  SubContainerStyle,
  TextStyle,
} from "../../styles/new_style/SubContainer.style";
import MainTitle from "./MainTitle";

function SubContainer({
  title,
  subtitle,
  text,
}: {
  title: string;
  subtitle: string;
  text: string;
}) {
  if (title == "Welcome") {
    return (
      <SubContainerStyle>
        <MainTitle title={title} subtitle={subtitle} />
        <TextStyle>{text}</TextStyle>
        <Button>See more</Button>
      </SubContainerStyle>
    );
  } else {
    return (
      <SubContainerStyle>
        <MainTitle title={title} subtitle={subtitle} />
        <TextStyle>{text}</TextStyle>
      </SubContainerStyle>
    );
  }
}

export default SubContainer;
