import React from "react";

import './Header.css';
import LogoApp from '../LogoApp/LogoApp';
import Navigation from '../Navigation/Navigation';


function Header({isLoggedIn}) {
  console.log(isLoggedIn);
  return (
    <header className={isLoggedIn ? 'header' : 'header header_unLogged'}>
      <LogoApp />
      <Navigation isLoggedIn={isLoggedIn}/> 
    </header>
    )
}

export default Header;
