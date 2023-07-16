// eslint-disable-next-line no-unused-vars
import React from 'react';

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Campo requerido';
  }

  if (!values.lastname) {
    errors.lastname = 'Campo requerido';
  }

  if (!values.email) {
    errors.email = 'Campo requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Correo electrónico inválido';
  }

  if (!values.age) {
    errors.age = 'Campo requerido';
  } else if (values.age < 18) {
    errors.age = 'Debes ser mayor de 18 años';
  }

  if (!values.select) {
    errors.select = 'Selecciona una opción';
  }

  if (!values.radio) {
    errors.radio = 'Selecciona una opción';
  }

  if (!values.automaticDate) {
    errors.automaticDate = 'Campo requerido';
  }

  if (!values.acepto) {
    errors.acepto = 'Debes aceptar los términos y condiciones';
  }

  return Object.keys(errors).length > 0 ? errors : null;
};

export default validate;
