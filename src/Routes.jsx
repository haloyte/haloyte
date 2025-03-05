import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "landing",
      element: <Landing />,
    },
    {
      path: "aboutus",
      element: <Aboutus />,
    },
    {
      path: "services",
      element: <Services />,
    },
    {
      path: "projects",
      element: <Projects />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
    {
      path: "blog",
      element: <Blog />,
    },
  ]);

  return element;
};

export default ProjectRoutes;

