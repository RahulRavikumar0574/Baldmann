import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import BaldSphereHome from './BaldSphere/pages/BaldSphereHome';
import BaldSphereChat from './BaldSphere/pages/BaldSphereChat';
import BaldSphereHowItWorks from './BaldSphere/pages/BaldSphereHowItWorks';
import BaldSphereHistory from './BaldSphere/pages/BaldSphereHistory';
import BaldSphereContact from './BaldSphere/pages/BaldSphereContact';
import Footer from './BaldSphere/components/Footer';

// Main BaldSphere Application Component
export default function BaldSphereApp() {
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