import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

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
import Preloader from '../Preloader/Preloader';
import * as movieApi from '../../utils/MoviesApi';
import * as mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import listFilms from '../../utils/listFilms';

function App() {
  const navigate = useNavigate();

  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCheckbox, setCheckbox] = useState({});
  const [isPreloader, setPreloader] = useState(false);
  const [isServerError, setServerError] = useState('');
  const [currentUser, setCurrentUser] = useState({});

  function burgerClickHandler() {
    setIsOpenPopup(!isOpenPopup);
  }

  function handlerBurgerClose() {
    setIsOpenPopup(false);
  }

  function likeClickHandler(movie) {
    setIsLiked(!isLiked);
  }

  const {pathname} = useLocation();

  useEffect(()=>{
    setServerError('')
  }, [pathname])

  useEffect(() => {
    checkToken();
    }, [isLoggedIn])

  function checkToken() {
    const token = localStorage.getItem('token');
      if (token) {
        setPreloader(true);
        mainApi.getDataUser(token)
        .then((user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
          // setServerError('');
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setPreloader(false);
        })
      }
  }
  function handleRegisterSubmit(data) {
    setPreloader(true);
    mainApi
      .register(data)
      .then((user) => {
        if (user) {
          handleLoginSubmit(data);
        }
      })
      .catch((err) => {
        setServerError(err);
      })
      .finally(() => {
        setPreloader(false);
      });
  }

  function handleLoginSubmit(data) {
    setPreloader(true);
    if (!data.email || !data.password) {
      return;
    }
    mainApi.login(data)
    .then((user) => {
      if (user) {
        localStorage.setItem("token", user.token);
        setIsLoggedIn(true);
        navigate('/movies', { replace: true });
      }  
    })
    .catch((err) => {
      console.log(err)
      setServerError(err);
    })
    .finally(() => {
      setPreloader(false);
    });
  }

  const handlerLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setCurrentUser({});
    navigate('/', { replace: true });
  };

  function handlerUpdateUserDataSubmit (data) {
    const token = localStorage.getItem('token');
    setPreloader(true);
    mainApi.updateDataUser(data, token)
    .then((user) => {
      setCurrentUser(user);
      setServerError('Данные успешно обновлены.');
    })
    .catch((err) => {
      console.log('не обновился =>', err)
      setServerError('При обновлении профиля произошла ошибка.')
    })
    .finally(() => {
      setPreloader(false);
    })
  }

  function handlerClickCheckbox(evt) {
    setCheckbox(evt);
  }

  const handlerSubmitSeachMovies = (values, isCheckbox) => {
    setPreloader(true);
    console.log('пришли отправлять запрос на фильмы');
    movieApi
      .getMoviesAll()
      .then((data) => {
        localStorage.setItem('foundMovies', JSON.stringify(data));
        localStorage.setItem('textRequiest', values);
        localStorage.setItem('stateCheckbox', isCheckbox);
      })
      .then(() => {})
      .catch((err) => {console.log('errrrrrooor', err)})
      .finally(() => setPreloader(false));
  };

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

  return isPreloader ? (
    <Preloader />
  ) : (
    <CurrentUserContext.Provider value={currentUser}>
    <div className='page'>
      <Routes>
        <Route path='/' element={<Main isLoggedIn={isLoggedIn} onClickBurger={burgerClickHandler} isBurgerOpen={isOpenPopup}/>} />
        <Route
          path='/signup'
          element={<Register onSubmit={handleRegisterSubmit} isServerError={isServerError}/>}
        />
        <Route
          path='/signin'
          element={<Login onSubmit={handleLoginSubmit} isServerError={isServerError} setServerError={setServerError}/>}
        />
        <Route
          path='/movies'
          element={
            <ProtectedRoute
              element={Movies}
              isPreloader={isPreloader}
              isLoggedIn={isLoggedIn}
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
              onSubmit={handlerSubmitSeachMovies}
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
              isServerError={isServerError}
              setServerError={setServerError}
              onSubmit={handlerUpdateUserDataSubmit}
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
    </CurrentUserContext.Provider>
  );
}

export default App;
