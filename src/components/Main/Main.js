import React from "react";

import './Main.css'
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';

function Main () {
  return (
      <main className='content'>
        <Promo />
        <AboutProject />
        <Techs />
        {/* 
        
        <section className='about-me'></section>
        <section className='portfolio'></section> */}
      </main>
    // <>
    //   <Techs />
    //   <AboutMe />
    //   <Portfolio />
    // </>
  )
}

export default Main;