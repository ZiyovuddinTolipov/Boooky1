import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routs from "./Routs/Routs";
import { RouterProvider } from "react-router-dom";
import "./i18n";

// import Loading from './components/loading/Loading';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback>
      <RouterProvider router={Routs} />
    </Suspense>
  </React.StrictMode>
);
