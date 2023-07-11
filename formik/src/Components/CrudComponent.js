import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormComponent from './FormComponent';
import Table from './Table';
import SuccessMessage from './SuccessMessage';

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
    fetchData();
  }, []);

  useEffect(() => {
    saveDataToLocalStorage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/data');
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
        setFormData((prevData) => {
          if (isEditing) {
            const newData = [...prevData];
            newData[editIndex] = responseData;
            return newData;
          } else {
            return [...prevData, responseData];
          }
        });
        setIsEditing(false);
        setEditIndex(null);
        resetForm();
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);

        // Guardar los datos en el localStorage después de un ingreso exitoso
        saveDataToLocalStorage();
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
        resetForm={resetForm}
      />
      {showSuccessMessage && <SuccessMessage data={formValues} />}
      <Table formData={formData} handleEditClick={handleEditClick} handleDelete={handleDelete} />
    </div>
  );
};

export default CrudComponent;
