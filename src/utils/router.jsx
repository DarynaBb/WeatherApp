import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/Root';
import Location from '../pages/Location';
<<<<<<< HEAD
import { NotFoundPage } from '../pages/NotFoundPage';
=======
import Dashboard from '../pages/Dashboard';
>>>>>>> e47587f1cce4c358f4c59c2fc352c2dbd2eb6675


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