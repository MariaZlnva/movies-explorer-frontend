import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import './Navigation.css'
// import iconAvat from '../../images/foto__avatar';


function Navigation({isLoggedIn}) {
  return (
      <div className = 'navBar'>
        {
          isLoggedIn ? 
            <div className = 'navBar__logged'>
              <div className='navBar__wrap'>
                <Link to={'/movies'} className='navBar__link-logged'>Фильмы</Link>
                <Link to={'/saved-movies'} className='navBar__link-logged'>Сохранённые фильмы</Link>
              </div>
              <Link to={'/profile'} className='navBar__profile'>
                Аккаунт
                <span className='navBar__profile-logo'></span>
              </Link>
            </div>
          : <div className='navBar__unLogged'>
              <Link to={'/signup'} className='navBar__link-unLogged'>Регистрация</Link>
              <Link to={'/signin'} className='navBar__link-unLogged'>Войти</Link>
            </div>
        } 
      </div>
  )
} 

export default Navigation;