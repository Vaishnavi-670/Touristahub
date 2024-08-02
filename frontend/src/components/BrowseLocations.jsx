import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
<link rel="stylesheet" href="index.css" />
const BrowseLocations = () => {

  const searchRef = useRef();
  const navigate = useNavigate();

  // const popularPlaces = ['Lucknow'];

  const handleSearch = () => {
    const search = searchRef.current.value;
    if (search) {
      navigate(`/browseplace/${search}`);
    }
  }

  return (
    <div className='overflow-y-hidden '>
      <header className=' text-white d-flex' style={{ height: '100vh', position: 'relative', backgroundColor: 'rgba(0, 0, 0, 0.6)' }} >
        <div className="container py-5 my-auto">
          <h1 className="text-center display-2 fw-bold  title">Welcome to Tourista Hub</h1>
          <p className=" fs-4 text-center text-4xl sub-title">Book an exclusive home for your personal travel</p>
          {/* <p className="fs-4 text-center sub-title">home for your personal travel</p> */}
          {/* <p className="fs-4 text-center sub-title">Each property is hand-picked, personally visited and cannot be found elsewhere.</p> */}
          <div className="d-flex justify-content-center input-group col-md-10 mx-auto my-5" style={{ width: '50%' }}>
            {/* <input ref={searchRef} type="text" className="form-control" />
            <button onClick={handleSearch} className="btn btn-warning ">Search</button> */}
            <Link ref={searchRef} href="/destinations">
              <button onClick={handleSearch} className="text-white bg-warning rounded-pill px-5 py-3  " >Get Started</button>
            </Link>
          </div>
        </div>
        <img src="https://lp-cms-production.imgix.net/2021-08/shutterstockRF_1541944991.jpg?w=1440&h=810&fit=crop&auto=format&q=75" style={{ position: 'absolute', top: 0, zIndex: -1, objectFit: 'cover', width: '100%', height: '100vh' }} alt="" />
        {/* <video muted loop src="./waterfall2.mp4" style={{ position: 'absolute', top: 0, zIndex: -1, objectFit: 'cover', width: '100%', height: '100vh' }} autoPlay ></video> */}
      </header>

      <section>

        <>
          {/* Features */}
          <div className="container py-5">
            {/* Grid */}
            <div className="row align-items-center">
              <div className="col-md-6">
                <img
                  className="rounded " style={{ height: '  100%', width: '500px', objectFit: 'cover' }}
                  src="https://havingtime.com/wp-content/uploads/2020/02/5-of-The-Most-Beautiful-Places-to-Visit-in-Europe.jpeg"
                  alt="Features Image"
                />
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                
                  <div className="mb-4">
                    <h1 className="display-3 text-dark fw-normal title">
                      Explore all corners of the world with us
                    </h1>
                    <p className="fs-5">
                      Travel is total to prejudice, and narrow mindedness,
                      And many of our people need it sorely on these accounts.
                      It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.
                    </p>
                  
                </div>
              </div>  
            </div> 
          </div>
        </>

        {/* Features */}
        <div className="container py-5">
          {/* Title */}
          <div className="mx-auto mb-4 text-center" style={{ maxWidth: '990px' }}>
            <h1 className="display-3 text-dark fw-normal title">
              Our Gallery
            </h1>
            <h4 className=" text-dark fw-normal sub-title ">
              Your Gateway to Adventure: Explore Unseen Destinations and Create Lasting Memories!
            </h4>
          </div>

          <div className="row mt-5">
            <div className="col-md-3 d-none d-md-flex justify-content-center align-items-center ">
              <img
                className="rounded img-fluid hover-effect"
                src="https://media.istockphoto.com/id/528477676/photo/tourists-in-thailand.webp?b=1&s=170667a&w=0&k=20&c=KWNfoLcau0r1OrofN5f1IZok9MQ7nn4cjpygagSFguI="
                alt="Features Image"
              />

            </div>
            {/* End Col */}
            <div className="col-4 col-md-3 d-md-flex justify-content-center align-items-center">
              <img
                className="rounded img-fluid hover-effect" style={{ height: '400px', width: '300px', objectFit: 'cover' }}
                src="https://i.pinimg.com/564x/8d/75/04/8d7504063de6ef84856b034bc349583a.jpg"
                alt="Features Image"
              />
            </div>

            {/* End Col */}
            <div className="col-4 col-md-3 ">
              <img
                className="rounded img-fluid hover-effect"
                src="https://media.istockphoto.com/id/1412139290/photo/koh-lao-lading-near-koh-hong-krabi-thailand-beautiful-beach-with-longtail-boats.webp?b=1&s=170667a&w=0&k=20&c=TAAIbORPEtpOmmlmLCT1yA2Co9DfnnF5V-TcmPBu29I="
                alt="Features Image"
              />
            </div>
            <div className="col-4 col-md-3 d-md-flex  justify-content-center align-items-center">
              <img
                className="rounded img-fluid hover-effect"
                src="https://media.istockphoto.com/id/1146295488/photo/two-young-girls-student-traveler-enjoy-a-tour-of-the-ancient-greek-amphitheater.webp?b=1&s=170667a&w=0&k=20&c=0A0qLY_B_VEWCipNkNiiJiZoFy9ycpBUyQ80VD8rZxw="
                alt="Features Image"
              />

            </div>

          </div>

        </div>
        <div className="container py-5">

          <div className="mx-auto mb-4 text-center" style={{ maxWidth: '990px' }}>
            <h1 className="display-3 text-dark fw-normal title">
              WHY CHOOSE US?
            </h1>
            <h4 className=" text-dark fw-normal sub-title ">
              A Brand name you can trust and rely on!
            </h4>
          </div>

          <div className="row mt-5 justify-content-between ">

            {/* End Col */}
            <div className=" col-md-3 d-flex mb-4 flex-column  align-items-center p-4 bg-light rounded shadow hover--effect">
              <img src="https://icons.veryicon.com/png/o/miscellaneous/8atour/credit-guarantee.png" style={{ width: '100px', height: '100px', objectFit: 'cover' }} alt="" />
              <h2 className='mt-3 text-center'>Affordable price Guarentee</h2>
              <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates sint deleniti excepturi eum, dolore eaque ratione voluptatum reiciendis dolorem impedit.
              </p>
            </div>
            <div className=" col-md-3 d-flex mb-4  flex-column  align-items-center p-4 bg-light rounded hover--effect shadow">
              <img src="https://icons.veryicon.com/png/128/miscellaneous/8atour/apphome-visa.png" style={{ width: '100px', height: '100px', objectFit: 'cover' }} alt="" />
              <h2 className='mt-3 text-center'>Wide varity of Destinations</h2>
              <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates sint deleniti excepturi eum, dolore eaque ratione voluptatum reiciendis dolorem impedit.
              </p>
            </div>
            <div className=" col-md-3 d-flex mb-4 flex-column  align-items-center p-4 bg-light rounded hover--effect shadow">
              <img src="https://icons.veryicon.com/png/128/miscellaneous/8atour/precise-matching.png" style={{ width: '100px', height: '100px', objectFit: 'cover' }} alt="" />
              <h2 className='mt-3 text-center'>Highly Qualified Service</h2>
              <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates sint deleniti excepturi eum, dolore eaque ratione voluptatum reiciendis dolorem impedit.
              </p>
            </div>
          </div>

        </div>

      </section>
    </div>
  )
}

export default BrowseLocations