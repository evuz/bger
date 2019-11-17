import { useState, useCallback, useEffect } from 'react';

function useInput(initialValue = '', validators = []) {
  const [value, setValue] = useState(initialValue);
  const [validation, setValidation] = useState({ isValid: true, errors: {} });

  useEffect(() => {
    const validatorError = validators.reduce((acc, validator) => {
      const error = validator(value);
      if (error) {
        acc[error.key] = error.message;
      }
      return acc;
    }, {});
    const errorChange = JSON.stringify(validatorError) !== JSON.stringify(validation.errors);

    if (errorChange) {
      const areError = !!Object.keys(validatorError).length;
      setValidation({ isValid: !areError, errors: validatorError });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, validators]);

  const onChange = useCallback(function(event) {
    setValue(event.target.value);
  }, []);

  return { value, onChange, validation };
}

export default useInput;
