import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home/Home';
import Pricing from './pricing/Pricing';
import Team from './team/Team';
import Contact from './contact/Contact';

function Header() {
  return (
    <Router>
      <div className="Header">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Header;
