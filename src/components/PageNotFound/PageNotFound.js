import { useNavigate } from 'react-router-dom';

import './PageNotFound.css';

function PageNotFound(){

  const navigate = useNavigate();

    function goBack() {
        navigate(-1);
    }

  return(
    <main className='content'>
      <section className='not-found'>
      <h1 className='not-found__title'>404</h1>
      <p className='not-found__text'>Страница не найдена</p>
      <button className='not-found__btn' onClick={goBack} type='button'>Назад</button>
    </section>
    </main>
    
  )
}

export default PageNotFound;