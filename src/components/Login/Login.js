import './Login.css';
import AuthForm from '../AuthForm/AuthForm';
import useValidation from '../../hooks/useValidation';

function Login({ onSubmit }) {
  const { values, errors, onChange } = useValidation();

  function handleLoginSubmit(evt) {
    evt.preventDefault();
    onSubmit(values);
  }

  return (
    <AuthForm
      title='Рады видеть!'
      nameForm = 'login'
      textSubmitBtn='Войти'
      children
      path='/signup'
      text='Ещё не зарегистрированы?'
      textLink='Регистрация'
      onSubmit={handleLoginSubmit}
    >
      <div className='login__fields'>
        <div className='login__field'>
          <label htmlFor='email' className='login__label'>
            E-mail
          </label>
          <input
            id='email'
            name='email'
            type='email'
            className='login__input'
            value={values.name}
            placeholder='E-mail'
            required
            onChange={onChange}
          />
          <span className='login__error_active'>{errors.email}</span>
        </div>
        <div className='login__field'>
          <label htmlFor='password' className='login__label'>
            Пароль
          </label>
          <input
            id='password'
            name='password'
            type='password'
            className='login__input'
            value={values.name}
            minLength='8'
            placeholder='Пароль'
            required
            onChange={onChange}
          />
          <span className='login__error_active'>{errors.password}</span>
        </div>
      </div>
    </AuthForm>
  );
}

export default Login;
