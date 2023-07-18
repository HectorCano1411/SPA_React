
import React  from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { Modal } from 'react-bootstrap';
import TextInput from './TextInput';
import Checkbox from './Checkbox';
import Select from './Select';
import Radio from './Radio';
import AutomaticDateField from './AutomaticDateField';
import AgeField from './AgeField';
import './component.css/Form.css';
import validate from './validate';

const FormComponent = ({ initialValues, isEditing, handleCancelEdit, onSubmit, showModal, setShowModal }) => {
  const toggleModalVisibility = () => {
    setShowModal(!showModal);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Modal show={showModal} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? 'Editar' : 'Agregar'}</Modal.Title>
        </Modal.Header >
        <Modal.Body>
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
            enableReinitialize={isEditing}
          >
            <Form className="form-container">
              <TextInput name="name" label="Nombres" />
              <ErrorMessage name="name" component="div" className="error-message" /> {/* Agregar esta línea */}
              <br />
              <TextInput name="lastname" label="Apellidos" />
              <ErrorMessage name="lastname" component="div" className="error-message" /> {/* Agregar esta línea */}
              <br />
              <TextInput name="email" label="Correo" />
              <ErrorMessage name="email" component="div" className="error-message" /> {/* Agregar esta línea */}
              <br />
              <AgeField name="age" label="Edad" />
              <ErrorMessage name="age" component="div" className="error-message" /> {/* Agregar esta línea */}
              <br />
              <Select label="Categoria" name="select">
                <option value="">Selecciona una Opcion</option>
                <option value="Principiante">Principiante</option>
                <option value="Intermedio">Intermedio</option>
                <option value="Avanzado">Avanzado</option>
              </Select>
              <ErrorMessage name="select" component="div" className="error-message" /> {/* Agregar esta línea */}
              <br />
              <Radio name="radio" value="Front-End" label="Front-End" />
              <Radio name="radio" value="Back-End" label="Back-End" />
              <Radio name="radio" value="FullStack" label="FullStack" />
              <ErrorMessage name="radio" component="div" className="error-message" /> {/* Agregar esta línea */}
              <br />
              <AutomaticDateField name="automaticDate" label="Fecha automática" />
              <ErrorMessage name="automaticDate" component="div" className="error-message" /> {/* Agregar esta línea */}
              <br />
              <Checkbox name="acepto">Aceptar Términos y Condiciones</Checkbox>
              <ErrorMessage name="acepto" component="div" className="error-message" /> {/* Agregar esta línea */}

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
                <button className="hide-button" type="button" onClick={hideModal}>
                  Ocultar
                </button>
              </div>
            </Form>
          </Formik>
        </Modal.Body>
      </Modal>
      {!showModal && (
        <button className="add-button" onClick={toggleModalVisibility}>
        {isEditing ? 'Editar' : 'Agregar'}
      </button>
      )}
    </div>
  );
};

export default FormComponent;
