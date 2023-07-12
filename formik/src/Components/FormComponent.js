
import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import TextInput from './TextInput';
import Checkbox from './Checkbox';
import Select from './Select';
import Radio from './Radio';
import AutomaticDateField from './AutomaticDateField';
import AgeField from './AgeField';
import './component.css/Button.css'


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

  return errors;
};


const FormComponent = ({ initialValues, isEditing, handleCancelEdit, onSubmit }) => {
  return (
    <div className="form-control">

    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
      enableReinitialize={isEditing}
    >
      <Form>
        <TextInput name='name' label='Nombres' />
        <br />
        <TextInput name='lastname' label='Apellidos' />
        <br />
        <TextInput name='email' label='Correo' />
        <br />
        <AgeField name="age" label="Edad" />
        <br />
        <Select label='Categoria' name='select'>
          <option value=''>Selecciona una Opcion</option>
          <option value='Principiante'>Principiante</option>
          <option value='Intermedio'>Intermedio</option>
          <option value='Avanzado'>Avanzado</option>
        </Select>
        <br />
        <Radio name='radio' value='Front-End' label='Front-End' />
        <Radio name='radio' value='Back-End' label='Back-End' />
        <Radio name='radio' value='FullStack' label='FullStack' />
        <ErrorMessage name='radio' />
        <br />
        <AutomaticDateField name="automaticDate" label="Fecha automática" />
        <br />
        <Checkbox name='acepto'>Aceptar Términos y Condiciones</Checkbox>
        <br />
        <div className={`button-container ${isEditing ? 'mobile' : ''}`}>
        <button className="submit-button" type="submit">
          {isEditing ? 'Guardar' : 'Agregar'}
        </button>
        {isEditing && (
          <button className="cancel-button" type="button" onClick={handleCancelEdit}>
            Cancelar
          </button>
          )}
        </div>

        {/* <button type='submit'>
          {isEditing ? 'Guardar' : 'Agregar'}
        </button>
        {isEditing && (
          <button type='button' onClick={handleCancelEdit}>
            Cancelar
          </button> */}
        {/* )} */}
      </Form>
    </Formik>
    </div>

  );
};

export default FormComponent;

