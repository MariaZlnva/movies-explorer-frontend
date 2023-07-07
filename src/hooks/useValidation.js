import { useCallback, useState } from 'react';
// const emailValidator = require('email-validator');
const validator = require('validator');


const useValidation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValidForm, setIsValidForm] = useState(false);

  const onChange = (evt) => {
    const { name, value, validationMessage } = evt.target;

    if (name === 'email' && !validator.isEmail(value)) {
      evt.target.setCustomValidity('Email несоответствует шаблону электронной почты: email@email.com')
    } else {evt.target.setCustomValidity('')}
          
    setValues((values) => ({ ...values, [name]: value })); // доб.в объект данные
    setErrors((errors) => ({ ...errors, [name]: validationMessage }));
    setIsValidForm(evt.target.closest('form').checkValidity());
  };

  const resetValidation = useCallback(
    (values = {}, errors = {}, isValidForm = false) => {
      setValues(values);
      setErrors(errors);
      setIsValidForm(isValidForm);
    },
    [setValues, setErrors, setIsValidForm]
  );

  return {
    values,
    setValues,
    errors,
    onChange,
    isValidForm,
    setIsValidForm,
    resetValidation,
  };
};

export default useValidation;
