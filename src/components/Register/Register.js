// import { Link } from "react-router-dom";

import './Register.css';
import AuthForm from '../AuthForm/AuthForm';

function Register() {
  return(
    <AuthForm title='Добро пожаловать!' textSubmitBtn='Зарегистрироваться' children path='/signin' text='Уже зарегистрированы?' textLink='Войти'>
      <div className='register__feilds'>
        <div className='register__field'>
          <label htmlFor='nameUser' className='register__label'>Имя</label>
          <input id='nameUser' name='nameUser' type='text' className='register__input' value='' minLength="2" maxLength="30" placeholder="Имя" required />
        </div>
        <div className='register__field'>
          <label htmlFor='emailUser' className='register__label'>E-mail</label>
          <input id='emailUser' name='emailUser' type='email' className='register__input' value='' placeholder="E-mail" required />
        </div>
        <div className='register__field'>
          <label htmlFor='password' className='register__label'>Пароль</label>
          <input id='password' name='password' type='password' className='register__input' value='' minLength='8' placeholder="Пароль" required />
        </div>
      </div>
      
    </AuthForm>
  )
}

export default Register;