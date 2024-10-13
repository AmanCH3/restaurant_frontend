import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Login from './page/Login.jsx' ;
import SignUp from './page/signup.jsx';
import Profile from './page/profile.jsx' ;

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
    path : '/profile',
    element : <Profile />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
