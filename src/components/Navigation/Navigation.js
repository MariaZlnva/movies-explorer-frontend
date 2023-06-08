import React, { useState } from "react";
import { Link } from "react-router-dom";

import './Navigation.css'
// import iconAvat from '../../images/foto__avatar';

function Navigation({ isLoggedIn }) {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleClickBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  }

  return (
      <div className = 'navBar navBar_burgerPosition'>
        {
          isLoggedIn ? 
          <>
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
            <button className="navBar__burger" onClick={handleClickBurger}>
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