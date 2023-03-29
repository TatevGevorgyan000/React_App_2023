import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

const initialValues = {
    name: "",
    password: "",
    policy: false
}
let validationSchema = yup.object({
    name: yup.string("must by string").required("Required!").min(5).max(10),
    password: yup.string()
    .min(8)
    .max(18)
    .required()
    .matches(/^[A-Z]/g, "Must by start with uppercase"),
    policy: yup.boolean()
})
const onSubmit = (e) => {
    console.log(e,'submit');
}
export default function MyForm() {
    // const formik = useFormik({
    //     initialValues, 
    //     onSubmit,
    //     validationSchema,
    //     // validate: (values) => {
    //     //     const errors ={}
    //     //         if (!values.name) {
    //     //             errors.name = "Required!"
    //     //         }
    //     //         if (!values.password) {
    //     //             errors.password = "Required!"
    //     //         }
    //     //     return errors
    //     // }
    // })
    // // console.log(formik.errors)
  return (
    <Formik
        initialValues= {initialValues}
        validationSchema = {validationSchema}
        onSubmit = {onSubmit}
        validateOnChange = {false}
        validateOnBlur = {true}
    >
        <Form className='MyForm'>
            <div>
                <label htmlFor='name'>username</label>
                <Field 
                type='text' 
                id='name' 
                name='name' 
                // value={formik.values.name} 
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur} // sra ognutyamb errorsy erevum e ayn jamanka, erb tuch enq anum, aysinqn kpnum enq tvyal inputin
                />
                {/* {(formik.errors.name && formik.touched.name) ? <p className='errors'>{formik.errors.name}</p> : null} */}
                <ErrorMessage name='name' component='p'/>
            </div>
            <div>
                <label htmlFor='password'>password</label>
                <Field 
                type='text' 
                id='password' 
                name='password' 
                // value={formik.values.password} 
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                />
                {/* {(formik.errors.password && formik.touched.password) ? <p className='errors'>{formik.errors.password}</p> : null} */}
                <ErrorMessage name='password' component='p'/>
            </div>
            <div className='row'>
                <label htmlFor='policy'>
                    <Field 
                    type='checkbox' 
                    id='policy' 
                    name='policy' 
                    // value={formik.values.policy} 
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    />
                    <p className='label-box'>Lorem ipsum dolor sit amet.</p>            
                </label>
            </div>
            <input type='submit' value='register'/>
        </Form>
    </Formik>
  )
}
