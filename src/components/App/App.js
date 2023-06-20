import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.css';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import PageNotFound from '../PageNotFound/PageNotFound';
import NavBarPopup from '../NavBarPopup/NavBarPopup';
import SavedMovies from '../SavedMovies/SavedMovies';
import * as movieApi from '../../utils/MoviesApi';

import listFilms from '../../utils/listFilms';

function App() {
  const navigate = useNavigate();

  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCheckbox, setCheckbox] = useState({});
 

  function burgerClickHandler() {
    setIsOpenPopup(!isOpenPopup);
  }

  function handlerBurgerClose() {
    setIsOpenPopup(false);
  }

  function likeClickHandler(movie) {
    setIsLiked(!isLiked);
  }

  function handleLoginSubmit({ email, password }) {
    const validEmail = 'pochta@yandex.ru';
    const validPassword = '12345678';
    if (email === validEmail && password === validPassword) {
      setIsLoggedIn(true);
      navigate('/movies', { replace: true });
    }
  }

  function handleRegisterSubmit(data) {
    const validEmail = 'pochta@yandex.ru';
    const validPassword = '12345678';
    const validName = 'Мария';
    console.log(data.name, data.email, data.password);
    if (
      data.name === validName &&
      data.email === validEmail &&
      data.password === validPassword
    ) {
      navigate('/signin', { replace: true });
    } else {
      console.log('ошибка сабмита регистрации');
    }
  }

  const handlerLogout = () => {
    navigate('/', { replace: true });
  };

function handlerClickCheckbox (evt){
    console.log(evt)
    setCheckbox(evt);
  }

  const handlerSubmitSeachMovies = (values, isCheckbox) => {
    console.log('пришли отправлять запрос на фильмы')
    movieApi.getMoviesAll()
    .then((data) => {
      localStorage.setItem('foundMovies', JSON.stringify(data))
      localStorage.setItem('textRequiest', values)
      localStorage.setItem('stateCheckbox', isCheckbox)      
    })
  }

  

  useEffect(() => {
    //  меняет стейт перемен. при увелич. ширины экрана
    function handleResize() {
      const windowInnerWidth = window.innerWidth;
      if (windowInnerWidth > 768) {
        setIsOpenPopup(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.addEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='page'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route
          path='/signup'
          element={<Register onSubmit={handleRegisterSubmit} />}
        />
        <Route
          path='/signin'
          element={<Login onSubmit={handleLoginSubmit} />}
        />
        <Route
          path='/movies'
          element={
            <ProtectedRoute
              element={Movies}
              isLoggedIn={true}
              listFilms={listFilms.slice(0, 7)}
              onClickBurger={burgerClickHandler}
              onClickLike={likeClickHandler}
              isBurgerOpen={isOpenPopup}
              isLiked={isLiked}
              onSubmit={handlerSubmitSeachMovies}
              onClickCheckbox={handlerClickCheckbox}
              isCheckbox={isCheckbox}
            />
          }
        />
        <Route
          path='/saved-movies'
          element={
            <ProtectedRoute
              element={SavedMovies}
              isLoggedIn={isLoggedIn}
              listFilms={listFilms.slice(0, 3)}
              onClickBurger={burgerClickHandler}
              onClickLike={likeClickHandler}
              isBurgerOpen={isOpenPopup}
              isLiked={isLiked}
              onClickCheckbox={handlerClickCheckbox}
              isCheckbox={isCheckbox}
            />
          }
        />
        <Route
          path='/profile'
          element={
            <ProtectedRoute
              element={Profile}
              isLoggedIn={isLoggedIn}
              onClickBurger={burgerClickHandler}
              isBurgerOpen={isOpenPopup}
              onLogout={handlerLogout}
            />
          }
        />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <NavBarPopup
        isOpen={isOpenPopup}
        onClickBurger={burgerClickHandler}
        onCloseBurger={handlerBurgerClose}
      />
    </div>
  );
}

export default App;
