import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../../pages/about/About';
import Pricing from '../../pages/pricing/Pricing';
import Team from '../../pages/team/Team';
import Contact from '../../pages/contact/Contact';
import './header.css'
import arrow_right from '../../assets/icn arrow-right .icn-xs.png'

function Header() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <h2 className='logo'>Bandage</h2>
          <ul className='d-flex'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="#">Product</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="right-nav-links d-flex">
            <a href="" className='link'>Login</a>
            <button className="cta">
              Become a member
              <img src={arrow_right} alt="" />
            </button>
          </div>
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
