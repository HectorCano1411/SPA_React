
import React, { useEffect } from 'react';

const SuccessMessage = ({ data }) => {
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(data));
  }, [data]);

  return (
    <div className="success-message-container">
      <h2>Ingreso exitoso</h2>
      <p>Los datos se han almacenado correctamente en el Local Storage.</p>
    </div>
  );
};

export default SuccessMessage;

// import React, { useEffect } from 'react';
// import './FormComponent.css';


// const SuccessMessage = ({ data }) => {
//   useEffect(() => {
//     localStorage.setItem('formData', JSON.stringify(data));
//   }, [data]);

//   return (
//     <div>
//       <h2>Ingreso exitoso</h2>
//       <p>Los datos se han almacenado correctamente en el Local Storage.</p>
//     </div>
//   );
// };

// export default SuccessMessage;

// import React, { useEffect } from 'react';
// // import './FormComponent.css';

// const SuccessMessage = ({ data }) => {
//   useEffect(() => {
//     localStorage.setItem('formData', JSON.stringify(data));
//   }, [data]);

//   return (
//     <div className="success-message-container">
//       <h2>Ingreso exitoso</h2>
//       <p>Los datos se han almacenado correctamente en el Local Storage.</p>
//     </div>
//   );
// };

// export default SuccessMessage;
