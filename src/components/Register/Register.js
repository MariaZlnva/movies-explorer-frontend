import { useState } from 'react';
import './Register.css';
import AuthForm from '../AuthForm/AuthForm';
import useValidation from '../../hooks/useValidation';

function Register( {onSubmit }) {
  const { values, errors, onChange, isValidForm } = useValidation();
  function handleRegisterSubmit(evt) {
    evt.preventDefault();
    onSubmit(values);
  }

  return (
    <AuthForm
      title='Добро пожаловать!'
      nameForm = 'register'
      textSubmitBtn='Зарегистрироваться'
      children
      path='/signin'
      text='Уже зарегистрированы?'
      textLink='Войти'
      onSubmit={handleRegisterSubmit}
      isValidForm = {isValidForm}
    >
      <div className='register__feilds'>
        <div className='register__field'>
          <label htmlFor='name' className='register__label'>
            Имя
          </label>
          <input
            id='name'
            name='name'
            type='text'
            form='register'
            className={`register__input ${errors.name ? 'register__input_type_error' : ''}`}
            value={values.name || ''}
            minLength='2'
            maxLength='30'
            placeholder='Имя'
            required
            onChange={onChange}
          />
          <span className='register__error_active'>{errors.name}</span>
        </div>
        <div className='register__field'>
          <label htmlFor='email' className='register__label'>
            E-mail
          </label>
          <input
            form='register'
            id='email'
            name='email'
            type='email'
            className={`register__input ${errors.email ? 'register__input_type_error' : ''}`}
            value={values.email || ''}
            placeholder='E-mail'
            required
            onChange={onChange}
          />
          <span className='register__error_active'>{errors.email}</span>
        </div>
        <div className='register__field'>
          <label htmlFor='password' className='register__label'>
            Пароль
          </label>
          <input
            form='register'
            id='password'
            name='password'
            type='password'
            className={`register__input ${errors.password ? 'register__input_type_error' : ''}`}
            value={values.password || ''}
            minLength='8'
            placeholder='Пароль'
            required
            onChange={onChange}
          />
          <span className='register__error_active'>{errors.password}</span>
        </div>
      </div>
    </AuthForm>
  );
}

export default Register;
