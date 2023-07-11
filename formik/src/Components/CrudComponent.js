// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import FormComponent from './FormComponent';
// import Table from './Table';
// import SuccessMessage from './SuccessMessage';

// const CrudComponent = () => {
//   const initialFormValues = {
//     name: '',
//     lastname: '',
//     email: '',
//     age: '',
//     select: '',
//     radio: '',
//     automaticDate: '',
//     acepto: false,
//   };

//   const [formValues, setFormValues] = useState(initialFormValues);
//   const [formData, setFormData] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   useEffect(() => {
//     saveDataToLocalStorage();
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [formData]);

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

//   const resetForm = () => {
//     setFormValues(initialFormValues);
//   };

//   const handleSubmit = async (values, { resetForm }) => {
//     try {
//       let response;

//       if (isEditing) {
//         response = await axios.put(`http://localhost:3000/data/${formData[editIndex].id}`, values, {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });
//       } else {
//         response = await axios.post('http://localhost:3000/data', values, {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });
//       }

//       if (response.status === 200 || response.status === 201) {
//         const responseData = response.data;
//         setFormData((prevData) => {
//           if (isEditing) {
//             const newData = [...prevData];
//             newData[editIndex] = responseData;
//             return newData;
//           } else {
//             return [...prevData, responseData];
//           }
//         });
//         setIsEditing(false);
//         setEditIndex(null);
//         resetForm();
//         setShowSuccessMessage(true);
//         setTimeout(() => {
//           setShowSuccessMessage(false);
//         }, 5000);

//         // Guardar los datos en el localStorage después de un ingreso exitoso
//         saveDataToLocalStorage();
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
//     resetForm();
//   };

//   return (
//     <div>
//       <FormComponent
//         initialValues={formValues}
//         isEditing={isEditing}
//         handleCancelEdit={handleCancelEdit}
//         onSubmit={handleSubmit}
//         resetForm={resetForm}
//       />
//       {showSuccessMessage && <SuccessMessage data={formValues} />}
//       <Table formData={formData} handleEditClick={handleEditClick} handleDelete={handleDelete} />
//     </div>
//   );
// };

// export default CrudComponent;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import FormComponent from './FormComponent';
// import Table from './Table';
// import SuccessMessage from './SuccessMessage';

// const CrudComponent = () => {
//   const initialFormValues = {
//     name: '',
//     lastname: '',
//     email: '',
//     age: '',
//     select: '',
//     radio: '',
//     automaticDate: '',
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
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [formData]);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://localhost:3000/data'); // Reemplazar la URL con la de tu API
//       const data = await response.json();
//       setFormData(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const saveDataToLocalStorage = () => {
//     localStorage.setItem('formData', JSON.stringify(formData));
//   };

//   const handleSubmit = async (values, { resetForm }) => {
//     try {
//       let response;

//       if (isEditing) {
//         response = await fetch(`http://localhost:3000/data/${formData[editIndex].id}`, {
//           method: 'PUT',
//           body: JSON.stringify(values),
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });
//       } else {
//         response = await fetch('http://localhost:3000/data', {
//           method: 'POST',
//           body: JSON.stringify(values),
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });
//       }

//       if (response.ok) {
//         const responseData = await response.json();
//         if (isEditing) {
//           setFormData((prevData) => {
//             const newData = [...prevData];
//             newData[editIndex] = responseData;
//             return newData;
//           });
//           setIsEditing(false);
//           setEditIndex(null);
//           setFormValues(initialFormValues); // Limpiar el formulario después de editar
//           setShowSuccessMessage(true); // Mostrar el mensaje de ingreso exitoso
//           setTimeout(() => {
//             setShowSuccessMessage(false); // Ocultar el mensaje después de 5 segundos
//           }, 5000);
//         } else {
//           setFormData((prevData) => [...prevData, responseData]);
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
//   };

//   const handleDelete = async (index) => {
//     try {
//       const response = await fetch(`http://localhost:3000/data/${formData[index].id}`, {
//         method: 'DELETE',
//       });

//       if (response.ok) {
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
//     setFormValues(initialFormValues);
//   };

//   return (
//     <div>
//       <FormComponent
//         initialValues={formValues}
//         isEditing={isEditing}
//         handleCancelEdit={handleCancelEdit}
//         onSubmit={handleSubmit}
//       />
//       {showSuccessMessage && <p>Datos ingresados exitosamente.</p>}
//       <Table formData={formData} handleEditClick={handleEditClick} handleDelete={handleDelete} />
//     </div>
//   );
// };

// export default CrudComponent;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormComponent from './FormComponent';
import Table from './Table';

const SuccessMessage = ({ showMessage, setShowMessage }) => {
  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showMessage, setShowMessage]);

  return (
    <div>
      {showMessage && (
        <div className="success-message">
          <p>Datos ingresados exitosamente.</p>
        </div>
      )}
    </div>
  );
};

const CrudComponent = () => {
  const initialFormValues = {
    name: '',
    lastname: '',
    email: '',
    age: '',
    select: '',
    radio: '',
    automaticDate: '',
    acepto: false,
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formData, setFormData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    fetchData(); // Cargar datos de la API al cargar el componente
  }, []);

  useEffect(() => {
    saveDataToLocalStorage(); // Guardar datos en el localStorage
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

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

  const resetForm = () => {
    setFormValues(initialFormValues);
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      let response;

      if (isEditing) {
        response = await axios.put(`http://localhost:3000/data/${formData[editIndex].id}`, values, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } else {
        response = await axios.post('http://localhost:3000/data', values, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
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

  const handleEditClick = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setFormValues(formData[index]);
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
    resetForm();
  };

  return (
    <div>
      <FormComponent
        initialValues={formValues}
        isEditing={isEditing}
        handleCancelEdit={handleCancelEdit}
        onSubmit={handleSubmit}
      />
      <SuccessMessage
        showMessage={showSuccessMessage}
        setShowMessage={setShowSuccessMessage}
      />
      <Table formData={formData} handleEditClick={handleEditClick} handleDelete={handleDelete} />
    </div>
  );
};

export default CrudComponent;
