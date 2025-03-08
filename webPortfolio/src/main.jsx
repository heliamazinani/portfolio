import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import Commission from "./pages/Commission";
import N from "./components/navbar/navbar"
import Portfolio from "./pages/Portfolio"
import Gallery from "./pages/Gallery"
const router = createBrowserRouter([
  {
    path: "/",
    element: <div><N></N><Home></Home></div>,
  },
  {
    path: "/Home/",
    element: <div><N></N><Home></Home></div>,
  },
  {
    path: "/Commission",
    element: <div><N></N><Commission></Commission></div>,
  },
  {
    path: "/Portfolio",
    element: <div><N></N><Portfolio></Portfolio></div>,
  },
  {
    path: "/Gallery",
    element: <div><N></N><Portfolio></Portfolio></div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
