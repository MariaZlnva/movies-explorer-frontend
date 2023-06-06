import React from 'react';
import { Link } from "react-router-dom";

import './AboutMe.css';
import avatar from '../../images/foto__avatar.jpg'

function AboutMe () {
  return(
    <section className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__container'>
        <img className='about-me__foto' src={avatar} alt='Фотография Марии'/>
        <div className='about-me__wrap'>
          <h3 className='about-me__name'>Мария</h3>
          <h4 className='about-me__subtitle'>Фронтенд-разработчик, 38 лет</h4>
          <p className='about-me__desctiption'>Я родилась и живу в Москве, по образованию инженер промышленного и гражданского строительства. У меня есть муж и двое детей. Я люблю кататься на велосипеде, люблю море, люблю лето. С миром IT познакомилась совсем недавно. Прошла несколько ознакомительных курсов по веб-разработке - заинтересовало, понравилось, после чего приняла решение идти учится и не пожалела об этом.</p>
          <Link to='https://github.com/MariaZlnva' className='about-me__icon'>Github</Link>
        </div>
      </div>
      
    </section>
  )
};

export default AboutMe;