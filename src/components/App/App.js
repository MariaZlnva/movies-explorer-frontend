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

function App() {
  const navigate = useNavigate();

  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPreloader, setPreloader] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [isServerError, setServerError] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [isSavedMovies, setSavedMovies] = useState([]);
  const { pathname } = useLocation();
  const [renderMoreMovies, setRenderMoreMovies] = useState(0);
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  const [moviesForRender, setMoviesForRender] = useState([]);

  useEffect(() => {
    setServerError('');
  }, [pathname]);

  useEffect(() => {
    console.log('1. юз эв при монтировании')
    const token = localStorage.getItem('token');
    if (token) {
      console.log('2. токен ок - проверим его')
      checkToken(token);
    }
     else {
      setLoading(false);
      navigate('/', { replace: true });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    console.log('useEf => следим за ЛогИН - при тру - получаем сохр.фильмы')
    console.log('useEf =>', isLoggedIn)
    if (isLoggedIn) {
      getSaveMovies();
    }
  }, [isLoggedIn]);

  function checkToken(token) {
    mainApi
      .getDataUser(token)
      .then((user) => {
        setIsLoggedIn(true);
        setCurrentUser(user);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleRegisterSubmit(data) {
    setPreloader(true);
    mainApi
      .register(data)
      .then((user) => {
        if (user) {
          setServerError('Вы успешно зарегестрировались.');
          setTimeout(() => {
          handleLoginSubmit(data);
          }, 2000)
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
    mainApi
      .login(data)
      .then((user) => {
        if (user) {
          localStorage.setItem('token', user.token);
          setIsLoggedIn(true);
          navigate('/movies', { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
        setServerError(err);
      })
      .finally(() => {
        setPreloader(false);
      });
  }

  const handlerLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setCurrentUser({});
    // localStorage.clear();
    navigate('/', { replace: true });
  };

  function handlerUpdateUserSubmit(data) {
    const token = localStorage.getItem('token');
    setPreloader(true);
    mainApi
      .updateDataUser(data, token)
      .then((user) => {
        setCurrentUser(user);
        setServerError('Данные успешно обновлены.');
      })
      .catch((err) => {
        console.log('не обновился =>', err);
        setServerError('При обновлении профиля произошла ошибка.');
      })
      .finally(() => {
        setPreloader(false);
      });
  }

  function getMoviesFromBD() {
    console.log('getMoviesFromBD =>');
    setPreloader(true);
    movieApi
      .getMoviesAll()
      .then((data) => {
        localStorage.setItem('allMovies', JSON.stringify(data));
      })
      .catch((err) => {
        setServerError(err);
      })
      .finally(() => setPreloader(false));
  }

  function getSaveMovies() {
    const token = localStorage.getItem('token');
    mainApi
      .getUserMovies(token)
      .then((moviesSave) => {
        console.log('получили с сервера сохр.ф.=>', moviesSave);
        const isSavedMovies = moviesSave.filter(
          (movieSave) => movieSave.owner._id === currentUser._id
        );
        setSavedMovies(isSavedMovies);
        localStorage.setItem('savedMovies', JSON.stringify(isSavedMovies));
        console.log('отфильтрованные по пользователю сохр.фильмы => ', isSavedMovies);
      })
      .then(res => handleResizeRenderMovies())
      .catch((err) => {
        setServerError(err);
      });
  }

  function handlerSubmitSeachMovies(query, checked) {
    console.log('movies=> handlerSubmitSeachMovies');
    const allMovies = JSON.parse(localStorage.getItem('allMovies'));
    if (!allMovies) {
      getMoviesFromBD();
    }
    localStorage.setItem('searchQuery', query);
    localStorage.setItem('stateCheckbox', checked);
    filterMoviesForRender();
    handleResizeRenderMovies();
  }

  function filterMoviesForRender() {
    console.log('filterMoviesForRender =>');
    const searchQuery = localStorage.getItem('searchQuery');
    const isCheckbox = JSON.parse(localStorage.getItem('stateCheckbox'));
    const allMovies = JSON.parse(localStorage.getItem('allMovies'));
    console.log('searchQuery =>', searchQuery);
    if (searchQuery && allMovies) {
      let moviesFiltered = allMovies.filter((movie) =>
        movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase())
      );
      moviesFiltered = isCheckbox
        ? moviesFiltered.filter((item) => item.duration <= 40)
        : moviesFiltered;
      console.log('movies после чекбокса =>', moviesFiltered);
      console.log('savedMovies =>', isSavedMovies);
      // moviesFiltered.forEach((movie) => {
      //   isSavedMovies.forEach((movieSave) => {
      //     if (
      //       movie.id === movieSave.movieId &&
      //       movieSave.owner._id === currentUser._id
      //     ) {
      //       movie.isSave = true;
      //     }
      //   });
      // });
      console.log('movies для рендера =>', moviesFiltered);
      localStorage.setItem('moviesFiltered', JSON.stringify(moviesFiltered));
      setMoviesForRender(moviesFiltered);
    }
  }

  function handleResizeRenderMovies() {
      const moviesFilteredLS = JSON.parse(localStorage.getItem('moviesFiltered'));

      console.log('moviesFiltered LS handleResizeRenderMovies=> ', moviesFilteredLS);
      if (moviesFilteredLS === null) {
        return;
      }
      if (windowInnerWidth > 760 && windowInnerWidth <= 1280) {
        setMoviesForRender(moviesFilteredLS.slice(0, 7));
        setRenderMoreMovies(7);
      } else if (windowInnerWidth <= 760) {
        setMoviesForRender(moviesFilteredLS.slice(0, 5));
        setRenderMoreMovies(5);
      }
  }

  function changeWidthWindow() {
    setWindowInnerWidth(window.innerWidth);
  }

  useEffect(() => {
    //  меняет стейт перемен. при увелич. ширины экрана
    console.log('юзЭф- при Логин - слушателей виндовс и получаю из ЛС фильтр.фильмы')
      if (isLoggedIn) {
        window.addEventListener('resize', changeWidthWindow);
    handleResizeRenderMovies();
    return () => {
      window.addEventListener('resize', handleResizeRenderMovies);
    };
}
  }, [windowInnerWidth]);

  const handlerClickBtnMore = () => {
    console.log('handlerClickBtnMore')
    const moviesFiltered = JSON.parse(localStorage.getItem('moviesFiltered'));
    setMoviesForRender(
      moviesFiltered.slice(0, moviesForRender.length + renderMoreMovies)
    );
  };

  function handlerLikeClick(movie, setSaved) {
    const token = localStorage.getItem('token');
    console.log('кликнули по сердечку =>', movie);
    mainApi
      .addMovieToSave(movie, token)
      .then((movieSave) => {
        movieSave.isSave = true;
        const addToSavedMovies = [...isSavedMovies, movieSave];
        setSavedMovies(addToSavedMovies);
        localStorage.setItem('savedMovies', JSON.stringify(addToSavedMovies));
        setSaved(true);
        console.log('обработали клик Like=>', movieSave);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handlerDislikeClick(movie, setSaved) {
    console.log('удаляем из сохраненных', movie)
    const movieToDelete = isSavedMovies.filter(movieSave => movieSave.movieId === movie.id ? movieSave : '');
    const _id = movie._id || movieToDelete[0]._id;
    const token = localStorage.getItem('token');
    mainApi
      .deleteMovie(_id, token)
      .then((movieDel) => {
        console.log(movieDel.movie)
        const savedMovies = isSavedMovies.filter((savedMovie) => savedMovie._id !== movieDel.movie._id);
        // setSaved && setSaved(false);
       
        setSavedMovies(savedMovies);
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
        setSaved(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function burgerClickHandler() {
    setIsOpenPopup(!isOpenPopup);
  }

  function handlerBurgerClose() {
    setIsOpenPopup(false);
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

  return isLoading ? (
    <Preloader />
  ) : (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Routes>
          <Route
            path='/'
            element={
              <Main
                isLoggedIn={isLoggedIn}
                onClickBurger={burgerClickHandler}
                isBurgerOpen={isOpenPopup}
              />
            }
          />
          <Route
            path='/signup'
            element={
              <Register
                onSubmit={handleRegisterSubmit}
                isServerError={isServerError}
              />
            }
          />
          <Route
            path='/signin'
            element={
              <Login
                onSubmit={handleLoginSubmit}
                isServerError={isServerError}
              />
            }
          />
          <Route
            path='/movies'
            element={
              <ProtectedRoute
                element={Movies}
                isPreloader={isPreloader}
                isLoggedIn={isLoggedIn}
                onClickBurger={burgerClickHandler}
                onClickLike={handlerLikeClick}
                onClickDislike={handlerDislikeClick}
                isBurgerOpen={isOpenPopup}
                listFilms={moviesForRender}
                isServerError={isServerError}
                isSavedMovies={isSavedMovies}
                onSubmit={handlerSubmitSeachMovies}
                onClickBtnMore={handlerClickBtnMore}
              />
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute
                element={SavedMovies}
                onGetSaveMovies={getSaveMovies}
                isLoggedIn={isLoggedIn}
                isSavedMovies={isSavedMovies}
                onClickBurger={burgerClickHandler}
                onClickDislike={handlerDislikeClick}
                isBurgerOpen={isOpenPopup}
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
                onSubmit={handlerUpdateUserSubmit}
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
