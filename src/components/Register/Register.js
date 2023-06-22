import useValidation from '../../hooks/useValidation';

import './Register.css';
import AuthForm from '../AuthForm/AuthForm';
import {REGEX_USER_NAME} from '../../utils/constants';

function Register({ onSubmit, isServerError, onClickLink }) {
  const { values, errors, onChange, resetValidation, isValidForm } = useValidation();

  function handleRegisterSubmit(evt) {
    evt.preventDefault();
    onSubmit(values);
  }

  return (
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
      onClickLink={onClickLink}
    >
      <label htmlFor='name' className='register'>
        Имя
        <input
          id='name'
          name='name'
          type='text'
          className='register__input'
          minLength='2'
          maxLength='30'
          placeholder='Имя'
          pattern={REGEX_USER_NAME}
          required
          value={values.name || ''}
          onChange={onChange}
        />
        <span className={errors.name ? 'register__error register__error_active' : 'register__error'}>{errors.name}</span>
      </label>
      <label htmlFor='email' className='register'>
        E-mail
        <input
          id='email'
          name='email'
          type='email'
          className='register__input'
          placeholder='E-mail'
          required
          value={values.email || ''}
          onChange={onChange}
        />
        <span className={errors.email ? 'register__error register__error_active' : 'register__error '}>{errors.email}</span>
      </label>
      <label htmlFor='password' className='register'>
        Пароль
        <input
          id='password'
          name='password'
          type='password'
          className='register__input'
          minLength='8'
          maxLength='20'
          placeholder='Пароль'
          required
          value={values.password || ''}
          onChange={onChange}
        />
        <span className={errors.password ? 'register__error register__error_active' : 'register__error '}>{errors.password}</span>
      </label>
    </AuthForm>
  );
}

export default Register;
