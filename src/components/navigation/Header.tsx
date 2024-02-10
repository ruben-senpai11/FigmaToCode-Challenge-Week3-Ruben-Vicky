import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../../pages/about/About';
import Pricing from '../../pages/pricing/Pricing';
import Team from '../../pages/team/Team';
import Contact from '../../pages/contact/Contact';
import './navigation.css'
import arrow_right from '../../assets/icn arrow-right .icn-xs.png'
import menuIcon from '../../assets/icn menu .icn-xs.png'
import shopIcon from '../../assets/icn shopping-cart .icn-xs.png'
import searchIcon from '../../assets/icn search .icn-xs.png'
import { useState } from 'react';


function Header() {

  const [mobileNav, setmobileNav] = useState(false);
  
  const toogleMenu = ()=>{
    if (mobileNav == false){
      setmobileNav(true)
    }else{
      setmobileNav(false)
    }
  }
  const setNavFalse =()=>{
    setmobileNav(false)
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional smooth scrolling behavior
    });
  }

  return (
    <Router>
      <div>
        <nav className="navbar">
          <h2 className='logo'>Bandage</h2>
          <ul className={(mobileNav == true ? 'mobile-menu ' : '') + 'nav-links'}>
            <li onClick={setNavFalse}><Link to="/">Home</Link></li>
            <li onClick={setNavFalse}><Link to="#">Product</Link></li>
            <li onClick={setNavFalse}><Link to="/pricing">Pricing</Link></li>
            <li onClick={setNavFalse}><Link to="/contact">Contact</Link></li>
            <li onClick={setNavFalse}><Link to="/team">Team</Link></li>
          </ul>
          <div className="right-nav-links">
            <a href="" className='link'>Login</a>
            <button className="cta">
              Become a member
              <img src={arrow_right} alt="" />
            </button>
          </div>
          <div className="menu-icons">
            <img src={searchIcon} alt="searchIcon" />
            <img src={shopIcon} alt="shopIcon"/>
            <img src={menuIcon} alt="menuIcon"  className='menuIcon' onClick={toogleMenu} />
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
