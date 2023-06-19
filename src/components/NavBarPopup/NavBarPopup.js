import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import './NavBarPopup.css';

function NavBarPopup({ isOpen, onClickBurger, onCloseBurger }) {
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
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <nav className='popup__content'>
        <button type='button' className='popup__btn-close'onClick={onCloseBurger}/>
        <ul className='popup__wrap'>
          <li className='popup__item'>
            <NavLink
              to={'/'}
              className={
                location.pathname === '/'
                  ? 'popup__link popup__link_active'
                  : 'popup__link'
              }
              onClick={onClickBurger}
            >
              Главная
            </NavLink>
          </li>
          <li className='popup__item'>
            <NavLink
              to={'/movies'}
              className={
                location.pathname === '/movies'
                  ? 'popup__link popup__link_active'
                  : 'popup__link'
              }
              onClick={onClickBurger}
            >
              Фильмы
            </NavLink>
          </li>
          <li className='popup__item'>
            <NavLink
              to={'/saved-movies'}
              className={
                location.pathname === '/saved-movies'
                  ? 'popup__link popup__link_active'
                  : 'popup__link'
              }
              onClick={onClickBurger}
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <Link
          to={'/profile'}
          className='popup__profile'
          onClick={onClickBurger}
        >
          Аккаунт
          <span className='popup__profile-Logo'></span>
        </Link>
      </nav>
    </div>
  );
}

export default NavBarPopup;
