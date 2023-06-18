import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import './Navigation.css';

function Navigation({ isLoggedIn, onClickBurger, isBurgerOpen }) {
  const location = useLocation();
  return (
    <div className='navigation navigation_type_burgerMenu'>
      {isLoggedIn ? (
        <>
          <nav className='navigation__logged'>
            <ul className='navigation__wrap'>
              <li>
                <NavLink
                  to={'/movies'}
                  className={
                    location.pathname === '/movies'
                      ? 'navigation__link-logged navigation__link-logged_active'
                      : 'navigation__link-logged'
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
                      ? 'navigation__link-logged navigation__link-logged_active'
                      : 'navigation__link-logged'
                  }
                >
                  Сохранённые фильмы
                </NavLink>
              </li>
            </ul>
            <NavLink to={'/profile'} className='navigation__profile'>
              Аккаунт
              <span className='navigation__profile-logo'></span>
            </NavLink>
          </nav>
          <button className='navigation__burger' onClick={onClickBurger} type='button'/>
        </>
      ) : (
        <nav className='navigation__unLogged'>
          <ul className='navigation__unLogged-list'>
            <li className='navigation__unLogged-item'>
              <Link to={'/signup'} className='navigation__link-unLogged'>
                  Регистрация
              </Link>
            </li>
            <li className='navigation__unLogged-item'>
              <Link to={'/signin'} className='navigation__link-unLogged navigation__link-unLogged_type_login'>
                  Войти
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Navigation;
