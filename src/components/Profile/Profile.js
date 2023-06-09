import './Profile.css';
import Header from '../Header/Header';
function Profile ({ onClickBurger, isBurgerOpen }) {
  return(
    <>
    <Header isLoggedIn={true} onClickBurger={onClickBurger} isBurgerOpen={isBurgerOpen}/>
    <div className='profile'>
      <h3 className='profile__title'>Привет, --name--!</h3>
      <form className='profile__form'>
        <fieldset className='profile__fieldsets'>
          <label className='profile__label'>
            Имя
            <input className='profile__input' type='text' name='nameProfile' value='--name--' required ></input>
          </label>
          <label className='profile__label'>
            E-mail
          <input className='profile__input' type='email' name='emailProfile' value='pochta@yandex.ru' required ></input>
          </label>
        </fieldset>
        <button className='profile__btn-edit' type='submit'>Редактировать</button>
        <button className='profile__btn-exit' type='button'>Выйти из аккаунта</button>
      </form>
    </div>
    </>
    
  )
}

export default Profile;