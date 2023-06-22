/* eslint-disable no-useless-escape */

const REGEX_USER_NAME = '^[A-Za-zА-Яа-яЁё\/s\/-]+$';
// const REGEX_EMAIL = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const REGEX_EMAIL = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$';

module.exports = {
  REGEX_USER_NAME,
  REGEX_EMAIL,
};