import './Register.css';
import AuthForm from '../AuthForm/AuthForm';

function Register({ onSubmit }) {

  function handleRegisterSubmit(evt) {
    evt.preventDefault();
    onSubmit({email: 'pochta@yandex.ru', password: '12345678', name: 'Мария'});
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
          required
        />
        <span className='register__error register__error_active'></span>
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
        />
        <span className='register__error register__error_active'></span>
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
        />
        <span className='register__error register__error_active register__error_active_last'>Что-то пошло не так...</span>
      </label>
    </AuthForm>
  );
}

export default Register;
