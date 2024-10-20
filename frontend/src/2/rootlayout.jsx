// src/profile/RootLayout.jsx
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';

const RootLayout = () => {
  return (
    <div className="root-layout">
      <Sidebar /> 
      <main>
        <Outlet />  
      </main>
    </div>
  );
};

export default RootLayout;
