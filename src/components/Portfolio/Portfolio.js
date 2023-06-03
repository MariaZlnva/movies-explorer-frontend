import React from 'react';

import { Link } from 'react-router-dom';

import './Portfolio.css';
import arrow from '../../images/arrow.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h1 className='portfolio__title'>Портфолио</h1>
      <ul className='portfolio__list'>
        <li className='portfolio__wrap'>
          <p className='portfolio__item'>Статичный сайт</p>
          <Link
            to='https://mariazlnva.github.io/how-to-learn'
            className='portfolio__link hover'
            target='_blank'
          >
            {/* <img src={arrow} className='hover' alt='Стрелка' /> */}
          </Link>
        </li>
        <li className='portfolio__wrap'>
          <p className='portfolio__item'>Адаптивный сайт</p>
          <Link
            to='https://mariazlnva.github.io/russian-travel'
            className='portfolio__link hover'
            target='_blank'
          >
            {/* <img src={arrow} className='hover' alt='Стрелка' /> */}
          </Link>
        </li>
        <li className='portfolio__wrap'>
          <p className='portfolio__item'>Одностраничное приложение</p>
          <Link
            to='https://mesto.zlnva.nomoredomains.monster'
            className='portfolio__link hover'
            target='_blank'
          >
            {/* <img src={arrow} className='hover' alt='Стрелка' /> */}
          </Link>
        </li>
      </ul>
    </section>
  );
}
export default Portfolio;
