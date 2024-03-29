import React from 'react';

import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__wrap'>
          <a
            className='portfolio__link'
            href='https://mariazlnva.github.io/how-to-learn'
            target='_blank'
            rel='noreferrer'
          >
            Статичный сайт
            <span className='portfolio__item'></span>
          </a>
          
        </li>
        <li className='portfolio__wrap'>
          <a
            href='https://mariazlnva.github.io/russian-travel'
            className='portfolio__link'
            target='_blank'
            rel='noreferrer'
          >
            Адаптивный сайт
            <span className='portfolio__item'></span>
          </a>
          
        </li>
        <li className='portfolio__wrap'>
          <a
            href='https://mesto.zlnva.nomoredomains.monster'
            className='portfolio__link'
            target='_blank'
            rel='noreferrer'
          >
            Одностраничное приложение
            <span className='portfolio__item'></span>
          </a>
        </li>
      </ul>
    </section>
  );
}
export default Portfolio;
