import React from "react";
import { Routes, Route } from "react-router-dom";

import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PageNotFound from '../PageNotFound/PageNotFound';

// const path = [
//     "/",
//     "/movies",
//     "/saved-movies",
//   ]
function App() {
  return (
    // <CurrentUserContext.Provider value={currentUser}>
    // {loading ? (<Loader />) : (
      <div className='app__container'>
        <Header />
        <Routes> 
          <Route path='/' element={<Main/>}/> 
              {/* <Route path='/sign-up' element={<Register/> }/>
              <Route path='/sign-in'element={<Login/>}/> */}
              {/* <Route path='/'element={<ProtectedRouteElement element={Main}/>}/> */}
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
     {/* попапы тут */}
    </div>
    // </CurrentUserContext.Provider>
  );
}

export default App;
