import React from "react";
import "../styles/App.css";
import FrontPage from "./FrontPage/FrontPage.tsx";
import PresentationPage from "./PresentationPage/PresentationPage.tsx";
import ProjectPage from "./ProjectPage/ProjectPage.tsx";

function App() {
  return (
    <div>
      <FrontPage />
      <PresentationPage />
      <ProjectPage />
    </div>
  );
}

export default App;
