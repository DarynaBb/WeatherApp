import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/Root';
import Location from '../pages/Location';
import Dashboard from '../pages/Dashboard';


export const router = createBrowserRouter([
    {
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "/:city",
                element: <Location />
            }
        ]
    }
])