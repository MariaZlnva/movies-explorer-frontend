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

function App() {

const [isOpenPopup, setIsOpenPopup] = useState(false);

function handleClickBurger() {
  setIsOpenPopup(!isOpenPopup);
}

  return (
    // <CurrentUserContext.Provider value={currentUser}>
    // {loading ? (<Loader />) : (
      <div className='app__container'>
        <Routes> 
          <Route path='/' element={<Main/>}/> 
          <Route path='/signup' element={<Register/> }/>
          <Route path='/signin'element={<Login/>}/>
              {/* <Route path='/'element={<ProtectedRouteElement element={Movies}/>}/> */}
          <Route path='/movies' element={<Movies onClickBurger = {handleClickBurger} isBurgerOpen={isOpenPopup}/>} />
          <Route path='/profile' element={<Profile onClickBurger = {handleClickBurger} isBurgerOpen={isOpenPopup}/> } />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <NavBarPopup isOpen={isOpenPopup} onClickBurger = {handleClickBurger}
          // isOpen={isEditProfilePopupOpen}
          // onClose={closeAllPopups}
          // onUpdateUser={handleUpdateUser}
        />
    </div>
    // </CurrentUserContext.Provider>
  );
}

export default App;
