
import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import TextInput from './TextInput';
import Checkbox from './Checkbox';
import Select from './Select';
import Radio from './Radio';
import AutomaticDateField from './AutomaticDateField';
import AgeField from './AgeField';
import './SuccessMessage'

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Requerido';
  } else if (values.name.length < 5) {
    errors.name = 'El nombre es muy corto';
  }
  if (!values.lastname) {
    errors.lastname = 'Requerido';
  } else if (values.lastname.length < 5) {
    errors.lastname = 'El apellido es muy corto';
  }
  if (!values.email) {
    errors.email = 'Requerido';
  } else if (values.email.length < 5) {
    errors.email = 'Ingrese un email valido';
  }
  if (!values.radio) {
    errors.radio = 'Requerido';
  }
  return errors;
};

const FormComponent = ({ initialValues, isEditing, handleCancelEdit, onSubmit }) => {
  return (
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
        <button type='submit'>
          {isEditing ? 'Guardar' : 'Agregar'}
        </button>
        {isEditing && (
          <button type='button' onClick={handleCancelEdit}>
            Cancelar
          </button>
        )}
      </Form>
    </Formik>
  );
};

export default FormComponent;

