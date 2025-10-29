import React from "react";
import { AppStateProvider } from "./state/AppState";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Landing from "./routes/Landing";
import Cuisine from "./routes/Cuisine";
import Pantry from "./routes/Pantry";
import Constraints from "./routes/Constraints";
import Results from "./routes/Results";
import Recipe from "./routes/Recipe";
import "./styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Landing /> },
      { path: "cuisine", element: <Cuisine /> },
      { path: "pantry", element: <Pantry /> },
      { path: "constraints", element: <Constraints /> },
      { path: "results", element: <Results /> },
      { path: "recipe/:id", element: <Recipe /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppStateProvider>
      <RouterProvider router={router} />
    </AppStateProvider>
  </React.StrictMode>
);