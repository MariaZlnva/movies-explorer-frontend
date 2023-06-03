import React from "react";
import { Routes, Route } from "react-router-dom";

import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer'


function App() {
  return (
    // <CurrentUserContext.Provider value={currentUser}>
    // {loading ? (<Loader />) : (
      <div className='page'>
        <Header />
        <Main />
        <Routes> 
        {/* <Route path='/'element={Main}/>  */}
              {/* <Route path='/sign-up' element={<Register/> }/>
              <Route path='/sign-in'element={<Login/>}/> */}
              {/* <Route path='/'element={<ProtectedRouteElement element={Main}/>}/> */}
              {/* <Route path='*' element={<PageNotFound />} /> */}
        </Routes>
        <Footer />
     {/* попапы тут */}
    </div>
    // </CurrentUserContext.Provider>
  );
}

export default App;
