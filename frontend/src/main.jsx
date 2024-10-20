  import { StrictMode } from 'react';
  import { createRoot } from 'react-dom/client';
  import { createBrowserRouter, RouterProvider } from 'react-router-dom';
  import App from './App.jsx';
  import './index.css';
  import Login from './page/Login.jsx' ;
  import SignUp from './page/signup.jsx';
  import Logout from "./page/logout.jsx" ;
  import Profile from './page/profile.jsx';
  import MenuPage from './page/menu.jsx' ;
  import Gallery from './page/galley.jsx' ;
  import Event  from './page/event.jsx';
  import Aboutus from './page/aboutus.jsx';
  import Orders from "./page/order.jsx" ;
  import RootLayout from "./components/layout.jsx"

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/login',
      element: <Login />, 
    },
    {
      path: '/signup',
      element: <SignUp />, 
    },
    {
      path : '/menu',
      element : <MenuPage />,
    },
    {
      path : '/gallery',
      element : <Gallery />,

    },
    {
      path : "/events",
      element : <Event />,
    },
    {
      path : "/about us",
      element : <Aboutus/>
    },
    {

      path: '/profile',
      element: <RootLayout />, 
      children: [
        {
          path: '', 
          element: <Profile />, 
        },
        {
          path: 'orders', 
          element: <Orders />,
        },
        {
          path: 'logout', 
          element: <Logout />,
        },
      ],
    },
  ]);

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
