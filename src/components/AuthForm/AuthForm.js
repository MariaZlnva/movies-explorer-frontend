import { Link } from "react-router-dom";

import LogoApp from '../LogoApp/LogoApp';
import './AuthForm.css';


function AuthForm({title, nameForm, textSubmitBtn, children, path, text, textLink, onSubmit}) {
  // name - имя формы и Значение пропса name будет использоваться не только в имени CSS-класса контейнера, но и для атрибута name тега form.
  return(
    <div className='authForm__container'>
      <LogoApp />
      <h2 className='authForm__title'>{title}</h2>
      <form name={nameForm} className='authForm__form' onSubmit={onSubmit}>
        {children}
        <button type="submit" className='authForm__submit'>{textSubmitBtn}</button>
      </form>
      <div className='authForm__wrap'>
        <p className='authForm__text'>{text}</p>
        <Link to={path} className='authForm__link' type="button">{textLink}</Link>
      </div>
    </div>
    

  )
}

export default AuthForm;