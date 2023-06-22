import { useState, useEffect, useContext } from 'react';

import './Profile.css';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useValidation from '../../hooks/useValidation';

function Profile({ onClickBurger, isBurgerOpen, onLogout, isLoggedIn, isServerError, onSubmit }) {
  const currentUser = useContext(CurrentUserContext);
  const [isInputDisabled, setInputDisabled] = useState(true);
  const { values, setValues, errors, onChange, resetValidation, isValidForm, setIsValidForm } = useValidation();

  useEffect(() => {
    setValues((values) => ({
      ...values,
      nameProfile: currentUser.name,
      emailProfile: currentUser.email,
    }));
    // setIsValidForm(true);
  }, [currentUser]);

  function handlerClickEditBtn() {
    setInputDisabled(false)
  }

  function handleSaveSubmit(evt) {
    evt.preventDefault();
    onSubmit(values);
  }

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        onClickBurger={onClickBurger}
        isBurgerOpen={isBurgerOpen}
      />
      <main className='content'>
        <section className='profile'>
          <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
          <form className='profile__form' name='profile' onSubmit={handleSaveSubmit}>
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
                value={values.nameProfile || ''}
                onChange={onChange}
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
                value={values.emailProfile || ''}
                onChange={onChange}
              ></input>
            </label>
            <span className={isServerError ? 'profile__error profile__error_active' : 'profile__error'}>{isServerError}</span>
            {isInputDisabled ? (
              <>
                <button className='profile__btn-edit' type='button' onClick={handlerClickEditBtn}>
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
              <button className={isValidForm ? 'profile__btn-save' : 'profile__btn-save profile__btn-save_disabled'} type='submit' disabled={!isValidForm} >
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
