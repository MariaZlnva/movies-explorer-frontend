export const BASE_URL = 'https://api.movies.zlnva.nomoredomains.rocks';
// export const BASE_URL = 'http://localhost:3000';

const checkResponse = (res) =>
  res.ok
    ? res.json()
    : res.json().then((err) => Promise.reject(`${err.message}`));

export const register = ({ name, email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, password, email }),
  }).then((res) => checkResponse(res));
};

export const login = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, email }),
  }).then((res) => checkResponse(res));
};

export const getDataUser = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
};

export const updateDataUser = (data, token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      email: data.email,
      name: data.name,
    }),
  }).then((res) => checkResponse(res));
};

export const getUserMovies = (token) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
}

export const addMovieToSave = (movie, token) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: String(movie.duration),
      year: movie.year,
      description: movie.description,
      image: (`https://api.nomoreparties.co/${movie.image.url}`),
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: (`https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`),
      movieId: movie.id
    }),
  }).then((res) => checkResponse(res));
};


export const deleteMovie = (movieId, token) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
};

