import React from "react";
import { FrontPageStyle } from "../../styles/FrontPageStyle/FrontPage.style.ts";

import Text1 from "./Boxes/Text1.tsx";
import Text2 from "./Boxes/Text2.tsx";
import Button from "./Boxes/Button.tsx";

import background from "../../img/background2.png";

const myStyle = {
  backgroundImage: `url(${background})`,
  height: "100vh",
  marginTop: "-70px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

function FrontPage() {
  return (
    <div style={myStyle}>
      <FrontPageStyle>
        <Text1 />
        <Text2 />
        <Button />
      </FrontPageStyle>
    </div>
  );
}

export default FrontPage;
