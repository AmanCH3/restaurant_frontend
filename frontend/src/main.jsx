import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { AuthProvider } from './context/AuthContext';
import Layout from './layout.jsx';
import App from './App.jsx';
import Aboutus from './page/aboutus.jsx';
import Event from './page/event.jsx';
import Gallery from './page/galley.jsx';
import Login from './page/login.jsx';
import Logout from './page/logout.jsx';
import MenuPage from './page/menu.jsx';
import Orders from './page/order.jsx';
import Profile from './page/profile.jsx';
import SignUp from './page/signup.jsx';
import Cart from './page/cart.jsx';

// Define routes
const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <App /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <SignUp /> },
    ],
  },
  { path: '/menu', element: <MenuPage /> },
  { path: '/gallery', element: <Gallery /> },
  { path: '/events', element: <Event /> },
  { path: '/about us', element: <Aboutus /> },
  {path : '/cart', element: <Cart/>},
  {
    path: '/profile',
    element: <Layout />, // Could also use a dedicated ProfileLayout if needed
    children: [
      { index: true, element: <Profile /> }, // Default profile route
      { path: 'orders', element: <Orders /> },
      { path: 'logout', element: <Logout /> },
    ],
  },
  { path: '*', element: <div>404 - Page Not Found</div> }, // Fallback for undefined routes
];

// Create the router
const router = createBrowserRouter(routes);

// Render the application
// Render the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </RouterProvider>
  </StrictMode>
);

