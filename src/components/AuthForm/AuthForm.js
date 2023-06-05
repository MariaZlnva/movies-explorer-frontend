import { Link } from "react-router-dom";

import LogoApp from '../LogoApp/LogoApp';
import './AuthForm.css';

function AuthForm({title, textSubmitBtn, children, path, text, textLink, name}) {
  // name - имя формы и Значение пропса name будет использоваться не только в имени CSS-класса контейнера, но и для атрибута name тега form.
  return(
    <div className='authForm__container'>
      <LogoApp />
      <h2 className='authForm__title'>{title}</h2>
      <form name='' className='authForm__form'>
        {children}
        <button type="button" className='authForm__submit hover'>{textSubmitBtn}</button>
      </form>
      <div className='authForm__wrap'>
        <p className='authForm__text'>{text}</p>
        <Link to={path} className='authForm__link hover' type="button">{textLink}</Link>
      </div>
    </div>
    

  )
}

export default AuthForm;