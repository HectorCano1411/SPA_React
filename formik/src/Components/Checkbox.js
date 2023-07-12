import { useField } from "formik";
import './component.css/Checkbox.css'

const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });

  return (
    <div className="checkbox-control">
      <label>
        <input className="checkbox-input" type="checkbox" {...field} {...props} />
        <span className="checkbox-label">{children}</span>
      </label>
      {meta.touched && meta.error ? <div className="checkbox-error">{meta.error}</div> : null}
    </div>
  );
}

export default Checkbox;



// import { useField } from "formik";


// const Checkbox = ({children, ...props}) => {
//     const [field , meta] = useField({...props, type: 'checkbox' })
//     return(
//         <div>
//             <label>
//                 <input type="checkbox" {...field} {...props} />
//                 {children}
//             </label>
//             {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null }
//         </div>
//     )

// }

// export default Checkbox;


