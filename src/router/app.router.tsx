import { createBrowserRouter } from "react-router";
import HomePage from '../bookit/pages/HomePages';


export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
])