import { createBrowserRouter, Navigate } from "react-router";
import HomePage from '../bookit/pages/HomePages';
import { BookitLayout } from "../bookit/layouts/BookitLayout";
import ResourcePage from "../bookit/resource/ResourcePage";
import Checkout from "../bookit/pages/Checkout";
import AuthLayout from "../auth/layouts/AuthLayout";
import LoginPage from "../auth/pages/LoginPage";
import RegisterPage from "../auth/pages/RegisterPage";
import DashboardLayout from "../bookit/pages/profileClient/DashboardClient";
import DashboardOrders from "../bookit/dashboard/Orders";
import OrdersDetails from "../bookit/dashboard/OrdersDetails";
import DashboardHistory from "../bookit/dashboard/History";
import DashboardPanel from "../bookit/dashboard/Panel";
import DashboardProfile from "../bookit/dashboard/Profile";
import DashboardPayment from "../bookit/dashboard/Payment";
import DashboardSecurity from "../bookit/dashboard/Security";


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
    // profile client routes
    {
        path:'/profile',
        element: <DashboardLayout/>,
        children: [
            {
                index: true,
                element: <DashboardPanel />
            },
            {
                path: 'orders',
                element: <DashboardOrders/>
            },
             {
                path: 'orders/:id',
                element: <OrdersDetails/>
            },
            {
                path: 'history',
                element: <DashboardHistory/>
            },
            {
                path: 'client',
                element: <DashboardProfile/>
            },
            {
                path: 'payment-methods',
                element: <DashboardPayment/>
            },
            {
                path: 'security',
                element: <DashboardSecurity/>
            },
            
        ]
    },
    {
        path: '*',
        element: <Navigate to='/'/>
    }
])