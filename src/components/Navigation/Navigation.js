import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import './Navigation.css'


function Navigation() {
  return (
    <div className = 'navBar'>
      {/* не авторизованный пользователь 
      isLogged === false ?  */}
      <Link to={'/signup'} className='navBar__link-unLogged'>Регистрация</Link>
      <Link to={'/signin'} className='navBar__link-unLogged'>Войти</Link>
      {/* авторизованный 
      isLogged =  true*/}

      {/* // бургером станет */}
    </div>
  
  )
  
} 

export default Navigation;