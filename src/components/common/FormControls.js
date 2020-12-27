import React from "react";
import s from './FormControls.module.css';

// const textarea = "textarea";
// const input = "input";

export const Textarea = ({input, meta, ...props}) => {
    const yesError = meta.error && meta.touched;
    return (
        <div className= {yesError ? s.error : s.noError}>
            <textarea {...input} {...props}/>
            {yesError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const yesError = meta.error && meta.touched;
    return (
        <div className= {yesError ? s.error : s.noError}>
            <input {...input} {...props}/>
            {yesError && <span>{meta.error}</span>}
        </div>
    )
}

// const FormCreator = (props) => {
//     debugger;
//     const yesError = props.meta.error && props.meta.touched;
//     return (
//         <div className= {yesError ? s.error : s.noError}>
//             <ElementSwitch element = {props.element} input = {input} oProps = {props} />
//             {yesError && <span>{props.meta.error}</span>}
//         </div>
//     )
// }

// const ElementSwitch = (props) => {
//     switch (props.element) {
//         case textarea: 
//         return(
//             <textarea {...props.input} {...props.oProps} />
//         )
//         case input:
//             return(
//                 <input {...props.input} {...props.oProps} />
//             )
//         default:
//             return undefined;
//     }
// }

// export const Input = (props) => {
//     debugger;
//     return <FormCreator element = "input" input = {props.input} meta={props.meta}/>
// }

// export const Textarea = (props) => {
//     debugger;
//     return <FormCreator element = "input" props = {props} />
// }