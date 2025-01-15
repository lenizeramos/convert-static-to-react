import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout.tsx";
import About from "./components/About.tsx";
import Paint from "./components/Paint.tsx";
import Works from "./components/Works.tsx";
import Reverberate from "./components/Reverberate.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>404 Not Found</h1>,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "reverberate",
        element: <Reverberate />,
      },
      {
        path: "works",
        element: <Works />,
      },
      {
        path: "paint",
        element: <Paint />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
