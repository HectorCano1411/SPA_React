import { useField } from "formik";
import './component.css/Radio.css'
const Radio = ({ label, ...props }) => {
  const [field] = useField({ ...props, type: 'radio' });

  return (
    <div className="radio-control">
      <label className="radio-label">
        <input className="radio-input" type="radio" {...field} {...props} />
        {label}
      </label>
    </div>
  );
};

export default Radio;





// import { useField } from "formik"


// const Radio = ({label, ...props}) => {
//     const [field] = useField({ ...props, type: 'radio'})
//     return(
//         <div>
//             <label>
//                 <input type="radio" { ...field} {...props} />
//                 {label}
//             </label>
//         </div>
//     )
// }

// export default Radio;