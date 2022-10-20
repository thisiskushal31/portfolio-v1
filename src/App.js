import React from 'react';

import Home from './Pages/Home';
import About from './Pages/About';
import Education from './Pages/Education';
import Skills from './Pages/Skills';
import Project from './Pages/Project';
import Contact from './Pages/Contacts';

import './Styles/main.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Home About Education Skills Project Contacts

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contacts" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
