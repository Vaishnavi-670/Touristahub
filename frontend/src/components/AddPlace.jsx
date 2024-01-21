import { useFormik } from 'formik';
import React, { useState } from 'react'
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

const Place = () => {

  const [selFile, setSelFile] = useState('');

  const navigate = useNavigate();

  const placeVisit = useFormik({
    initialValues: {
      name: '',
      address: '',
      location: '',
      description: '',
      image: '',
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      values.image = selFile;
      console.log(values);
      setSubmitting(true);

      const res = await fetch('http://localhost:5000/place/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setSubmitting(false);

      if (res.status === 200) {
        enqueueSnackbar('Place added Successfully', { variant: 'success' });

        const data = await res.json();

        sessionStorage.setItem('user', JSON.stringify(data));


        navigate('/BrowsePlaces');
      } else if (res.status === 401) {
        enqueueSnackbar('Invalid Credentials', { variant: 'error' });
      } else {
        enqueueSnackbar('Something went Wrong', { variant: 'error' });
      }
    },

  });

  const uploadFile = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    setSelFile(file.name);
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
        enqueueSnackbar('file uploaded', {variant: 'success'})
      }
    });
  };

  return (
    <div className='vh-100 bg-body-secondary'>
      <div className='col-md-4 mx-auto py-5'>
        <div className="card">
          <div className="card-body p-4">
            <form onSubmit={placeVisit.handleSubmit}>
              <h2 className='text-center'>Places to Visit</h2>
              <hr />

              <label htmlFor="">Name</label>
              <span className='ms-4 fs-6 text-danger'></span>
              <input type="text" className='form-control mb-4' id="name" onChange={placeVisit.handleChange} />

              <label htmlFor=""> Address</label>
              <span className='ms-4 fs-6 text-danger'></span>
              <input type="text" className='form-control mb-4' id="address" onChange={placeVisit.handleChange} />

              <label htmlFor="">Location</label>
              <span className='ms-4 fs-6 text-danger'></span>
              <input type='text' className='form-control mb-4' id='location' onChange={placeVisit.handleChange} />

              <label htmlFor=''>Description</label>
              <span className='ms-4 fs-6 text-danger'></span>
              <input type="text" className='form-control mb-4' id='description' onChange={placeVisit.handleChange} />

              <label htmlFor="Image"></label>
              <input type="file" className='form-control mb-4' id='image' onChange={uploadFile} />

              <button type='submit' className="btn btn-success ">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Place;