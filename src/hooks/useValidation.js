import { useCallback, useState } from 'react';
// const emailValidator = require('email-validator');
const validator = require('validator');


const useValidation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValidForm, setIsValidForm] = useState(false);

  const onChange = (evt) => {
    // console.log(evt)
    const target = evt.target;
    const { name, value, validationMessage } = target;

    if (name === 'email' && !validator.isEmail(value)) {
      target.setCustomValidity('Email несоответствует шаблону электронной почты: email@email.com')
    } else target.setCustomValidity('')
          
    setValues((values) => ({ ...values, [name]: value })); // доб.в объект данные
    setErrors((errors) => ({ ...errors, [name]: validationMessage }));
    setIsValidForm(target.closest('form').checkValidity());
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
