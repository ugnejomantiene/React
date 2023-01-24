import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';

const FormValidationFormik = () => {

  const [values, setValues] = useState({
    email: '',
    password: '',
    passwordRepeat: ''
  });

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('This input must be a valid email.')
      .required('This field must be filled.'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 symbols length.')
      .required('This field must be filled.'),
    passwordRepeat: Yup.mixed()
      .oneOf([Yup.ref('password'), null], 'Passwords must match.')
      .required('This field must be filled.')
  });

  return (
    <>
      <Formik
        initialValues={values}
        // initialValues={{
        //   email: values.email,
        //   password: values.password,
        //   passwordRepeat: values.passwordRepeat
        // }}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({ errors, touched, values, setValues }) => (
          <Form>
            <div>
              <label>Email:
                <Field 
                  name='email'
                  value={values.email} 
                  onChange={(e)=>setValues({...values, email:e.target.value})}
                />
                {
                  errors.email && touched.email ? 
                    <span>{errors.email}</span>
                    : null
                }
              </label>
            </div>
            <div>
              <label>Password:
                <Field name='password' 
                  value={values.password} 
                  onChange={(e)=>setValues({...values, password:e.target.value})}
                />
                {
                  errors.password && touched.password ? 
                    <span>{errors.password}</span>
                    : null
                }
              </label>
            </div>
            <div>
              <label>Password Repeat:
                <Field name='passwordRepeat' 
                  value={values.passwordRepeat} 
                  onChange={(e)=>setValues({...values, passwordRepeat:e.target.value})}
                />
                {
                  errors.passwordRepeat && touched.passwordRepeat ?
                    <span>{errors.passwordRepeat}</span>
                    : null
                }
              </label>
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
 
export default FormValidationFormik;