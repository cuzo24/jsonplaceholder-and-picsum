import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar.js';
import Home from './pages/Home/Home.js';
import Albums from './pages/Albums/Albums.js';

// Global style
import './style.scss';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="albums" element={<Albums />} />
      </Route>
    </Routes>
  );
}