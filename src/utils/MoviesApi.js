// 'https://api.nomoreparties.co/beatfilm-movies'
export const BASE_URL_MOVIES = 'https://api.nomoreparties.co/beatfilm-movies';

export const getMoviesAll = () => {
  return fetch(BASE_URL_MOVIES, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${token}`,
    },
  }).then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.statusText}`));
};
