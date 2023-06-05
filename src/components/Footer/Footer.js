import React from 'react';
import { Link } from "react-router-dom";

import './Footer.css';

function Footer () {
  const data = new Date();
  const year = data.getFullYear();

  return(
        <footer className='footer'>
          <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
          <div className='footer__container'>
            <p className='footer__copyright'>© {year}</p>
            <ul className='footer__list'>
              <li className='footer__link'>
                <Link to='https://practicum.yandex.ru/' className='footer__item'>Яндекс.Практикум</Link>
              </li>
              <li className='footer__link'>
                <Link to='https://github.com/Yandex-Practicum' className='footer__item'>Github</Link>
              </li>
              
            </ul>
          </div>
        </footer>   
  )
};

export default Footer;

