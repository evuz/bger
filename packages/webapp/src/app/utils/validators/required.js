function requiredValidator(value) {
  if (!value) {
    return { key: 'required', message: 'Value is required' };
  }
  return null;
}

export default requiredValidator;
