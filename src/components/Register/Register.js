import { Navigate } from 'react-router-dom';
import useValidation from '../../hooks/useValidation';

import './Register.css';
import AuthForm from '../AuthForm/AuthForm';
import { REGEX_USER_NAME } from '../../utils/constants';


function Register({ onSubmit, isServerError, isLoggedIn }) {
  const { values, errors, onChange, isValidForm } = useValidation();
  function handleRegisterSubmit(evt) {
    evt.preventDefault();
    onSubmit(values);
  }

  function handleChange(evt) {
    onChange(evt)
  }

  return isLoggedIn ? (
    <Navigate to="/" replace />
  ) : (
    <AuthForm
      title='Добро пожаловать!'
      nameForm='register'
      textSubmitBtn='Зарегистрироваться'
      children
      path='/signin'
      text='Уже зарегистрированы?'
      textLink='Войти'
      onSubmit={handleRegisterSubmit}
      isValidForm={isValidForm}
      isServerError={isServerError}
    >
      <label htmlFor='name' className='register'>
        Имя
        <input
          id='name'
          name='name'
          type='text'
          className={errors.name ? 'register__input register__input_invalid' : 'register__input'}
          minLength='2'
          maxLength='30'
          placeholder='Имя'
          pattern={REGEX_USER_NAME}
          title='Имя должно содержать только латиницу, кириллицу, пробел или дефис'
          required
          value={values.name || ''}
          onChange={handleChange}
        />
        <span className={errors.name ? 'register__error register__error_active' : 'register__error'}>{errors.name} Имя должно содержать только латиницу, кириллицу, пробел или дефис</span>
      </label>
      <label htmlFor='email' className='register'>
        E-mail
        <input
          id='email'
          name='email'
          type='email'
          className={errors.email ? 'register__input register__input_invalid' : 'register__input'}
          placeholder='E-mail'
          required
          value={values.email || ''}
          onChange={handleChange}
        />
        <span className={errors.email ? 'register__error register__error_active' : 'register__error '}>{errors.email}</span>
      </label>
      <label htmlFor='password' className='register'>
        Пароль
        <input
          id='password'
          name='password'
          type='password'
          className={errors.password ? 'register__input register__input_invalid' : 'register__input'}
          minLength='8'
          maxLength='20'
          placeholder='Пароль'
          required
          value={values.password || ''}
          onChange={handleChange}
        />
        <span className={errors.password ? 'register__error register__error_active' : 'register__error '}>{errors.password}</span>
      </label>
    </AuthForm>
  );
}

export default Register;
