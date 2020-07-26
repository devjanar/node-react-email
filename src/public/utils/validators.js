const checkEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
export const isValid= data => checkEmail.test(data);

export const emailValidation = (data) => {
  if (!isValid(data)) {
    return false;
  }
  return true;
};