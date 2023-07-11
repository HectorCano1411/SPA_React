// import React from 'react';
import { useField } from 'formik';

const AgeField = ({label, ...props }) => {
  const [field, meta, helpers] = useField({...props, type: 'AgeField' });

  const handleIncrement = () => {
    helpers.setValue(field.value + 1);
  };

  const handleDecrement = () => {
    helpers.setValue(field.value - 1);
  };

  return (
    <div>
      <label>{label}</label>
      <div>
        <button type="button" onClick={handleDecrement}>
          -
        </button>
        <input type="number" {...field}{...props} />
        <button type="button" onClick={handleIncrement}>
          +
        </button>
      </div>
      {meta.touched && meta.error && <div>{meta.error}</div>}
    </div>
  );
};

export default AgeField;
