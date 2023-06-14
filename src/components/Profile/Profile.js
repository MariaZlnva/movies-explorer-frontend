import './Profile.css';
import Header from '../Header/Header';

function Profile({ onClickBurger, isBurgerOpen }) {
  return (
    <>
      <Header
        isLoggedIn={true}
        onClickBurger={onClickBurger}
        isBurgerOpen={isBurgerOpen}
      />
      <div className='profile'>
        <h3 className='profile__title'>Привет, Мария!</h3>
        <form className='profile__form'>
          <label className='profile__label'>
            Имя
            <input
              className='profile__input'
              type='text'
              name='nameProfile'
              required
            ></input>
          </label>
          <label className='profile__label'>
            E-mail
            <input
              className='profile__input'
              type='email'
              name='emailProfile'
              required
            ></input>
          </label>
          <button className='profile__btn-edit' type='submit'>
            Редактировать
          </button>
        </form>
        <button className='profile__btn-exit' type='button'>
          Выйти из аккаунта
        </button>
      </div>
    </>
  );
}

export default Profile;
