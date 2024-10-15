export const validateName = (campo) => {
  //no nulo
  if (!campo || !campo.value.trim()) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }
  //long minima
  if (campo.value.trim().length < 3) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }
  //long maxima
  if (campo.value.trim().length > 25) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }
  //que sean letras
  const regex = /^[a-zA-Z\s]+$/;
  if (!regex.test(campo.value)) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }
  campo.classList.remove("is-invalid");
  campo.classList.add("is-valid");
  return true;
};
//numero
export const validateNumber = (campo) => {
  //no nulo
  if (!campo || !campo.value.trim()) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }
  //long minima
  if (campo.value.trim().length != 8) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }

  //que sean numeros
  const regex = /^\d+$/;
  if (!regex.test(campo.value)) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }
  campo.classList.remove("is-invalid");
  campo.classList.add("is-valid");
  return true;
};
//email
export const validateEmail = (campo, use = true) => {
  //no nulo
  if (!campo || !campo.value.trim()) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }
  //long
  if (campo.value.trim().length < 5 && campo.value.trim().length > 50) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }

  //que sea mail
  const regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(campo.value)) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }
  campo.classList.remove("is-invalid");
  if (use === true) {
    campo.classList.add("is-valid");
  }
  return true;
};
//url
export const validateUrl = (campo) => {
  //no nulo
  if (!campo || !campo.value.trim()) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }
  //long minima
  if (campo.value.trim().length < 3) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }
  //que sea url
  const regex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp|svg))$/;
  if (!regex.test(campo.value)) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }
  campo.classList.remove("is-invalid");
  campo.classList.add("is-valid");
  return true;
};
