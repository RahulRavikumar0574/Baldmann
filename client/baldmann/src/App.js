

import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Featured from './components/Featured';
import BCI from './components/BCI';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import BlogPage from './pages/BlogPage';
import Courses from './pages/Courses';
import MLmodel from './pages/MLmodel';
import BaldSphere from './pages/BaldSphere';
import BaldSphereApp from './pages/BaldSphereApp';
import AboutAndTeam from './pages/AboutAndTeam';
import ScrollToTop from './components/ScrollToTop';
import BaldSphereNavbar from './pages/BaldSphere/components/BaldSphereNavbar';

// Wrapper component to conditionally render navbar
function AppContent() {
  const location = useLocation();
  const isBaldSphereApp = location.pathname.startsWith('/baldsphere/app/');
  const isBaldSphereAuth = location.pathname === '/baldsphere' || location.pathname === '/baldsphere/auth';

  return (
    <>
      <ScrollToTop/>
      {/* Only show BaldSphereNavbar for /baldsphere/app/*, show Navbar for others, and no navbar for /baldsphere or /baldsphere/auth */}
      {isBaldSphereApp ? <BaldSphereNavbar /> : (!isBaldSphereAuth && <Navbar />)}
      <Routes>
        {/* Home route with main sections */}
        <Route 
          path="/" 
          element={
            <>
              <div id="hero">
                <HeroSection />
                <BCI />
              </div>
              <div>
                <AboutUs/>
              </div>
              {/* <div id="courses">
                <Courses/>
              </div> */}
              <div id="model">
                <MLmodel/>
              </div>
              {/* <div id="brain_game">
                <BrainGame/>
              </div> */}
              {/* <div id="baldSphere">
                <BaldSphere/>
              </div> */}
              <div id="featured">
                <Featured />
              </div>
              {/* <div id="contact">
                <ContactUs />
              </div> */}
              {/* <div id="about">
                <Partners />
              </div> */}
            </>
          } 
        />
        
        <Route path="/blog/:id" element={<BlogPage />}/>
        
        {/* BaldSphere Routes */}
        <Route path="/baldsphere" element={<BaldSphere />} />
        <Route path="/baldsphere/auth" element={<BaldSphere />} />
        <Route path="/baldsphere/app/*" element={<BaldSphereApp />} />
        
        {/* <Route path="/about" element={<AboutUs />} /> */}
        {/* <Route path="/partners" element={<Partners />} /> */}
        {/* <Route path="/contact" element={<ContactUs />} /> */}
        <Route path="/team" element={<AboutAndTeam />} />
        <Route path="/learn" element={<Courses />} />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
