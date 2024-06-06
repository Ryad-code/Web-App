import React from "react";
import "../styles/App.css";
import FrontPage from "./FrontPage/FrontPage.tsx";
import ProjectPage from "./ProjectPage/ProjectPage.tsx";
import AboutPage from "./PresentationPage/AboutPage.tsx";

function App() {
  return (
    <div>
      <FrontPage />
      <AboutPage />
      <ProjectPage />
    </div>
  );
}

export default App;
