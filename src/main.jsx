import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import Statics from "./Components/Statics/Statics.jsx";
import Appliedjobs from "./Components/Appliedjobs/Appliedjobs.jsx";
import Blogs from "./Components/Blogs/Blogs.jsx";
import About from "./Components/About/About.jsx";
import Errorpage from "./Components/Errorpage/Errorpage.jsx";
import Jobdetails from "./Components/Jobdetails/Jobdetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statics",
        element: <Statics></Statics>,
      },
      {
        path: "/applied",
        element: <Appliedjobs></Appliedjobs>,
        loader: () => fetch("../jobs.json"),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/job/:id",
        element: <Jobdetails></Jobdetails>,
        loader: () => fetch("../jobs.json"),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
