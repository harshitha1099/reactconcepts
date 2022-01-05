import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import './style.css'

function Login() {

    let initialValues = {
        userName: '',
        password: '',
        remember: false
    }

    let validationSchema = yup.object().shape({
        userName: yup.string().email("enter valid email").required("email is required"),
        password: yup.string().required("password is required").min(5)
    })

    let onSubmit = (values, props) => {
        console.log(values);
        props.resetForm()
    }
    return (
        <div className='container border mt-5'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>

                {(props) => (
                    <Form>
                        <div className='container'>

                            <div className="mb-3">
                                <label>Email</label>
                                <Field

                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Email"
                                    name="userName"
                                    autoComplete="off"

                                />
                                <p className='error'><ErrorMessage name="userName" /></p>
                            </div>
                            <div className="mb-3">
                                <label>Password</label>
                                <Field

                                    type="password"
                                    className="form-control"
                                    placeholder="Enter Password"
                                    name="password"
                                />
                                <p className='error'><ErrorMessage name="password" /></p>

                            </div>
                            <div>
                                <Field
                                    type="checkbox"
                                    className="form-check-input"
                                    id="exampleCheck1"
                                    name="remember"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary" >Login</button>

                            <h4 style={{ cursor: 'pointer' }} >Don't have an account? Signup here !</h4>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Login
