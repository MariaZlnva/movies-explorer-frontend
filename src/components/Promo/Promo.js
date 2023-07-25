import React from 'react';
import { Link } from "react-scroll";
import './Promo.css';
import promologo from '../../images/promo-logo-min.svg';


function Promo () {
  return(
    <section className='promo'>
      <div className='promo__container'>
        <h1 className='promo__title'>Учебный проект студента факультета Веб&#8209;разработки.</h1>
        <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <Link to='about-project' smooth={true} duration={500} className='promo__link'>Узнать больше</Link>
      </div>
      <img className='promo__img' src={promologo} alt = 'Логотип'/>

    </section>
  )
}

export default Promo;