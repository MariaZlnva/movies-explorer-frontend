// import logo from '../../logo.svg';
import React from "react";
import Header from '../Header/Header';
import './App.css';

function App() {
  return (
    // <CurrentUserContext.Provider value={currentUser}>
    // {loading ? (<Loader />) : (
      <div className='page'>
        <Header />
        {/* <Routes>
              <Route path='/sign-up' element={<Register/> }/>
              <Route path='/sign-in'element={<Login/>}/>
              <Route path='/'element={<ProtectedRouteElement element={Main}/>}/>
              <Route path='*' element={<PageNotFound />} />
            </Routes> */}
        <main className='content'>
          <section className='promo'></section>
          <section className='about-project'></section>
          <section className='techs'></section>
          <section className='about-me'></section>
          <section className='portfolio'></section>
        </main>
      <footer className='footer'></footer>
     {/* попапы тут */}
    </div>
    // </CurrentUserContext.Provider>
  );
}

export default App;
