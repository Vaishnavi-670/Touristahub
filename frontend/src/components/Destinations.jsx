import React from 'react'

const Destinations = () => {
  return (
    <div className="container py-5">
  <div className="mx-auto mb-4 text-center" style={{ maxWidth: '700px' }}>
    <h1 className="display-2 text-dark fw-bold title animated-text">
      Explore Places
    </h1>
    <p className="mt-3 text-dark fw-bold sub-title animated-text">
      Your Gateway to Adventure: Explore Unseen Destinations and Create Lasting Memories!
    </p>
  </div>
  
  <div className="row mt-5">
    <div className="col-md-4 d-none d-md-flex justify-content-center align-items-center">
      <img
        className="rounded img-fluid hover-effect bordered-image"
        src="https://media.istockphoto.com/id/490934006/photo/freedom.webp?b=1&s=170667a&w=0&k=20&c=QxOLzG2Wcl2FrFo-Ja-HzPYcfOHBUB3_if2b9oT7Myo="
        alt="Features Image"
      />
    </div>
    {/* Add more columns as needed */}
  </div>
</div>
    
  )
}

export default Destinations