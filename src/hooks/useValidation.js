import { useCallback, useState } from 'react';

const useValidation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValidForm, setIsValidForm] = useState(false);

  const onChange = (evt) => {
    const { name, value, validationMessage, validity } = evt.target;

    // if (name === 'name' && validity.patternMismatch) {
    //   evt.target.setCustomValidity('Имя должно содержать только латиницу, кириллицу, пробел или дефис')
    // }
    // else if (name === 'email' && validity.patternMismatch) {
    //   evt.target.setCustomValidity('Email несоответствует шаблону электронной почты: email@email.com')
    // } 
    // else {
    //   evt.target.setCustomValidity('')
    // }
       
  
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
