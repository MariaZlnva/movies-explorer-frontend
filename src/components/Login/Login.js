import { useState } from 'react';
import './Login.css';
import AuthForm from '../AuthForm/AuthForm';

function Login({ onSubmit }) {

  const [values, setValues] = useState({});

  function handleLoginSubmit(evt) {
    evt.preventDefault();
    onSubmit(values);
  }

  function onChange (evt) {
    const { name, value } = evt.target;
    setValues((values) => ({ ...values, [name]: value }));
  }

  return (
    <AuthForm
      title='Рады видеть!'
      nameForm='login'
      textSubmitBtn='Войти'
      children
      path='/signup'
      text='Ещё не зарегистрированы?'
      textLink='Регистрация'
      onSubmit={handleLoginSubmit}
    >
      <label htmlFor='email' className='login__label'>
        E-mail
        <input
          id='email'
          name='email'
          type='email'
          className='login__input'
          value={values.email || ''}
          placeholder='E-mail'
          required
          onChange={onChange}
        />
        <span className='login__error_active'></span>
      </label>
      <label htmlFor='password' className='login__label'>
        Пароль
        <input
          id='password'
          name='password'
          type='password'
          className='login__input'
          value={values.password || ''}
          minLength='8'
          maxLength='20'
          placeholder='Пароль'
          required
          onChange={onChange}
        />
        <span className='login__error_active'></span>
      </label>
    </AuthForm>
  );
}

export default Login;
