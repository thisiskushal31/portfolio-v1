import React from 'react';
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
            <Route path="/login" element={<About />} />
            <Route path="/signup" element={< />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
