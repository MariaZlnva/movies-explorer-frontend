import React from "react";

import './Main.css'
import Promo from '../Promo/Promo';

function Main () {
  return (
      <main className='content'>
        <Promo />
        {/* 
        <section className='about-project' id='about-project'></section>
        <section className='techs'></section>
        <section className='about-me'></section>
        <section className='portfolio'></section> */}
      </main>
    // <>
    //   <Promo />
    //   <NavTab />
    //   <AboutProject />
    //   <Techs />
    //   <AboutMe />
    //   <Portfolio />
    // </>
  )
}

export default Main;