import React from 'react';

const Contact = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-4 ">
      <div className="   rounded-lg shadow p-4" style={{ width: '500px' }}>
        <h2 className="h3 font-weight-bold text-center text-dark mb-4">Contact Form</h2>
        <form className="d-flex flex-wrap">
          <input
            type="text"
            className="bg-light text-dark border-0 rounded p-2 mb-3 w-100 col-md-5 mr-md-2"
            placeholder="Full Name"
          />
          <input
            type="email"
            className="bg-light text-dark border-0 rounded p-2 mb-3 w-100 col-md-5 ml-md-2"
            placeholder="Email"
          />
          
          <input
            type="number"
            className="bg-light text-dark border-0 rounded p-2 mb-3 w-100 col-md-5 mr-md-2"
            placeholder="Phone Number"
          />
          <input
            type="text"
            className="bg-light text-dark border-0 rounded p-2 mb-3 w-100 col-md-5 ml-md-2"
            placeholder="Company Name"
          />
          <input
            type="text"
            className="bg-light text-dark border-0 rounded p-2 mb-3 w-100 col-md-5 mr-md-2"
            placeholder="Job Title"
          />
          <input
            type="date"
            className="bg-light text-dark border-0 rounded p-2 mb-3 w-100 col-md-5 ml-md-2"
            placeholder="Date of Birth"
          />
          <textarea
            name="message"
            className="bg-light text-dark border-0 rounded p-2 mb-3 w-100"
            placeholder="Message"
            rows="4"
          >
          </textarea>
          <button
            type="submit"
            className="btn btn-primary w-100 mt-3"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;