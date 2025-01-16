import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/sass/index.scss"
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout.tsx";

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
        element: null,
      },
      {
        path: "works",
        element: null,
      },
      {
        path: "paint",
        element: null,
      },
      {
        path: "about",
        element: null,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
