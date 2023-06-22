import { useCallback, useState } from 'react';

const useValidation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValidForm, setIsValidForm] = useState(false);

  const onChange = (evt) => {
    const { name, value, validationMessage } = evt.target;
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
