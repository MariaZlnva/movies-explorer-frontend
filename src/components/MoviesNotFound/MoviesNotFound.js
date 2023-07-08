 import './MoviesNotFound.css';

function MoviesNotFound ({text}) {
  return (
    <div className='movies-not-found'>
      <p className='movies-not-found__text'>{text}</p>
    </div>
  )
};

export default MoviesNotFound;