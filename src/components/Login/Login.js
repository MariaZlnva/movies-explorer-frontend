import './Login.css';
import AuthForm from '../AuthForm/AuthForm';

function Login () {
  return(
    <AuthForm title='Рады видеть!' textSubmitBtn='Войти' children path='/signup' text='Ещё не зарегистрированы?' textLink='Регистрация'>
      <div className='login__fields'>
        <div className='login__field'>
          <label for='emailUser' className='login__label'>E-mail</label>
          <input id='emailUser' name='emailUser' type='email' className='login__input' value='' placeholder="E-mail" required />
        </div>
        <div className='login__field'>
          <label for='password' className='login__label'>Пароль</label>
          <input id='password' name='password' type='password' className='login__input' value='' minLength='8' placeholder="Пароль" required />
        </div>
      </div>
      
    </AuthForm>
  )
}

export default Login;