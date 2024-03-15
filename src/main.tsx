import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./pages/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "@fontsource/inter";
import "./index.css";
import ErrorPage from "./pages/ErrorPage";
import CityWeatherPage, {
  loader as contactLoader,
} from "./pages/CityWeatherPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root cities={[]} />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/contacts/:contactId",
        element: <CityWeatherPage />,
        loader: contactLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
