import { Navigate } from 'react-router-dom';
import useValidation from '../../hooks/useValidation';

import './Login.css';
import AuthForm from '../AuthForm/AuthForm';
// import { REGEX_EMAIL } from '../../utils/constants';

function Login({ onSubmit, isServerError, isLoggedIn }) {
  const { values, errors, onChange, isValidForm } =
    useValidation();
  function handleLoginSubmit(evt) {
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
      title='Рады видеть!'
      nameForm='login'
      textSubmitBtn='Войти'
      children
      path='/signup'
      text='Ещё не зарегистрированы?'
      textLink='Регистрация'
      onSubmit={handleLoginSubmit}
      isValidForm={isValidForm}
      isServerError={isServerError}
    >
      <label htmlFor='email' className='login'>
        E-mail
        <input
          id='email'
          name='email'
          type='text'
          className={errors.email ? 'login__input login__input_invalid' : 'login__input'}
          value={values.email || ''}
          placeholder='E-mail'
          required
          onChange={handleChange}
        />
        <span
          className={
            errors.email ? 'login__error login__error_active' : 'login__error'
          }
        >
          {errors.email}
        </span>
      </label>
      <label htmlFor='password' className='login'>
        Пароль
        <input
          id='password'
          name='password'
          type='password'
          className={errors.password ? 'login__input login__input_invalid' : 'login__input'}
          value={values.password || ''}
          minLength='8'
          maxLength='20'
          placeholder='Пароль'
          required
          onChange={handleChange}
        />
        <span
          className={
            errors.password
              ? 'login__error login__error_active'
              : 'login__error'
          }
        >
          {errors.password}
        </span>
      </label>
    </AuthForm>
  );
}

export default Login;
