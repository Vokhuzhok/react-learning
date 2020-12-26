import React from "react";
import s from './FormControls.module.css';



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