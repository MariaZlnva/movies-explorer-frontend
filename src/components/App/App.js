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
  const [isLiked, setIsLiked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPreloader, setPreloader] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [isServerError, setServerError] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  // const [moviesForRender, setMoviesForRender] = useState([]);
  const [isSavedMovies, setSavedMovies] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    setServerError('');
  }, [pathname]);

  useEffect(() => {
    checkToken();
  }, [isLoggedIn]);

  function checkToken() {
    const token = localStorage.getItem('token');
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

  const handlerGetMovies = () => {
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
  };

  function handlerFilterAndSeach(query, checked, filterMovies) {
    console.log(query, checked)
    const allMovies = JSON.parse(localStorage.getItem('allMovies'));
    if (!allMovies) {
      handlerGetMovies();
    }
    localStorage.setItem('searchQuery', query);
    localStorage.setItem('stateCheckbox', checked);
    filterMovies();
  }

// function filterMovies() {
//   const searchQuery = localStorage.getItem('searchQuery');
//   const isCheckbox = JSON.parse(localStorage.getItem('stateCheckbox'));
//   const allMovies = JSON.parse(localStorage.getItem('allMovies'));
//   if (searchQuery && allMovies) {
//     let movies = allMovies.filter((movie) =>
//       movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     //еще одна сортировка будет тут
//     movies = isCheckbox ? movies.filter((item) => item.duration <= 40) : movies;
    
//     localStorage.setItem('movies', JSON.stringify(movies));
//   }
// }

  function getSaveMovies() {
    const token = localStorage.getItem('token');
    mainApi
      .getUserMovies(token)
      .then((moviesSave) => {
        localStorage.setItem('savedMovies', JSON.stringify(moviesSave));
      })
      .then(() => {
        const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
        setSavedMovies(savedMovies);
      })
      .catch((err) => {
        setServerError(err);
      });
  }

  function handlerLikeClick(movie) {
    const token = localStorage.getItem('token');
    (movie.owner && movie.owner._id === currentUser._id
      ? mainApi.deleteMovie(movie._id, token)
      : mainApi.addMovieToSave(movie, token)
    )
      .then((movie) => {
        console.log(movie);
        setIsLiked(!isLiked);
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
                isBurgerOpen={isOpenPopup}
                isLiked={isLiked}
                isServerError={isServerError}
                isSavedMovies={isSavedMovies}
                setIsLiked={setIsLiked}
                onFilterMovies={handlerFilterAndSeach}
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
                listFilms={isSavedMovies}
                onClickBurger={burgerClickHandler}
                onClickLike={handlerLikeClick}
                isBurgerOpen={isOpenPopup}
                isLiked={isLiked}
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
