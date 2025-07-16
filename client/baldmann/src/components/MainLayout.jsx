
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div>
      <Outlet />  {/* This will render the nested routes */}
      <Footer />  {/* Footer appears only once */}
    </div>
  );
};

export default MainLayout;
