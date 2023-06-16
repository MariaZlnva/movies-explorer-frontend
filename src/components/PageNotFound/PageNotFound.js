import { useNavigate } from 'react-router-dom';

import './PageNotFound.css';

function PageNotFound(){

  const navigate = useNavigate();

    function goBack() {
        navigate(-1);
    }
  return(
    <div className='not-found'>
      <h3 className='not-found__title'>404</h3>
      <p className='not-found__text'>Страница не найдена</p>
      <button className='not-found__btn' onClick={goBack}>Назад</button>
    </div>
  )
}

export default PageNotFound;