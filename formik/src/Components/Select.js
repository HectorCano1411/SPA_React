import { useField } from "formik";
import './component.css/Select.css';


const Select = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props });

  return (
    <div className="form-control">
      <label className="form-label">{label}</label>
      <select className="form-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error-message">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Select;






// import { useField } from "formik"

// const Select = ({label, ...props}) => {
//     const [field , meta] = useField({...props })

//     return(
//         <div>
//             <label>{label}</label>
//             <select {...field} {...props} />
//             {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null }
//         </div>
//     )
// }

// export default Select;