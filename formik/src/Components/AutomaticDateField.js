import React from 'react';
import { useField } from 'formik';
import './component.css/AutomaticDateField.css'

const AutomaticDateField = ({ label, name }) => {
  const [field, meta, helpers] = useField(name);

  const currentDate = React.useMemo(() => new Date().toLocaleDateString(), []);

  React.useEffect(() => {
    helpers.setValue(currentDate);
  }, [helpers, currentDate]);

  return (
    <div className="automatic-date-control">
      <label className="automatic-date-label">{label}</label>
      <input className="automatic-date-input" type="text" {...field} readOnly />
      {meta.touched && meta.error && <div className="error-message">{meta.error}</div>}
    </div>
  );
};

export default AutomaticDateField;

// import React from 'react';
// import { useField } from 'formik';

// const AutomaticDateField = ({ label, name }) => {
//   const [field, meta, helpers] = useField(name);

  
//   const currentDate = React.useMemo(() => new Date().toLocaleDateString(), []);


  
//   React.useEffect(() => {
//     helpers.setValue(currentDate);
//   }, [helpers, currentDate]);

//   return (
//     <div>
//       <label>{label}</label>
//       <input type="text" {...field} readOnly />
//       {meta.touched && meta.error && <div className="error">{meta.error}</div>}
//     </div>
//   );
// };

// export default AutomaticDateField;

