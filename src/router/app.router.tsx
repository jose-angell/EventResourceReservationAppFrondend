import { createBrowserRouter, Navigate } from "react-router";
import HomePage from '../bookit/pages/HomePages';
import { BookitLayout } from "../bookit/layouts/BookitLayout";
import AuthLayout from "../auth/layouts/AuthLayout";
import LoginPage from "../auth/pages/LoginPage";
import RegisterPage from "../auth/pages/RegisterPage";
import DashboardLayout from "../bookit/pages/profileClient/DashboardClient";
import DashboardOrders from "../bookit/dashboardClient/Orders";
import OrdersDetails from "../bookit/dashboardClient/OrdersDetails";
import DashboardHistory from "../bookit/dashboardClient/History";
import DashboardPanel from "../bookit/dashboardClient/Panel";
import DashboardProfile from "../bookit/dashboardClient/Profile";
import DashboardPayment from "../bookit/dashboardClient/Payment";
import DashboardSecurity from "../bookit/dashboardClient/Security";
import { ProductDetail } from "../bookit/Components/ProductDetail";
import { Checkout } from "../bookit/pages/Checkout";


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