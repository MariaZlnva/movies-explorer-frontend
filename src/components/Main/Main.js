import React from "react";

import './Main.css'
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';

function Main () {
  return (
      <main className='content'>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        {/* 
        
        <section className='about-me'></section>
        <section className='portfolio'></section> */}
      </main>
    // <>
    //   
    //   <Portfolio />
    // </>
  )
}

export default Main;