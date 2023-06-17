import React from "react";

import './AboutProject.css'

function AboutProject () {
  return (
    <section className='about-project' id='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      <div className='about-project__container'>
        <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
        <p className='about-project__description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
        <p className='about-project__description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className='about-project__period'>
        <p className='about-project__deadline'>1 неделя</p>
        <p className='about-project__deadline'>4 недели</p>
        <p className='about-project__stage'>Back-end</p>
        <p className='about-project__stage'>Front-end</p>
      </div>
    </section>
  )
}

export default AboutProject;