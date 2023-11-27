import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./style.css";
import Routs from "./Routs/Routs";
import { RouterProvider } from "react-router-dom";
import "./i18n";

// primereact
import { PrimeReactProvider } from 'primereact/api';
                       // core css

// import Loading from './components/loading/Loading';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback>
      <PrimeReactProvider>
        <RouterProvider router={Routs} />
      </PrimeReactProvider>
    </Suspense>

  </React.StrictMode>
);
