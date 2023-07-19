import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Button, Alert } from 'react-bootstrap';

const UserListComponent = ({
  formData,
  handleEditClick,
  handleDelete,
  showSuccessMessage,
  handleAlertClose,
}) => {
  return (
    <div>
      {showSuccessMessage && (
        <Alert variant="success" className="success-message-container" onClose={handleAlertClose} dismissible>
          <Alert.Heading>Ingreso exitoso</Alert.Heading>
          <p>Los datos se han almacenado correctamente en el Local Storage.</p>
        </Alert>
      )}

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

export default UserListComponent;
