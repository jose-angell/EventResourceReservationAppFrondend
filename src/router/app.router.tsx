import { createBrowserRouter, Navigate } from "react-router";

// auth
import AuthLayout from "../auth/layouts/AuthLayout";
import LoginPage from "../auth/pages/LoginPage";
import RegisterPage from "../auth/pages/RegisterPage";

// bookit
import HomePage from '../bookit/pages/HomePages';
import { BookitLayout } from "../bookit/layouts/BookitLayout";
import { ProductDetail } from "../bookit/components/ProductDetail";
import { Checkout } from "../bookit/pages/Checkout";

// user
import { UserLayout } from "../user/layouts/UserLayout";
import UserDashboard from "../user/pages/UserDashboard";


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
                path: "product/:id",
                element: <ProductDetail/>
            },
            {
                path: "checkout",
                element: <Checkout/>
            },
        ]
    },
    // Auth routes
    {
        path: "/auth",
        element: <AuthLayout/>,
        children: [
            {
                index:true,
                element: <Navigate to='/auth/login'/>
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
    // user routes
    {
        path:'/user',
        element: <UserLayout/>,
        children: [
            {
                index: true,
                element: <UserDashboard />
            },
            
        ]
    },
    {
        path: '*',
        element: <Navigate to='/'/>
    }
])