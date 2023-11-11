import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/Root';
import Location from '../pages/Location';

import { NotFoundPage } from '../pages/NotFoundPage';

import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';



export const router = createBrowserRouter([
    {
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "/:city",
                element: <Location />
            },
            {
                path: '/*',
                element: <NotFoundPage/>
            },
        ]
    }
])