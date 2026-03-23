import { createBrowserRouter, Navigate } from "react-router";

// auth
import AuthLayout from "../auth/layouts/AuthLayout";
import { LoginPage } from "../auth/pages/LoginPage";
import { RegisterPage } from "../auth/pages/RegisterPage";


// bookit
import HomePage from '../bookit/pages/HomePages';
import { BookitLayout } from "../bookit/layouts/BookitLayout";
import { ProductDetail } from "../bookit/components/ProductDetail";
import { Checkout } from "../bookit/pages/Checkout";

// user
import { UserLayout } from "../user/layouts/UserLayout";
import { UserDashboard } from "../user/pages/UserDashboard";
import { UserProfile } from "../user/components/UserProfile";
import { UserReservations } from "../user/components/UserReservations";
import { UserReservationDetail } from "../user/components/UserReservationDetail";

// admin
import { AdminLayout } from "../admin/layouts/AdminLayout";
import { AdminDashboard } from "../admin/pages/AdminDashboard";
import { AdminProduct } from "../admin/components/AdminProduct";
import { ProductForm } from "../admin/components/ProductForm";
import { AdminReservations } from "../admin/components/AdminReservations";
import { AdminReservationDetail } from "../admin/components/AdminReservationDetail";
import { ClientManagement } from "../admin/components/ClientManagment";
import ClientDetails from "../admin/components/ClientDetails";


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
            {
                path: 'profile',
                element: <UserProfile/>
            },
            {
                path: 'reservations',
                element: <UserReservations />
            },
            {
                path: 'reservation-detail/:id',
                element: <UserReservationDetail/>            }
            
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <AdminDashboard/>
            },
            {
                path: 'products',
                element: <AdminProduct />
            },
            {
                path: 'product/:id',
                element: <ProductForm />
            },
            {
                path: 'reservations',
                element: <AdminReservations />
            },
            {
                path: 'reservation-detail/:id',
                element: <AdminReservationDetail />
            },
            {
                path: 'clients',
                element: <ClientManagement />
            },
            {
                path: 'client-detail/:id',
                element: <ClientDetails />
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to='/'/>
    }
])