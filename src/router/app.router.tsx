import { createBrowserRouter, Navigate } from "react-router";
import HomePage from '../bookit/pages/HomePages';
import { BookitLayout } from "../bookit/layouts/BookitLayout";
import ResourcePage from "../bookit/resource/ResourcePage";


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
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to='/'/>
    }
])