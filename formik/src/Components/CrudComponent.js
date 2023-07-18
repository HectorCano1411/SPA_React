// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import FormComponent from './FormComponent';
// import './component.css/CrudComponent.css';
// import './component.css/Form.css'


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
//   // eslint-disable-next-line react-hooks/exhaustive-deps
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
//   };

//   return (
//     <div className="crud-container">
//     <h3>Contáctese con TechGenius</h3>
//     <p>
//       Si no encuentras la respuesta que buscas o necesitas asistencia personalizada, no dudes en contactarnos. Nuestro
//       equipo de soporte estará encantado de ayudarte en todo lo que necesites.
//     </p>
//     <p>Puedes comunicarte con nosotros a través del siguiente correo electrónico: hector.cano@inacapmail.cl</p>
//     <br />

//     <h3>Haz click en agregar para contactarnos contigo</h3>
//     <br />

//     <FormComponent
//       initialValues={formValues}
//       isEditing={isEditing}
//       handleCancelEdit={handleCancelEdit}
//       onSubmit={handleSubmit}
//     />
//     <br />

//     <SuccessMessage showMessage={showSuccessMessage} />
//     <div className='table-responsive'>
//     <table className="table table-striped">
//       <thead className='thead'>
//         <tr>
//           <th>Nombre</th>
//           <th>Apellido</th>
//           <th>Correo</th>
//           <th>Edad</th>
//           <th>Categoría</th>
//           <th>Develop</th>
//           <th>Fecha</th>
//           <th>Acciones</th>
//         </tr>
//       </thead>
//       <tbody>
//         {formData.map((data, index) => (
//           <tr key={index}>
//             <td>{data.name}</td>
//             <td>{data.lastname}</td>
//             <td>{data.email}</td>
//             <td>{data.age}</td>
//             <td>{data.select}</td>
//             <td>{data.radio}</td>
//             <td>{data.automaticDate}</td>
//             <td>
//               <button className="btn btn-primary" type="button" onClick={() => handleEditClick(index)}>
//                 Editar
//               </button>
//               <button className="btn btn-danger" type="button" onClick={() => handleDelete(index)}>
//                 Eliminar
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//     </div>
//   </div>
//   );
// }

// export default CrudComponent;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormComponent from './FormComponent';
import './component.css/CrudComponent.css';
import './component.css/Form.css';


const CrudComponent = () => {
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

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formData, setFormData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal

  useEffect(() => {
    fetchData(); // Cargar datos de la API al cargar el componente
  }, []);

  useEffect(() => {
    saveDataToLocalStorage(); // Guardar datos en el localStorage
    if (!isEditing) {
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        automaticDate: new Date().toISOString(), // Actualizar la fecha automática al cargar los datos
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData, isEditing]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/data'); // Reemplazar la URL con la de tu API
      const data = response.data;
      setFormData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const saveDataToLocalStorage = () => {
    localStorage.setItem('formData', JSON.stringify(formData));
  };

  const handleFormReset = () => {
    setFormValues(initialFormValues); // Restablecer los valores del formulario
  };

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
          resetForm(); // Limpiar el formulario después de editar
          setShowSuccessMessage(true); // Mostrar el mensaje de ingreso exitoso
          handleFormReset(); // Restablecer el formulario
        } else {
          setFormData((prevData) => [...prevData, responseData]);
          resetForm(); // Limpiar el formulario después de guardar
          setShowSuccessMessage(true); // Mostrar el mensaje de ingreso exitoso
        }
      } else {
        throw new Error('Error al cargar los datos');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const SuccessMessage = ({ showMessage }) => {
    useEffect(() => {
      if (showMessage) {
        const timer = setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
        return () => clearTimeout(timer);
      }
    }, [showMessage]);

    return (
      showMessage && (
        <div className="success-message-container">
          <h2>Ingreso exitoso</h2>
          <p>Los datos se han almacenado correctamente en el Local Storage.</p>
        </div>
      )
    );
  };

  const handleEditClick = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setFormValues(formData[index]);
    setShowModal(true); // Abrir el modal al hacer clic en el botón de editar
  };

  const handleDelete = async (index) => {
    try {
      const response = await axios.delete(`http://localhost:3000/data/${formData[index].id}`);
      if (response.status === 200) {
        setFormData((prevData) => {
          const newData = [...prevData];
          newData.splice(index, 1);
          return newData;
        });
      } else {
        throw new Error('Error al eliminar los datos');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditIndex(null);
    handleFormReset(); // Restablecer el formulario
    setShowModal(false); // Cerrar el modal al cancelar la edición
  };

  return (
    <div className="crud-container">
      <h1>Contáctese con TechGenius</h1>
      <p className='text'>
        Si no encuentras la respuesta que buscas o necesitas asistencia personalizada, no dudes en contactarnos. Nuestro
        equipo de soporte estará encantado de ayudarte en todo lo que necesites.
      </p>
      <p className='text'>Puedes comunicarte con nosotros a través del siguiente correo electrónico: hector.cano@inacapmail.cl</p>
      <br />

      <h4>Dejanos tus datos haciendo click en agregar</h4>
      <br />

      <FormComponent
        initialValues={formValues}
        isEditing={isEditing}
        handleCancelEdit={handleCancelEdit}
        onSubmit={handleSubmit}
        showModal={showModal} // Pasar el estado del modal al formulario
        setShowModal={setShowModal} // Pasar la función para controlar la visibilidad del modal al formulario
      />
      <br />

      <SuccessMessage showMessage={showSuccessMessage} />
      <div className="table-responsive">
        <table className="table table-striped">
          <thead className="thead">
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Correo</th>
              <th>Edad</th>
              <th>Categoría</th>
              <th>Develop</th>
              <th>Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.lastname}</td>
                <td>{data.email}</td>
                <td>{data.age}</td>
                <td>{data.select}</td>
                <td>{data.radio}</td>
                <td>{data.automaticDate}</td>
                <td>
                  <button className="btn btn-primary" type="button" onClick={() => handleEditClick(index)}>
                    Editar
                  </button>
                  <button className="btn btn-danger" type="button" onClick={() => handleDelete(index)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CrudComponent;
