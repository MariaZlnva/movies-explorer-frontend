import './Profile.css';
import Header from '../Header/Header';
import { useState } from 'react';

function Profile({ onClickBurger, isBurgerOpen, onLogout }) {
  const [isInputDisabled, setInputDisabled] = useState(true);
  const [isValid, setValid] = useState(false);
  
  function handlerClick() {
    setInputDisabled(false)
  }
  return (
    <>
      <Header
        isLoggedIn={true}
        onClickBurger={onClickBurger}
        isBurgerOpen={isBurgerOpen}
      />
      <main className='content'>
        <section className='profile'>
          <h1 className='profile__title'>Привет, Мария!</h1>
          <form className='profile__form' name='profile'>
            <label className='profile__label'>
              Имя
              <input
                className='profile__input'
                type='text'
                name='nameProfile'
                minLength='2'
                maxLength='30'
                required
                disabled={isInputDisabled}
              ></input>
            </label>
            <label className='profile__label'>
              E-mail
              <input
                className='profile__input'
                type='email'
                name='emailProfile'
                required
                disabled={isInputDisabled}
                
              ></input>
            </label>
            <span className="profile__error profile__error_active">При обновлении профиля произошла ошибка.</span>
            {isInputDisabled ? (
              <>
                <button className='profile__btn-edit' type='button' onClick={handlerClick}>
                  Редактировать
                </button>
                <button
                  className='profile__btn-exit'
                  type='button'
                  onClick={onLogout}
                >
                  Выйти из аккаунта
                </button>
              </>
            ) : (
              <button className={isValid ? 'profile__btn-save' : 'profile__btn-save profile__btn-save_disabled'} type='submit' disabled={!isValid}>
                Сохранить
              </button>
            )}
          </form>
        </section>
      </main>
    </>
  );
}

export default Profile;
