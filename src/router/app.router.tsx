import { createBrowserRouter, Navigate } from "react-router";
import HomePage from '../bookit/pages/HomePages';
import { BookitLayout } from "../bookit/layouts/BookitLayout";
import ResourcePage from "../bookit/resource/ResourcePage";
import Checkout from "../bookit/pages/Checkout";
import AuthLayout from "../auth/layouts/AuthLayout";
import LoginPage from "../auth/pages/LoginPage";
import RegisterPage from "../auth/pages/RegisterPage";


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
            },
        ]
    },
    // Auth routes
    {
        path:'/auth',
        element: <AuthLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to="/auth/loing"/>
            },
            {
                path: 'login',
                element: <LoginPage/>
            },
            {
                path: 'register',
                element: <RegisterPage/>
            },
        ]
    },
    {
        path: '*',
        element: <Navigate to='/'/>
    }
])