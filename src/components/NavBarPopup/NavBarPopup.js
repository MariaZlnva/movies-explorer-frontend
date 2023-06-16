import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import './NavBarPopup.css';

function NavBarPopup({ isOpen, onClickBurger }) {
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscClose);
      document.addEventListener('mousedown', handleMousedown);
    }
    return () => {
      document.removeEventListener('keydown', handleEscClose);
      document.removeEventListener('mousedown', handleMousedown);
    };
  }, [isOpen]);

  function handleEscClose(evt) {
    if (evt.key === 'Escape') {
      onClickBurger();
    }
  }

  function handleMousedown(evt) {
    if (evt.target.classList.contains('popup_opened')) {
      onClickBurger();
    }
  }

  return (
      <div className={`popup__navBar ${isOpen ? 'popup_opened' : ''}`}>
        <div className='popup__navBar-content'>
          <div className='popup__wrap'>
            <NavLink
              to={'/'}
              className={
                location.pathname === '/'
                  ? 'popup__navBar-link popup__navBar-link_active'
                  : 'popup__navBar-link'
              }
              onClick={onClickBurger}
            >
              Главная
            </NavLink>
            <NavLink
              to={'/movies'}
              className={
                location.pathname === '/movies'
                  ? 'popup__navBar-link popup__navBar-link_active'
                  : 'popup__navBar-link'
              }
              onClick={onClickBurger}
            >
              Фильмы
            </NavLink>
            <NavLink
              to={'/saved-movies'}
              className={
                location.pathname === '/saved-movies'
                  ? 'popup__navBar-link popup__navBar-link_active'
                  : 'popup__navBar-link'
              }
              onClick={onClickBurger}
            >
              Сохранённые фильмы
            </NavLink>
          </div>
          <Link
            to={'/profile'}
            className='popup__navBar-profile'
            onClick={onClickBurger}
          >
            Аккаунт
            <span className='popup__navBar-profileLogo'></span>
          </Link>
        </div>
      </div>
  );
}

export default NavBarPopup;
