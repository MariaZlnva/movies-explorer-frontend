import { Link } from 'react-router-dom';

import './NavBarPopup.css';

function NavBarPopup ({isOpen, onClickBurger}) {
  return (
  <>
    <div className = {`popup__navBar ${isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__navBar-content'>
        <div className='popup__wrap'>
          <Link to={'/'} className='popup__navBar-link' onClick={onClickBurger}>Главная</Link>
          <Link to={'/movies'} className='popup__navBar-link' onClick={onClickBurger}>Фильмы</Link>
          <Link to={'/saved-movies'} className='popup__navBar-link' onClick={onClickBurger}>Сохранённые фильмы</Link>
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