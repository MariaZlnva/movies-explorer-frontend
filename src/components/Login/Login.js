import { useNavigate } from 'react-router-dom';
import useValidation from '../../hooks/useValidation';

import './Login.css';
import AuthForm from '../AuthForm/AuthForm';
// import { REGEX_EMAIL } from '../../utils/constants';

function Login({ onSubmit, isServerError, isLoggedIn }) {
  console.log('isLoggedIn =>', isLoggedIn)
  const { values, errors, onChange, resetValidation, isValidForm } =
    useValidation();
  const navigate = useNavigate();
  function handleLoginSubmit(evt) {
    evt.preventDefault();
    onSubmit(values);
  }

  return isLoggedIn ? (
    navigate('/', { replace: true })
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
          // pattern={REGEX_EMAIL}
          className='login__input'
          value={values.email || ''}
          placeholder='E-mail'
          required
          onChange={onChange}
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
          className='login__input'
          value={values.password || ''}
          minLength='8'
          maxLength='20'
          placeholder='Пароль'
          required
          onChange={onChange}
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
