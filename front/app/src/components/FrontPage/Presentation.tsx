import React from "react";
import {
  Button,
  NameStyle,
  PresentationStyle,
  WelcomeStyle,
} from "../../styles/FrontPageStyle/FrontPage.style.ts";

function Presentation() {
  return (
    <PresentationStyle>
      <WelcomeStyle>
        <h1>Welcome</h1>
      </WelcomeStyle>
      <NameStyle>
        <h2>I'm Ryad Laouedj</h2>
      </NameStyle>
      <p>
        Creative developer & student at 42 Paris. Between Design & Code I try to
        create intuitive interfaces for user through a Logic & Organized based
        code.
      </p>
      <Button>Lets Start</Button>
    </PresentationStyle>
  );
}

export default Presentation;
