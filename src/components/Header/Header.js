import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import './Header.css';
import Navigation from '../Navigation/Navigation';


function Header() {
return (
  <header className='header header_unLogged'>
    <Link to = '/' className = 'header__logo hover'/>
    <Navigation />
  </header>
  )
}

export default Header;
