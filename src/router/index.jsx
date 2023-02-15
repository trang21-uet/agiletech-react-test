import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Home, Login, Profile } from '../pages';

const AuthLayout = () => <Outlet />;

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        element: <Login />,
        path: '/login',
      },
      {
        element: <Home />,
        path: '/',
      },
      {
        element: <Profile />,
        path: '/profile',
      },
    ],
  },
]);

export default router;
