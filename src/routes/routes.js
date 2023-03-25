import React from "react";
import { createBrowserRouter } from 'react-router-dom';

import Layout from "../layout/Layout";

import Home from "../views/Home";

const innerRoutes = [
    {
        path:"/",
        element:<Home/>
    },
];

const fullRoutes = [{
    path:'/',
    element: <Layout/>,
    children: innerRoutes
}];


const router = createBrowserRouter(fullRoutes);

export default router;