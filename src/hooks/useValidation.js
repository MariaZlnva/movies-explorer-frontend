import { useCallback, useState } from 'react';
const validator = require('validator');


const useValidation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValidForm, setIsValidForm] = useState(false);

  const onChange = (evt) => {
    const { name, value, validationMessage } = evt.target;

    if (name === 'email') {
      if(!validator.isEmail(value)) {
        setErrors({ ...errors, [name]: 'Email несоответствует шаблону электронной почты: name@domain.zone'})
      } else {
        setErrors({ ...errors, [name]: validationMessage })
      }
    } else {
      setErrors({...errors, [name]: validationMessage });
    }
    
    setValues((values) => ({ ...values, [name]: value })); // доб.в объект данные
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
