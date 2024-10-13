import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // import necessary components
import App from './App.jsx';
import './index.css';

import Login from './page/Login.jsx';
import SignUp from './page/signup.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,

    path : '/signup',
    element : <SignUp/>,
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Use RouterProvider to apply routes */}
  </StrictMode>
);
