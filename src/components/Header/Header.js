import React from "react";
import { useLocation } from 'react-router-dom';

import './Header.css';
import LogoApp from '../LogoApp/LogoApp';
import Navigation from '../Navigation/Navigation';


function Header({isLoggedIn, onClickBurger, isBurgerOpen}) {
  const location = useLocation();
  return (
    <header className={location.pathname === '/' ? 'header header_type_unLogged' : 'header '}>
      <LogoApp />
      <Navigation isLoggedIn={isLoggedIn} onClickBurger={onClickBurger} isBurgerOpen={isBurgerOpen}/> 
    </header>
    )
}

export default Header;
