import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import './Navigation.css'

function Navigation({ isLoggedIn, onClickBurger, isBurgerOpen }) {
  const location = useLocation();
  return (
      <div className = 'navBar navBar_burgerPosition'>
        {
          isLoggedIn ? 
          <>
           <div className = 'navBar__logged'>
              <div className='navBar__wrap'>
                <NavLink to={'/movies'} className={location.pathname === '/movies' ? 'navBar__link-logged navBar__link-logged_active' : 'navBar__link-logged'}>Фильмы</NavLink>
                <NavLink to={'/saved-movies'} className={location.pathname === '/saved-movies' ? 'navBar__link-logged navBar__link-logged_active' : 'navBar__link-logged'}>Сохранённые фильмы</NavLink>
              </div>
              <NavLink to={'/profile'} className='navBar__profile'>
                Аккаунт
                <span className='navBar__profile-logo'></span>
              </NavLink>
            </div>
            <button className="navBar__burger" onClick={onClickBurger}>
              <span
                className={
                  isBurgerOpen
                    ? "navBar__burgerLine navBar__burger_active"
                    : "navBar__burgerLine"
                }
              ></span>
              <span
                className={
                  isBurgerOpen
                    ? "navBar__burgerLine navBar__burger_active"
                    : "navBar__burgerLine"
                }
              ></span>
              <span
                className={
                  isBurgerOpen
                    ? "navBar__burgerLine navBar__burger_active"
                    : "navBar__burgerLine"
                }
              ></span>
            </button>
          </>
          : <div className='navBar__unLogged'>
              <Link to={'/signup'} className='navBar__link-unLogged'>Регистрация</Link>
              <Link to={'/signin'} className='navBar__link-unLogged'>Войти</Link>
            </div>
        } 

      </div>
  )
} 

export default Navigation;