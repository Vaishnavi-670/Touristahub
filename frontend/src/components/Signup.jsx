import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').min(4, 'Name is too short'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Password is required').min(4, 'Password is too short'),
  // .matches(/[a-z][A-Z]\d /, 'Password must include uppercase and lowecase letters and a number'),
  confirm: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('Confirm Password is required')

});

const Signup = () => {

  const [passwordHidden, setpasswordHidden] = useState(true);

  const navigate = useNavigate();

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirm: '',
    },

    onSubmit: async (values,{setSubmitting, resetForm}) => {
      console.log(values);
      setSubmitting(true);

      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setSubmitting(false);

      if (res.status === 200) {
        enqueueSnackbar('Signed up Successfully', { variant: 'success' });

        const data = await res.json();

        sessionStorage.setItem('user', JSON.stringify(data));


        navigate('/');
      } else if (res.status === 401) {
        enqueueSnackbar('Invalid Credentials', { variant: 'error' });
      } else {
        enqueueSnackbar('Something went Wrong', { variant: 'error' });
      }
    },

validationSchema: SignupSchema
  });

return (
  <div className='bodyy'>
    <div className=" box">

      <form onSubmit={signupForm.handleSubmit}>
        <h2 className='text-center' >Signup Page</h2>
        {/* <div className="row mb-4"> */}

        <div className="col">
          <div data-mdb-input-init className="form-outline mb-4">
            <label className="form-label" for="form3Example1"> Name</label>
            <span className='ms-4 fs-6 text-danger'> {signupForm.touched.name && signupForm.errors.name}</span>
            <input type="text" className="form-control" id="name" onChange={signupForm.handleChange} value={signupForm.values.name} />
          </div>
        </div>


        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" for="form3Example3">Email address</label>
          <span className='ms-4 fs-6 text-danger'>{signupForm.touched.email && signupForm.errors.email}</span>
          <input type="email" className="form-control" id="email" onChange={signupForm.handleChange} value={signupForm.values.email} />
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" for="form3Example4">Password</label>
          <span className='ms-4 fs-6 text-danger'>{signupForm.touched.password && signupForm.errors.password}</span>
          <input type="password" className="form-control" id="password" onChange={signupForm.handleChange} value={signupForm.values.password} />
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" for="form3Example4">Confirm</label>
          <span className='ms-4 fs-6 text-danger'>{signupForm.touched.confirm && signupForm.errors.confirm}</span>
          <input type="password" className="form-control" id="confirm" onChange={signupForm.handleChange} value={signupForm.values.confirm} />
        </div>



        <button type='submit ' className="btn btn-success ">Signup</button>
      </form>
    </div>
  </div>


);
};


export default Signup;