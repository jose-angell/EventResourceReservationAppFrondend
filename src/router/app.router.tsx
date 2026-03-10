import { createBrowserRouter, Navigate } from "react-router";
import HomePage from '../bookit/pages/HomePages';
import { BookitLayout } from "../bookit/layouts/BookitLayout";
import ResourcePage from "../bookit/resource/ResourcePage";
import Checkout from "../bookit/pages/Checkout";


export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <BookitLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: "/resource/:id",
                element: <ResourcePage/>
            },
            {
                path: "/checkout",
                element: <Checkout/>
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to='/'/>
    }
])