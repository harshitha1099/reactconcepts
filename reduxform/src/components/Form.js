import React from 'react'
import { Field, reduxForm } from 'redux-form';
import "./form.css"

function Form(props) {
    let renderError = ({error, touched})=>{
    if (touched && error){
        return (
            <div>
                <div className="error">{error}</div>
            </div>
        );
}
};
 let renderInput = ({ input, placeholder, meta }) => {
        return (
            <div className='field'>
                <input {...input} placeholder={placeholder}  autoComplete='off'/>
                {renderError(meta)}
            </div>
        );
    };

    //omsubmit
    let onSubmit = (formValues) => {
        console.log(formValues);
    };

    return (
        <form onSubmit={props.handleSubmit(onSubmit)}>
            <Field name="title" component={renderInput} placeholder='enter title' />
            <Field name="description" component={renderInput} placeholder='enter description' />
            <Field name="password" component={renderInput} placeholder="enter password" />
            <button style={{ backgroundColor: "yellowgreen" }}>Submit</button>
        </form>
    );
}
//validation
let validate = (formValues) => {
    const errors = {};


    if (!formValues.title) {
        errors.title = 'Title is required';
    }
    if (!formValues.description) {
        errors.description = 'Description is required';
    }
    return errors;
};

export default reduxForm({
    form: "loginForm",
    validate, //for validation purpose

})(Form);

