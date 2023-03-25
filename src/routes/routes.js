import React from "react";
import { createBrowserRouter } from 'react-router-dom';

import Layout from "../layout/Layout";

import App from "../App";

const innerRoutes = [
    {
        path:"/",
        element:<App/>
    },
];

const fullRoutes = [{
    path:'/',
    element: <Layout/>,
    children: innerRoutes
}];


const router = createBrowserRouter(fullRoutes);

export default router;