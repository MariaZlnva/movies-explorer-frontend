import React from "react";

import './Header.css';
import LogoApp from '../LogoApp/LogoApp';
import Navigation from '../Navigation/Navigation';


function Header({isLoggedIn, onClickBurger, isBurgerOpen}) {
  return (
    <header className={isLoggedIn ? 'header' : 'header header_unLogged'}>
      <LogoApp />
      <Navigation isLoggedIn={isLoggedIn} onClickBurger={onClickBurger} isBurgerOpen={isBurgerOpen}/> 
    </header>
    )
}

export default Header;
