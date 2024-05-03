import React from "react";
import { PresentationPageStyle } from "../../styles/PresentationPageStyle/PresentationPage.style.ts";

function PresentationPage() {
  return (
    <PresentationPageStyle>
      <h1>About me</h1>
      <p>
        I am Ryad Laouedj, 28 years old and student at 42 Paris. After studying
        law and art I decided to dive into the programming world. I see
        programming as a way of solving everyday problems but also as a tool of
        Creativity My course at 42 Paris made me approach several subjects as
        Algorithms, Graphic Design or Love Now web interfaces form my
        predilection subject That is why I am currently looking for an
        internship in Paris as a Front/Back/Full Stack engineer
      </p>
      <path
        fill="#03599C"
        d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"
      ></path>
    </PresentationPageStyle>
  );
}

export default PresentationPage;
