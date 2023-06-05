import React from "react";

import './Header.css';
import LogoApp from '../LogoApp/LogoApp';
import Navigation from '../Navigation/Navigation';


function Header() {
return (
  <header className='header header_unLogged'>
    <LogoApp />
    <Navigation />
  </header>
  )
}

export default Header;
