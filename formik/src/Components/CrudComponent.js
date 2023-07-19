// Importar las dependencias necesarias
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import { Button, Alert } from 'react-bootstrap';

// Importar componentes relacionados
import FormComponent from './FormComponent';
import UserListComponent from './UserListComponent';

// Importar hojas de estilo
import './component.css/CrudComponent.css';
import './component.css/Form.css';

// Definir el componente CrudComponent como una función
const CrudComponent = () => {
  // Definir los valores iniciales del formulario
  const initialFormValues = {
    name: '',
    lastname: '',
    email: '',
    age: '',
    select: '',
    radio: '',
    automaticDate: new Date().toISOString(),
    acepto: false,
  };

  // Definir los estados del componente
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formData, setFormData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showAddAlert, setShowAddAlert] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  // Ejecutar una solicitud HTTP para obtener los datos al cargar el componente
  useEffect(() => {
    fetchData();
  }, []);

  // Guardar los datos en el almacenamiento local y actualizar el formulario en función de los cambios en los datos y la edición
  useEffect(() => {
    saveDataToLocalStorage();
    if (!isEditing) {
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        automaticDate: new Date().toISOString(),
      }));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData, isEditing]);

  // Mostrar el mensaje de éxito durante 3 segundos cuando se establece el estado de showSuccessMessage en true
  useEffect(() => {
    if (showSuccessMessage) {
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessMessage]);

  // Realizar una solicitud HTTP para obtener los datos de la API
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/data');
      const data = response.data;
      setFormData(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Guardar los datos en el almacenamiento local
  const saveDataToLocalStorage = () => {
    localStorage.setItem('formData', JSON.stringify(formData));
  };

  // Restablecer los valores del formulario a los valores iniciales
  const handleFormReset = () => {
    setFormValues(initialFormValues);
  };

  // Enviar el formulario y realizar una solicitud HTTP para crear o actualizar un usuario
  const handleSubmit = async (values, { resetForm }) => {
    try {
      let response;

      if (isEditing) {
        response = await axios.put(`http://localhost:3000/data/${formData[editIndex].id}`, values);
      } else {
        response = await axios.post('http://localhost:3000/data', values);
      }

      if (response.status === 200 || response.status === 201) {
        const responseData = response.data;
        if (isEditing) {
          setFormData((prevData) => {
            const newData = [...prevData];
            newData[editIndex] = responseData;
            return newData;
          });
          setIsEditing(false);
          setEditIndex(null);
          resetForm();
          setShowSuccessMessage(true);
          handleFormReset();
        } else {
          setFormData((prevData) => [...prevData, responseData]);
          resetForm();
          setShowSuccessMessage(true);
        }
      } else {
        throw new Error('Error al cargar los datos');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Manejar el evento de clic en el botón de edición de un usuario
  const handleEditClick = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setFormValues(formData[index]);
    setShowModal(true);
  };

  // Manejar el evento de eliminación de un usuario
  const handleDelete = (index) => {
    setShowDeleteAlert(true);
    setEditIndex(index);
  };

  // Confirmar la eliminación de un usuario y realizar una solicitud HTTP para eliminarlo
  const handleConfirmDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:3000/data/${formData[editIndex].id}`);
      if (response.status === 200) {
        setFormData((prevData) => {
          const newData = [...prevData];
          newData.splice(editIndex, 1);
          return newData;
        });
        setShowDeleteAlert(false);
        handleFormReset();
      } else {
        throw new Error('Error al eliminar los datos');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Cancelar la eliminación de un usuario
  const handleCancelDelete = () => {
    setShowDeleteAlert(false);
  };

  // Cancelar la edición de un usuario y cerrar el modal del formulario
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditIndex(null);
    handleFormReset();
    setShowModal(false);
  };

  // Manejar el evento de clic en el botón de agregar un usuario
  const handleAddClick = () => {
    setShowAddAlert(true);
  };

  // Confirmar el redireccionamiento al formulario al hacer clic en el botón "Aceptar" del mensaje de alerta
  const handleAddAlertConfirm = () => {
    setShowAddAlert(false);
    setShowModal(true);
  };

  // Cancelar el redireccionamiento al formulario al hacer clic en el botón "Cancelar" del mensaje de alerta
  const handleAddAlertCancel = () => {
    setShowAddAlert(false);
  };

  // Cerrar el mensaje de éxito
  const handleAlertClose = () => {
    setShowSuccessMessage(false);
  };

  // Renderizar el componente CrudComponent
  return (
    <div className="crud-container">
      <h1>Contáctese con TechGenius</h1>
      <p className="text">
        Si no encuentras la respuesta que buscas o necesitas asistencia personalizada, no dudes en contactarnos. Nuestro
        equipo de soporte estará encantado de ayudarte en todo lo que necesites.
      </p>
      <p className="text">Puedes comunicarte con nosotros a través del siguiente correo electrónico: hector.cano@inacapmail.cl</p>
      <br />

      <h4>Dejanos tus datos haciendo click en agregar</h4>
      <br />

      <button className="add-button" onClick={handleAddClick}>
        Agregar
      </button>

      {showAddAlert && (
        <div className="alert-container">
          <div className="alert">
            <p>¿Deseas ir al formulario para insertar los datos?</p>
            <Button variant="primary" onClick={handleAddAlertConfirm}>
              Aceptar
            </Button>
            <Button variant="secondary" onClick={handleAddAlertCancel}>
              Cancelar
            </Button>
          </div>
        </div>
      )}

      {showDeleteAlert && (
        <div className="alert-container">
          <div className="alert">
            <p>¿Estás seguro de que deseas eliminar este usuario?</p>
            <Button variant="danger" onClick={handleConfirmDelete}>
              Eliminar
            </Button>
            <Button variant="secondary" onClick={handleCancelDelete}>
              Cancelar
            </Button>
          </div>
        </div>
      )}

      {/* Renderizar el componente FormComponent */}
      <FormComponent
        formValues={formValues}
        isEditing={isEditing}
        handleCancelEdit={handleCancelEdit}
        onSubmit={handleSubmit}
        showModal={showModal}
        setShowModal={setShowModal}
      />

      {/* Renderizar el componente UserListComponent */}
      <UserListComponent
        formData={formData}
        handleEditClick={handleEditClick}
        handleDelete={handleDelete}
        showSuccessMessage={showSuccessMessage}
        handleAlertClose={handleAlertClose}
      />
    </div>
  );
};

// Exportar el componente CrudComponent
export default CrudComponent;









// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import FormComponent from './FormComponent';
// import './component.css/CrudComponent.css';
// import './component.css/Form.css';


// const CrudComponent = () => {
//   const initialFormValues = {
//     name: '',
//     lastname: '',
//     email: '',
//     age: '',
//     select: '',
//     radio: '',
//     automaticDate: new Date().toISOString(),
//     acepto: false,
//   };

//   const [formValues, setFormValues] = useState(initialFormValues);
//   const [formData, setFormData] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal

//   useEffect(() => {
//     fetchData(); // Cargar datos de la API al cargar el componente
//   }, []);

//   useEffect(() => {
//     saveDataToLocalStorage(); // Guardar datos en el localStorage
//     if (!isEditing) {
//       setFormValues((prevFormValues) => ({
//         ...prevFormValues,
//         automaticDate: new Date().toISOString(), // Actualizar la fecha automática al cargar los datos
//       }));
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [formData, isEditing]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/data'); // Reemplazar la URL con la de tu API
//       const data = response.data;
//       setFormData(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const saveDataToLocalStorage = () => {
//     localStorage.setItem('formData', JSON.stringify(formData));
//   };

//   const handleFormReset = () => {
//     setFormValues(initialFormValues); // Restablecer los valores del formulario
//   };

//   const handleSubmit = async (values, { resetForm }) => {
//     try {
//       let response;

//       if (isEditing) {
//         response = await axios.put(`http://localhost:3000/data/${formData[editIndex].id}`, values);
//       } else {
//         response = await axios.post('http://localhost:3000/data', values);
//       }

//       if (response.status === 200 || response.status === 201) {
//         const responseData = response.data;
//         if (isEditing) {
//           setFormData((prevData) => {
//             const newData = [...prevData];
//             newData[editIndex] = responseData;
//             return newData;
//           });
//           setIsEditing(false);
//           setEditIndex(null);
//           resetForm(); // Limpiar el formulario después de editar
//           setShowSuccessMessage(true); // Mostrar el mensaje de ingreso exitoso
//           handleFormReset(); // Restablecer el formulario
//         } else {
//           setFormData((prevData) => [...prevData, responseData]);
//           resetForm(); // Limpiar el formulario después de guardar
//           setShowSuccessMessage(true); // Mostrar el mensaje de ingreso exitoso
//         }
//       } else {
//         throw new Error('Error al cargar los datos');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const SuccessMessage = ({ showMessage }) => {
//     useEffect(() => {
//       if (showMessage) {
//         const timer = setTimeout(() => {
//           setShowSuccessMessage(false);
//         }, 5000);
//         return () => clearTimeout(timer);
//       }
//     }, [showMessage]);

//     return (
//       showMessage && (
//         <div className="success-message-container">
//           <h2>Ingreso exitoso</h2>
//           <p>Los datos se han almacenado correctamente en el Local Storage.</p>
//         </div>
//       )
//     );
//   };

//   const handleEditClick = (index) => {
//     setIsEditing(true);
//     setEditIndex(index);
//     setFormValues(formData[index]);
//     setShowModal(true); // Abrir el modal al hacer clic en el botón de editar
//   };

//   const handleDelete = async (index) => {
//     try {
//       const response = await axios.delete(`http://localhost:3000/data/${formData[index].id}`);
//       if (response.status === 200) {
//         setFormData((prevData) => {
//           const newData = [...prevData];
//           newData.splice(index, 1);
//           return newData;
//         });
//       } else {
//         throw new Error('Error al eliminar los datos');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleCancelEdit = () => {
//     setIsEditing(false);
//     setEditIndex(null);
//     handleFormReset(); // Restablecer el formulario
//     setShowModal(false); // Cerrar el modal al cancelar la edición
//   };

//   return (
//     <div className="crud-container">
//       <h1>Contáctese con TechGenius</h1>
//       <p className='text'>
//         Si no encuentras la respuesta que buscas o necesitas asistencia personalizada, no dudes en contactarnos. Nuestro
//         equipo de soporte estará encantado de ayudarte en todo lo que necesites.
//       </p>
//       <p className='text'>Puedes comunicarte con nosotros a través del siguiente correo electrónico: hector.cano@inacapmail.cl</p>
//       <br />

//       <h4>Dejanos tus datos haciendo click en agregar</h4>
//       <br />

//       <FormComponent
//         initialValues={formValues}
//         isEditing={isEditing}
//         handleCancelEdit={handleCancelEdit}
//         onSubmit={handleSubmit}
//         showModal={showModal} // Pasar el estado del modal al formulario
//         setShowModal={setShowModal} // Pasar la función para controlar la visibilidad del modal al formulario
//       />
//       <br />

//       <SuccessMessage showMessage={showSuccessMessage} />
//       <div className="table-responsive">
//         <table className="table table-striped">
//           <thead className="thead">
//             <tr>
//               <th>Nombre</th>
//               <th>Apellido</th>
//               <th>Correo</th>
//               <th>Edad</th>
//               <th>Categoría</th>
//               <th>Develop</th>
//               <th>Fecha</th>
//               <th>Acciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {formData.map((data, index) => (
//               <tr key={index}>
//                 <td>{data.name}</td>
//                 <td>{data.lastname}</td>
//                 <td>{data.email}</td>
//                 <td>{data.age}</td>
//                 <td>{data.select}</td>
//                 <td>{data.radio}</td>
//                 <td>{data.automaticDate}</td>
//                 <td>
//                   <button className="btn btn-primary" type="button" onClick={() => handleEditClick(index)}>
//                     Editar
//                   </button>
//                   <button className="btn btn-danger" type="button" onClick={() => handleDelete(index)}>
//                     Eliminar
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default CrudComponent;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Modal, Button, Alert } from 'react-bootstrap';
// import { Formik, Form, ErrorMessage } from 'formik';
// import TextInput from './TextInput';
// import Checkbox from './Checkbox';
// import Select from './Select';
// import Radio from './Radio';
// import AutomaticDateField from './AutomaticDateField';
// import AgeField from './AgeField';
// import './component.css/CrudComponent.css';
// import './component.css/Form.css';
// import validate from './validate';

// const CrudComponent = () => {
//   const initialFormValues = {
//     name: '',
//     lastname: '',
//     email: '',
//     age: '',
//     select: '',
//     radio: '',
//     automaticDate: new Date().toISOString(),
//     acepto: false,
//   };

//   const [formValues, setFormValues] = useState(initialFormValues);
//   const [formData, setFormData] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [showAddAlert, setShowAddAlert] = useState(false);
//   const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  // const [deleteIndex, setDeleteIndex] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   useEffect(() => {
//     saveDataToLocalStorage();
//     if (!isEditing) {
//       setFormValues((prevFormValues) => ({
//         ...prevFormValues,
//         automaticDate: new Date().toISOString(),
//       }));
//     }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [formData, isEditing]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/data');
//       const data = response.data;
//       setFormData(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const saveDataToLocalStorage = () => {
//     localStorage.setItem('formData', JSON.stringify(formData));
//   };

//   const handleFormReset = () => {
//     setFormValues(initialFormValues);
//   };

//   const handleSubmit = async (values, { resetForm }) => {
//     try {
//       let response;

//       if (isEditing) {
//         response = await axios.put(`http://localhost:3000/data/${formData[editIndex].id}`, values);
//       } else {
//         response = await axios.post('http://localhost:3000/data', values);
//       }

//       if (response.status === 200 || response.status === 201) {
//         const responseData = response.data;
//         if (isEditing) {
//           setFormData((prevData) => {
//             const newData = [...prevData];
//             newData[editIndex] = responseData;
//             return newData;
//           });
//           setIsEditing(false);
//           setEditIndex(null);
//           resetForm();
//           setShowSuccessMessage(true);
//           handleFormReset();
//         } else {
//           setFormData((prevData) => [...prevData, responseData]);
//           resetForm();
//           setShowSuccessMessage(true);
//         }
//       } else {
//         throw new Error('Error al cargar los datos');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleEditClick = (index) => {
//     setIsEditing(true);
//     setEditIndex(index);
//     setFormValues(formData[index]);
//     setShowModal(true);
//   };

//   const handleDelete = (index) => {
//     setDeleteIndex(index);
//     setShowDeleteAlert(true);
//   };

//   const handleConfirmDelete = async () => {
//     try {
//       const response = await axios.delete(`http://localhost:3000/data/${formData[deleteIndex].id}`);
//       if (response.status === 200) {
//         setFormData((prevData) => {
//           const newData = [...prevData];
//           newData.splice(deleteIndex, 1);
//           return newData;
//         });
//         setShowDeleteAlert(false);
//       } else {
//         throw new Error('Error al eliminar los datos');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleCancelDelete = () => {
//     setDeleteIndex(null);
//     setShowDeleteAlert(false);
//   };

//   const handleCancelEdit = () => {
//     setIsEditing(false);
//     setEditIndex(null);
//     handleFormReset();
//     setShowModal(false);
//   };

//   const handleAddClick = () => {
//     setShowAddAlert(true);
//   };

//   const handleAddAlertConfirm = () => {
//     setShowAddAlert(false);
//     setShowModal(true);
//   };

//   const handleAddAlertCancel = () => {
//     setShowAddAlert(false);
//   };

//   const handleAlertClose = () => {
//     setShowSuccessMessage(false);
//   };

//   const SuccessMessage = ({ showMessage }) => {
//     useEffect(() => {
//       if (showMessage) {
//         const timer = setTimeout(() => {
//           setShowSuccessMessage(false);
//         }, 5000);
//         return () => clearTimeout(timer);
//       }
//     }, [showMessage]);

//     return (
//       showMessage && (
//         <Alert variant="success" className="success-message-container" onClose={handleAlertClose} dismissible>
//           <Alert.Heading>Ingreso exitoso</Alert.Heading>
//           <p>Los datos se han almacenado correctamente en el Local Storage.</p>
//         </Alert>
//       )
//     );
//   };

//   return (
//     <div className="crud-container">
//       <h1>Contáctese con TechGenius</h1>
//       <p className="text">
//         Si no encuentras la respuesta que buscas o necesitas asistencia personalizada, no dudes en contactarnos. Nuestro
//         equipo de soporte estará encantado de ayudarte en todo lo que necesites.
//       </p>
//       <p className="text">Puedes comunicarte con nosotros a través del siguiente correo electrónico: hector.cano@inacapmail.cl</p>
//       <br />

//       <h4>Dejanos tus datos haciendo click en agregar</h4>
//       <br />

//       <button className="add-button" onClick={handleAddClick}>
//         Agregar
//       </button>

//       {showAddAlert && (
//         <div className="alert-container">
//           <div className="alert">
//             <p>¿Deseas ir al formulario para insertar los datos?</p>
//             <Button variant="primary" onClick={handleAddAlertConfirm}>
//               Aceptar
//             </Button>
//             <Button variant="secondary" onClick={handleAddAlertCancel}>
//               Cancelar
//             </Button>
//           </div>
//         </div>
//       )}

//       {showDeleteAlert && (
//         <div className="alert-container">
//           <div className="alert">
//             <p>¿Estás seguro de que deseas eliminar este usuario?</p>
//             <Button variant="danger" onClick={handleConfirmDelete}>
//               Eliminar
//             </Button>
//             <Button variant="secondary" onClick={handleCancelDelete}>
//               Cancelar
//             </Button>
//           </div>
//         </div>
//       )}

//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>{isEditing ? 'Editar' : 'Agregar'}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Formik
//             initialValues={formValues}
//             validate={validate}
//             onSubmit={handleSubmit}
//             enableReinitialize={isEditing}
//           >
//             <Form className="form-container">
//               <TextInput name="name" label="Nombres" />
//               <br />
//               <TextInput name="lastname" label="Apellidos" />
//               <br />
//               <TextInput name="email" label="Correo" />
//               <br />
//               <AgeField name="age" label="Edad" />
//               <br />
//               <Select label="Categoría" name="select">
//                 <option value="">Selecciona una opción</option>
//                 <option value="Principiante">Principiante</option>
//                 <option value="Intermedio">Intermedio</option>
//                 <option value="Avanzado">Avanzado</option>
//               </Select>
//               <br />
//               <Radio name="radio" value="Front-End" label="Front-End" />
//               <Radio name="radio" value="Back-End" label="Back-End" />
//               <Radio name="radio" value="FullStack" label="FullStack" />
//               <ErrorMessage name="radio" />
//               <br />
//               <AutomaticDateField name="automaticDate" label="Fecha automática" />
//               <br />
//               <Checkbox name="acepto">Aceptar Términos y Condiciones</Checkbox>
//               <br />
//               <div className={`button-container ${isEditing ? 'mobile' : ''}`}>
//                 <button className="submit-button" type="submit">
//                   {isEditing ? 'Guardar' : 'Agregar'}
//                 </button>
//                 {isEditing && (
//                   <button className="cancel-button" type="button" onClick={handleCancelEdit}>
//                     Cancelar
//                   </button>
//                 )}
//                 <button className="hide-button" type="button" onClick={() => setShowModal(false)}>
//                   Ocultar
//                 </button>
//               </div>
//             </Form>
//           </Formik>
//         </Modal.Body>
//       </Modal>

//       <SuccessMessage showMessage={showSuccessMessage} />

//       <div className="table-responsive">
//         <table className="table table-striped">
//           <thead className="thead">
//             <tr>
//               <th>Nombre</th>
//               <th>Apellido</th>
//               <th>Correo</th>
//               <th>Edad</th>
//               <th>Categoría</th>
//               <th>Develop</th>
//               <th>Fecha</th>
//               <th>Acciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {formData.map((data, index) => (
//               <tr key={index}>
//                 <td>{data.name}</td>
//                 <td>{data.lastname}</td>
//                 <td>{data.email}</td>
//                 <td>{data.age}</td>
//                 <td>{data.select}</td>
//                 <td>{data.radio}</td>
//                 <td>{data.automaticDate}</td>
//                 <td>
//                   <button className="btn btn-primary" type="button" onClick={() => handleEditClick(index)}>
//                     Editar
//                   </button>
//                   <button className="btn btn-danger" type="button" onClick={() => handleDelete(index)}>
//                     Eliminar
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default CrudComponent;


