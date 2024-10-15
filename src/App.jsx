// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav/Nav';
import Preloader from './components/preloader/Preloader'; // Import your Preloader component
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading by setting a timeout
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Router>
        {/* Conditionally render the preloader based on the loading state */}
        {loading ? (
          <Preloader />
        ) : (
          <>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </>
        )}
      </Router>
    </>
  );
}

export default App;
