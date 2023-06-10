import { Link, NavLink, useLocation } from 'react-router-dom';

import './NavBarPopup.css';

function NavBarPopup ({isOpen, onClickBurger}) {
  const location = useLocation();
  return (
  <>
    <div className = {`popup__navBar ${isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__navBar-content'>
        <div className='popup__wrap'>
          <NavLink to={'/'} className={location.pathname === '/' ? 'popup__navBar-link popup__navBar-link_active' : 'popup__navBar-link'} onClick={onClickBurger}>Главная</NavLink>
          <NavLink to={'/movies'} className={location.pathname === '/movies' ? 'popup__navBar-link popup__navBar-link_active' : 'popup__navBar-link'} onClick={onClickBurger}>Фильмы</NavLink>
          <NavLink to={'/saved-movies'} className={location.pathname === '/saved-movies' ? 'popup__navBar-link popup__navBar-link_active' : 'popup__navBar-link'} onClick={onClickBurger}>Сохранённые фильмы</NavLink>
        </div>
        <Link to={'/profile'} className='popup__navBar-profile' onClick={onClickBurger}>
          Аккаунт
          <span className='popup__navBar-profileLogo'></span>
        </Link>
        </div>
      </div>
      
    {/* <button className="navBar__burger" onClick={handleClickBurger}></button> */}
  </>
    )
}

export default NavBarPopup;