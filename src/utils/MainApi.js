// export const BASE_URL = 'https://api.movies.zlnva.nomoredomains.rocks';
export const BASE_URL = 'http://localhost:3000';

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

export const login = ({email, password}) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, email }),
  }).then((res) => checkResponse(res));
};