import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import './Navigation.css';

function Navigation({ isLoggedIn, onClickBurger, isBurgerOpen }) {
  const location = useLocation();
  return (
    <div className='navBar navBar_burgerPosition'>
      {isLoggedIn ? (
        <>
          <nav className='navBar__logged'>
            <ul className='navBar__wrap'>
              <li>
                <NavLink
                  to={'/movies'}
                  className={
                    location.pathname === '/movies'
                      ? 'navBar__link-logged navBar__link-logged_active'
                      : 'navBar__link-logged'
                  }
                >
                  Фильмы
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/saved-movies'}
                  className={
                    location.pathname === '/saved-movies'
                      ? 'navBar__link-logged navBar__link-logged_active'
                      : 'navBar__link-logged'
                  }
                >
                  Сохранённые фильмы
                </NavLink>
              </li>
            </ul>
            <NavLink to={'/profile'} className='navBar__profile'>
              Аккаунт
              <span className='navBar__profile-logo'></span>
            </NavLink>
          </nav>
          <button className='navBar__burger' onClick={onClickBurger} type='button'>
            <span
              className={
                isBurgerOpen
                  ? 'navBar__burgerLine navBar__burger_active'
                  : 'navBar__burgerLine'
              }
            ></span>
            <span
              className={
                isBurgerOpen
                  ? 'navBar__burgerLine navBar__burger_active'
                  : 'navBar__burgerLine'
              }
            ></span>
            <span
              className={
                isBurgerOpen
                  ? 'navBar__burgerLine navBar__burger_active'
                  : 'navBar__burgerLine'
              }
            ></span>
          </button>
        </>
      ) : (
        <nav className='navBar__unLogged'>
          <ul className='navBar__unLogged-list'>
            <li className='navBar__unLogged-item'>
              <Link to={'/signup'} className='navBar__link-unLogged'>
                <button type='button' className='navBar__unLogged-btn'>
                  Регистрация
                </button>
              </Link>
            </li>
            <li className='navBar__unLogged-item'>
              <Link to={'/signin'} className='navBar__link-unLogged'>
                <button
                  type='button'
                  className='navBar__unLogged-btn navBar__unLogged-btn_type_login'
                >
                  Войти
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Navigation;
