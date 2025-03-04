import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext';
import './index.css';
import Layout from './layout.jsx';
import Aboutus from './page/aboutus.jsx';
import Event from './page/event.jsx';
import Gallery from './page/galley.jsx';
import Login from './page/login.jsx';
import Logout from './page/logout.jsx';
import MenuPage from './page/menu.jsx';
import Orders from './page/order.jsx';
import Profile from './page/profile.jsx';
import SignUp from './page/signup.jsx';

// Define routes
const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <App /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <SignUp /> },
      { path: 'menu', element: <MenuPage /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'events', element: <Event /> },
      { path: 'aboutus', element: <Aboutus /> },
      { 
        path: "profile", 
        children: [
          { path: '', element: <Profile /> },
          { path: "orders", element: <Orders /> },
          { path: "logout", element: <Logout /> },
        ]
      },
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

