import React from "react";
import { Routes, Route } from "react-router-dom";

import './App.css';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  return (
    // <CurrentUserContext.Provider value={currentUser}>
    // {loading ? (<Loader />) : (
      <div className='app__container'>
        <Routes> 
          <Route path='/' element={<Main/>}/> 
          <Route path='/signup' element={<Register/> }/>
          <Route path='/signin'element={<Login/>}/>
              {/* <Route path='/'element={<ProtectedRouteElement element={Movies}/>}/> */}
          <Route path='/movies' element={<Movies/>} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
     {/* попапы тут */}
    </div>
    // </CurrentUserContext.Provider>
  );
}

export default App;
