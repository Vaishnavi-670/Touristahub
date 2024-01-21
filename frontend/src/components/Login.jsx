import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import useAppContext from '../AppContext';


// const SignupSchema = Yup.object().shape({
//   email: Yup.string().email('Invalid email').required('Required'),
//   password:Yup.string().required('Password is required').min(4, 'Password is too short'),

// });

const Login = () => {

  const navigate = useNavigate();
  const { setLoggedIn } = useAppContext();
  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      console.log(values);

      const res = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (res.status === 200) {
        enqueueSnackbar('Logged in Successfully', { variant: 'success' });

        const data = await res.json();

        sessionStorage.setItem('user', JSON.stringify(data));
        setLoggedIn(true);


        navigate('/');
      } else if (res.status === 401) {
        enqueueSnackbar('Invalid Credentials', { variant: 'error' });
      } else {
        enqueueSnackbar('Something went Wrong', { variant: 'error' });
      }
    }
  });

  return (
    <div className="body">
      <div className="col-md-3 mx-auto login-page">
        <form onSubmit={loginForm.handleSubmit} >
          <h1 className="caard">Login Page</h1><br />

          <label>Email Address</label>
          <span className='ms-4 fs-6 text-danger'>{loginForm.errors.email}</span>

          <input type="email" className="myinput" id="email" onChange={loginForm.handleChange} value={loginForm.values.email}></input>
          <br />

          <label >Password</label>
          <span className='ms-4 fs-6 text-danger'>{loginForm.errors.password}</span>

          <input type="Password" className="myinput" id="password" onChange={loginForm.handleChange} value={loginForm.values.password}></input>

          <button className="mybtn" type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login