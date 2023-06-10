import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import './App.css';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import PageNotFound from '../PageNotFound/PageNotFound';
import NavBarPopup from '../NavBarPopup/NavBarPopup';

import listFilms from '../../utils/listFilms';

function App() {

const [isOpenPopup, setIsOpenPopup] = useState(false);
const [isLiked, setIsLiked] = useState(false);

function burgerClickHandler() {
  setIsOpenPopup(!isOpenPopup);
}

function likeClickHandler(movie) {
  setIsLiked(!isLiked);
}

  return (
    // <CurrentUserContext.Provider value={currentUser}>
    // {loading ? (<Loader />) : (
      <div className='app__container'>
        <Routes> 
          <Route path='/' element={<Main/>}/> 
          <Route path='/signup' element={<Register/> }/>
          <Route path='/signin'element={<Login/>}/>
          <Route path='/movies' element={<Movies listFilms={listFilms.slice(0, 7)} onClickBurger = {burgerClickHandler} onClickLike={likeClickHandler} isBurgerOpen={isOpenPopup} isLiked={isLiked}/>} />
          <Route path='/profile' element={<Profile onClickBurger = {burgerClickHandler} isBurgerOpen={isOpenPopup}/> } />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <NavBarPopup isOpen={isOpenPopup} onClickBurger = {burgerClickHandler}
        />
    </div>
    // </CurrentUserContext.Provider>
  );
}

export default App;
