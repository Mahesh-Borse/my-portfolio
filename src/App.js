
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

// Main App Component
const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/my-portfolio/home" element={<Home />} />
            <Route path="/my-portfolio/projects" element={<Projects />} />
            <Route path="/my-portfolio/about" element={<About />} />
            <Route path="/my-portfolio/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;