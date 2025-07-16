import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import BaldSphereHome from './BaldSphere/pages/BaldSphereHome';
import BaldSphereChat from './BaldSphere/pages/BaldSphereChat';
import BaldSphereHowItWorks from './BaldSphere/pages/BaldSphereHowItWorks';
import BaldSphereHistory from './BaldSphere/pages/BaldSphereHistory';
import BaldSphereContact from './BaldSphere/pages/BaldSphereContact';
import Footer from './BaldSphere/components/Footer';

// Main BaldSphere Application Component
export default function BaldSphereApp() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (userData && isLoggedIn === 'true') {
      setUser(JSON.parse(userData));
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading BaldSphere...</p>
        </div>
      </div>
    );
  }

  // If user is not authenticated, redirect to auth page
  if (!user) {
    return <Navigate to="/baldsphere" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      <div className="flex-1 pt-20">
        <Routes>
          <Route path="/" element={<BaldSphereHome />} />
          <Route path="/chat" element={<BaldSphereChat />} />
          <Route path="/how-it-works" element={<BaldSphereHowItWorks />} />
          <Route path="/history" element={<BaldSphereHistory />} />
          <Route path="/contact" element={<BaldSphereContact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
} 