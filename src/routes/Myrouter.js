import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Home from "../components/home/home";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const myRoutes=createBrowserRouter(
    [
        {
            path:"/",
            element: <Home />,
            errorElement:""
        }
    ]
);
export default myRoutes;