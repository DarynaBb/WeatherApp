import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/Root';
import Dashboard from '../components/Dashboard';
import Location from '../pages/Location';
import { NotFoundPage } from '../pages/NotFoundPage';


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
            },
            {
                path: '/*',
                element: <NotFoundPage/>
            },
        ]
    }
])