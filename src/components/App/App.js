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
import filterForRender from '../../utils/filter';
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
  const [isCheckbox, setCheckbox] = useState(false);

  useEffect(() => {
    setServerError('');
  }, [pathname]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      checkToken(token);
    } else {
      setLoading(false);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      getSaveMovies();
    }
  }, [isLoggedIn]);

  function checkToken(token) {
    mainApi
      .getDataUser(token)
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
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
          setServerError('Вы успешно зарегистрировались.');
          setTimeout(() => {
            handleLoginSubmit(data);
          }, 2000);
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
    setIsLoggedIn(false);
    setCurrentUser({});
    localStorage.clear();
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
        setServerError('При обновлении профиля произошла ошибка.');
      })
      .finally(() => {
        setPreloader(false);
      });
  }

  function getSaveMovies() {
    const token = localStorage.getItem('token');
    setPreloader(true);
    mainApi
      .getUserMovies(token)
      .then((moviesSave) => {
        localStorage.setItem('savedMovies', JSON.stringify(moviesSave));
        setSavedMovies(moviesSave);
      })
      .catch((err) => {
        setServerError(err);
      })
      .finally(() => {
        setPreloader(false);
      });
  }

  async function handlerSubmitSeachMovies(query, isCheckbox) {
    localStorage.setItem('searchQuery', query);
    localStorage.setItem('stateCheckbox', isCheckbox);
    const allMovies = JSON.parse(localStorage.getItem('allMovies'));
    if (!allMovies) {
      setPreloader(true);
      movieApi
        .getMoviesAll()
        .then((allMovies) => {
          localStorage.setItem('allMovies', JSON.stringify(allMovies));
          const moviesFoundSeach = filterForRender(
            allMovies,
            query,
            isCheckbox
          );
          localStorage.setItem(
            'moviesFoundSeach',
            JSON.stringify(moviesFoundSeach)
          );
          setMoviesForRender(moviesFoundSeach);
        })
        .catch((err) => {
          setServerError(err);
        })
        .finally(() => setPreloader(false));
    } else {
      const moviesFoundSeach = filterForRender(allMovies, query, isCheckbox);
      localStorage.setItem(
        'moviesFoundSeach',
        JSON.stringify(moviesFoundSeach)
      );
      setMoviesForRender(moviesFoundSeach);
    }
    handleResizeRenderMovies();
  }

  function handlerSubmitSeachSavedMovies(query, isCheckbox) {
    localStorage.setItem('stateCheckboxSavedMovies', isCheckbox);
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    const savedMoviesFoundSeach = filterForRender(
      savedMovies,
      query,
      isCheckbox
    );
    setSavedMovies(savedMoviesFoundSeach);
    localStorage.setItem(
      'savedMoviesFoundSeach',
      JSON.stringify(savedMoviesFoundSeach)
    );
  }

  function handlerCheckboxClick() {
    setCheckbox(!isCheckbox);
    if (pathname === '/movies') {
      const moviesFoundSeach = JSON.parse(
        localStorage.getItem('moviesFoundSeach')
      );
      localStorage.setItem('stateCheckbox', !isCheckbox);
      if (moviesFoundSeach) {
        const moviesFilterCheckbox = !isCheckbox
          ? moviesFoundSeach.filter((item) => item.duration <= 40)
          : moviesFoundSeach;

        setMoviesForRender(moviesFilterCheckbox);
        localStorage.setItem(
          'moviesFilterCheckbox',
          JSON.stringify(moviesFilterCheckbox)
        );
      }
    }
    if (pathname === '/saved-movies') {
      localStorage.setItem('stateCheckboxSavedMovies', !isCheckbox);
      const savedMoviesFoundSeach = JSON.parse(
        localStorage.getItem('savedMoviesFoundSeach')
      );
      if (
        JSON.parse(localStorage.getItem('stateCheckboxSavedMovies')) &&
        savedMoviesFoundSeach
      ) {
        const savedMoviesFilteredCheckbox = !isCheckbox
          ? savedMoviesFoundSeach.filter((item) => item.duration <= 40)
          : savedMoviesFoundSeach;
        setSavedMovies(savedMoviesFilteredCheckbox);
      } else {
        const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
        const savedMoviesFilteredCheckbox = !isCheckbox
          ? savedMovies.filter((item) => item.duration <= 40)
          : savedMovies;
        setSavedMovies(savedMoviesFilteredCheckbox);
      }
    }
  }

  function handleResizeRenderMovies() {
    const moviesFoundSeach = JSON.parse(
      localStorage.getItem('moviesFoundSeach')
    );
    const moviesFilterCheckbox = JSON.parse(
      localStorage.getItem('moviesFilterCheckbox')
    );
    if (
      JSON.parse(localStorage.getItem('stateCheckbox')) &&
      moviesFilterCheckbox
    ) {
      if (moviesFilterCheckbox === null) {
        return;
      }
      if (windowInnerWidth > 760 && windowInnerWidth <= 1280) {
        setMoviesForRender(moviesFilterCheckbox.slice(0, 7));
        setRenderMoreMovies(7);
      } else if (windowInnerWidth <= 760) {
        setMoviesForRender(moviesFilterCheckbox.slice(0, 5));
        setRenderMoreMovies(5);
      }
      return;
    } else if (moviesFoundSeach === null) {
      return;
    }
    if (windowInnerWidth > 760 && windowInnerWidth <= 1280) {
      setMoviesForRender(moviesFoundSeach.slice(0, 7));
      setRenderMoreMovies(7);
    } else if (windowInnerWidth <= 760) {
      setMoviesForRender(moviesFoundSeach.slice(0, 5));
      setRenderMoreMovies(5);
    }
  }

  function changeWidthWindow() {
    setWindowInnerWidth(window.innerWidth);
  }

  useEffect(() => {
    if (isLoggedIn) {
      window.addEventListener('resize', changeWidthWindow);
      handleResizeRenderMovies();
      return () => {
        window.addEventListener('resize', changeWidthWindow);
      };
    }
  }, [windowInnerWidth, pathname, isLoggedIn, isCheckbox]);

  useEffect(() => {
    if (isLoggedIn) {
      handleResizeRenderMovies();
    }
  }, []);

  function handlerClickBtnMore() {
    const moviesFoundSeach = JSON.parse(
      localStorage.getItem('moviesFoundSeach')
    );
    const moviesFilterCheckbox = JSON.parse(
      localStorage.getItem('moviesFilterCheckbox')
    );
    if (JSON.parse(localStorage.getItem('stateCheckbox'))) {
      setMoviesForRender(
        moviesFilterCheckbox.slice(0, moviesForRender.length + renderMoreMovies)
      );
    } else
      setMoviesForRender(
        moviesFoundSeach.slice(0, moviesForRender.length + renderMoreMovies)
      );
  }

  function handlerLikeClick(movie, setSaved) {
    const token = localStorage.getItem('token');
    mainApi
      .addMovieToSave(movie, token)
      .then((movieSave) => {
        movieSave.isSave = true;
        const addToSavedMovies = [...isSavedMovies, movieSave];
        setSavedMovies(addToSavedMovies);
        localStorage.setItem('savedMovies', JSON.stringify(addToSavedMovies));
        setSaved(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handlerDislikeClick(movie, setSaved) {
    const movieToDelete = isSavedMovies.filter((movieSave) =>
      movieSave.movieId === movie.id ? movieSave : ''
    );
    const _id = movie._id || movieToDelete[0]._id;
    const token = localStorage.getItem('token');
    mainApi
      .deleteMovie(_id, token)
      .then((movieDel) => {
        const savedMovies = isSavedMovies.filter(
          (savedMovie) => savedMovie._id !== movieDel.movie._id
        );
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
                isLoggedIn={isLoggedIn}
                onSubmit={handleRegisterSubmit}
                isServerError={isServerError}
              />
            }
          />
          <Route
            path='/signin'
            element={
              <Login
                isLoggedIn={isLoggedIn}
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
                onClickCheckbox={handlerCheckboxClick}
                isCheckbox={isCheckbox}
                setCheckbox={setCheckbox}
              />
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute
                element={SavedMovies}
                // onGetSaveMovies={getSaveMovies}
                isLoggedIn={isLoggedIn}
                isSavedMovies={isSavedMovies}
                onClickBurger={burgerClickHandler}
                onClickDislike={handlerDislikeClick}
                isBurgerOpen={isOpenPopup}
                onSubmit={handlerSubmitSeachSavedMovies}
                onClickCheckbox={handlerCheckboxClick}
                isCheckbox={isCheckbox}
                setCheckbox={setCheckbox}
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
