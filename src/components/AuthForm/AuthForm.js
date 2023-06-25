import { Link } from 'react-router-dom';

import LogoApp from '../LogoApp/LogoApp';
import './AuthForm.css';

function AuthForm({
  title,
  nameForm,
  textSubmitBtn,
  children,
  path,
  text,
  textLink,
  onSubmit,
  isValidForm,
  isServerError
}) {

  return (
    <main className='content'>
      <section className='authForm'>
      <LogoApp />
      <h1 className='authForm__title'>{title}</h1>
      <form name={nameForm} className='authForm__form' onSubmit={onSubmit} noValidate>
        {children}
        <span className={isServerError ? 'authForm__error authForm__error_active' : 'authForm__error'}>{isServerError}</span>
        <button type='submit' className='authForm__submit' disabled={!isValidForm}>
          {textSubmitBtn}
        </button>
      </form>
      <div className='authForm__wrap'>
        <p className='authForm__text'>{text}</p>
        <Link to={path} className='authForm__link'>
          {textLink}
        </Link>
      </div>
    </section>
    </main>
    
  );
}

export default AuthForm;
