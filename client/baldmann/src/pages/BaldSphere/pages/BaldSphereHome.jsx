import React from 'react';
import HomeBrainModel from '../components/HomeBrainModel';
import ParticlesBackground from '../components/ParticleDesign';

export default function BaldSphereHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Particles Background */}
      <ParticlesBackground colors={["#f0b100", "#000000"]} linkColor="#f0b100" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="/baldsphere/logo.svg" 
              alt="BaldSphere Logo" 
              className="w-20 h-20 mx-auto mb-6 rounded-full"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Welcome to <span className="text-yellow-500">BaldSphere</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore your brain with interactive 3D visualization and AI-powered insights
            </p>
          </div>

          {/* 3D Brain Model */}
          <div className="mb-12">
            <HomeBrainModel />
          </div>

          {/* Button group at the top */}
          <div className="flex flex-col items-center mb-10">
            <div className="flex gap-4 mb-8">
              <a href="/baldsphere/app/chat" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-4 px-10 rounded-full text-lg shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-yellow-400">
                Start Exploring &rarr;
              </a>
              <a href="/baldsphere/app/how-it-works" className="bg-white border-2 border-gray-300 text-gray-700 font-semibold py-4 px-10 rounded-full text-lg shadow-sm hover:bg-gray-100 transition-all focus:outline-none focus:ring-2 focus:ring-yellow-400">
                How It Works
              </a>
            </div>

            {/* Feature cards row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
              <a href="/baldsphere/app/chat" className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center">
                <img src="/baldsphere/chat-icon.svg" alt="Brain Chat" className="w-12 h-12 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Brain Chat</h3>
                <p className="text-gray-600 text-sm">Interactive AI conversations</p>
              </a>
              <a href="/baldsphere/app/history" className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center">
                <img src="/baldsphere/history.svg" alt="History" className="w-12 h-12 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">History</h3>
                <p className="text-gray-600 text-sm">Your chat sessions</p>
              </a>
              <a href="/baldsphere/app/learn" className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center">
                <img src="/baldsphere/learn.svg" alt="Learn" className="w-12 h-12 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Learn</h3>
                <p className="text-gray-600 text-sm">How your brain works</p>
              </a>
              <a href="/baldsphere/app/contact" className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center">
                <img src="/baldsphere/contact.svg" alt="Contact" className="w-12 h-12 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact</h3>
                <p className="text-gray-600 text-sm">Get in touch</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 