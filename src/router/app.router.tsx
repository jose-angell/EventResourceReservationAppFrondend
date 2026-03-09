import { createBrowserRouter } from "react-router";
import HomePage from '../bookit/pages/HomePages';
import { BookitLayout } from "../bookit/layouts/BookitLayout";


export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <BookitLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            }
        ]
    },
])