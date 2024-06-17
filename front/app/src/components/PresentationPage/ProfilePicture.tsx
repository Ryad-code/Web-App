import React from "react";
import { ProfilePicStyle } from "../../styles/AboutPageStyle/About.style.ts";
import Img from "../../img/photo-modified.png";

function ProfilePic() {
  return (
    <ProfilePicStyle>
      <img
        src={Img}
        width="70%"
        height="70%"
        margin-top="2000px"
        padding-left="200px"
      />
    </ProfilePicStyle>
  );
}

export default ProfilePic;
