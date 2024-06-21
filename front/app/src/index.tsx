import * as React from "react";
import ReactDOM from "react-dom/client";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import SecondPage from "./components/SeconPage";
import MainContainer from "./components/Containers/MainContainer";

let Title1: string = "Welcome";
let Title2: string = "About me";
let SubTitle1: string = "I am Ryad Laouedj";
let SubTitle2: string = "My journet with code";
let Text1: string =
  "Creative developer & student at 42 Paris. Between Design & Code I try to create intuitive interfaces for user through a Logic & Organized based code.";
let Text2: string =
  "Before I stepped into the world of Web developmentI had many various experiences such as Law, Art or Graphic Design. This journey made me sure about something: I'm passionate about crafting experiences that are engaging, accessible, and user-centric. That is why I like to think as myself as a Creative Developer engaged to resolve problems revolving between Development and Design";
let IsButton: boolean = true;

const Root = () => {
  return (
    <div>
      <Link to={"/HomePage"} className="nav-link">
        {" "}
        Home{" "}
      </Link>
      <MainContainer title={Title1} subtitle={SubTitle1} text={Text1} />
      <MainContainer title={Title2} subtitle={SubTitle2} text={Text2} />
      <Outlet />
    </div>
  );
};

// Configure nested routes with JSX
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/Homepage" element={<HomePage />} />
      <Route path="/Seconpage" element={<SecondPage />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<RouterProvider router={router} />);
