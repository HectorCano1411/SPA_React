import { useField } from "formik";
import './component.css/TextInput.css';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="form-control">
      <label className="form-label" htmlFor={props.id || props.name}>{label}</label>
      <input className={`form-input ${meta.touched && meta.error ? 'error' : ''}`} {...field} {...props} />
      {meta.touched && meta.error && <div className="error-message">{meta.error}</div>}
    </div>
  );
}

export default TextInput;














// import { useField } from "formik";


// const TextInput = ({label, ...props}) => {
//     const [field, meta] = useField(props)
//     // console.log({field, meta})
//     return(
//         <div className="control">
//             <label className="label">{label}</label>
//             <input className="input" {...field} {...props} />
//             {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null }
//         </div>
//     )

// }

// export default TextInput;