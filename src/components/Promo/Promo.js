import React from 'react';

import './Promo.css';
import NavTab from '../NavTab/NavTab';
import promologo from '../../images/promo-logo.svg';

function Promo () {
  return(
    <section className='promo'>
      <div className='promo__container'>
        <h1 className='promo__title'>Учебный проект студентки факультета Веб-разработки.</h1>
        <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <NavTab />
      </div>
      <img className='promo__img' src={promologo} alt = ''/>

    </section>
  )
}

export default Promo;