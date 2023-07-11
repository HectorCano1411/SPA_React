// import React from 'react';

// const Table = ({ formData, handleEditClick, handleDelete }) => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Nombre</th>
//           <th>Apellido</th>
//           <th>Correo</th>
//           <th>Edad</th> 
//           <th>Categoría</th>
//           <th>Desarrollador</th>
//           <th>Fecha automática</th>
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
//               <button type='button' onClick={() => handleEditClick(index)}>Editar</button>
//               <button type='button' onClick={() => handleDelete(index)}>Eliminar</button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default Table;
import React from 'react';
import './FormComponent.css';


const Table = ({ formData, handleEditClick, handleDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
          <th>Edad</th> 
          <th>Categoría</th>
          <th>Desarrollador</th>
          <th>Fecha automática</th>
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
            <td className="actions">
              <button type='button' onClick={() => handleEditClick(index)}>Editar</button>
              <button type='button' onClick={() => handleDelete(index)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
