import { useState, useEffect, useContext } from 'react';

import './Profile.css';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useValidation from '../../hooks/useValidation';
import { REGEX_USER_NAME } from '../../utils/constants';

function Profile({ onClickBurger, isBurgerOpen, onLogout, isLoggedIn, isServerError, onSubmit }) {
  const currentUser = useContext(CurrentUserContext);
  const [isInputDisabled, setInputDisabled] = useState(true);
  const { values, setValues, errors, onChange, isValidForm, setIsValidForm } = useValidation();
 
useEffect(() => {
  console.log('юзЭф данные пользователя', currentUser)
    setValues((values) => ({
      ...values,
      name: currentUser.name,
      email: currentUser.email,
    }));
  }, [currentUser]);

const changeData = (values.name === currentUser.name && values.email === currentUser.email) ? false : true;

  function handlerClickEditBtn() {
    setInputDisabled(false);
  }

  function handleSaveSubmit(evt) {
    evt.preventDefault();
    if (currentUser.name === values.name && currentUser.email === values.email){
      setInputDisabled(true);
      return;
    }
    else {
      onSubmit(values);
      setInputDisabled(true);
    }
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
          <form className='profile__form' name='profile' onSubmit={handleSaveSubmit} noValidate>
            <label className='profile__label'>
              Имя
              <input
                className='profile__input'
                type='text'
                name='name'
                minLength='2'
                maxLength='30'
                pattern={REGEX_USER_NAME}
                required
                disabled={isInputDisabled}
                value={values.name || ''}
                onChange={onChange}
              ></input>
              
            </label>
            <span className={errors.name ? 'profile-input__error profile-input__error_active' : 'profile-input__error'}>{errors.name || ''}</span>
            <label className='profile__label'>
              E-mail
              <input
                className='profile__input'
                type='text'
                name='email'
                required
                disabled={isInputDisabled}
                value={values.email || ''}
                onChange={onChange}
              ></input>
              
            </label>
            <span className={errors.email ? 'profile-input__error profile-input__error_active' : 'profile-input__error'}>{errors.email || ''}</span>
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
              <button className={isValidForm && changeData  ? 'profile__btn-save' : 'profile__btn-save profile__btn-save_disabled'} type='submit' disabled={!isValidForm} >
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
