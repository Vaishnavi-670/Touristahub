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
      <div className=" px-3 mt-5 mx-auto">
        <div className="text-left mx-auto w-100 text-md-center">
          <h1 className="mb-4 display-2 fw-bold text-dark">
            <span>Explore </span>
            <span
              className=" py-2"
              style={{
                background: 'linear-gradient(to right, #68D391, #9F7AEA)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              exclusive destinations
            </span>
            <span className='d-block'> with Tourista Hub</span>
          </h1>
          <p className="px-0 mb-4 fs-5  text-muted">
            Discover hand-picked properties and unique travel experiences curated just for you.
          </p>

          {/* Rounded search bar */}
          <div className="mb-4 d-flex justify-content-center">
            <input ref={searchRef}
              type="text"
              className="form-control rounded-pill me-2"
              placeholder="Search destinations"
              style={{ maxWidth: '500px', height: '50px' }}
            />
            <button onClick={handleSearch} className="btn btn-outline-success rounded-pill">Search</button>
          </div>

          <div className="mb-4">
            <Link href="#" className="btn btn-success btn-lg me-3 rounded-pill">
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi mx-1 bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link href="#" className="btn btn-outline-secondary btn-lg rounded-pill">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi mx-1 bi-lightbulb"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M9.663 17h-4.673m4.673-1.636l-.707-.707M6.536 10.071l.548-.547A5 5 0 1115.157 1.636 5 5 0 016.536 10.071z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <section>
        <h1 className='px-5 mt-5 display-4 fw-bold' style={{ textAlign: 'start', width: '40%' }} >Let us <span className='display-3 fw-bold' style={{
          background: 'linear-gradient(to right, #68D391, #9F7AEA)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}>Plan you
        </span> a Perfact Holiday</h1>

        <div id="page2" className="d-flex  mt-3 align-items-center px-4 " style={{ height: '330px', width: '100%' }}>

          <div id="bottom" className="d-flex align-items-center px-4" style={{ height: '100%', width: '100%', padding: '7px', whiteSpace: 'nowrap', overflowX: 'auto', overflowY: 'hidden' }}>
            <div className=" d-inline-block me-3" style={{ height: '100%', width: '300px', borderRadius: '35px', position: 'relative', overflow: 'hidden', gap: '2vw', transition: '0.4s all ease' }}>
              <img src="https://media.istockphoto.com/id/842920834/photo/zurich-switzerland.webp?b=1&s=170667a&w=0&k=20&c=ekzjLAHY38-aYXbkS0sDmZUgcX2O6dlXMJIA_UzdQOo=" alt="" style={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              {/* <h1 className='fs-5 mt-5'>City Tours</h1> */}
            </div>
            <div className=" d-inline-block me-3" style={{ height: '100%', width: '300px', borderRadius: '35px', position: 'relative', overflow: 'hidden', gap: '2vw', transition: '0.4s all ease' }}>
              <img src="https://media.istockphoto.com/id/869122798/photo/basel-switzerland.webp?b=1&s=170667a&w=0&k=20&c=RP0IGfuE5Q7y1_0JUuq_00UoSPB4wqV2-uS22F88EL4=" alt="" style={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'center' }} />

            </div>
            <div className=" d-inline-block me-3" style={{ height: '100%', width: '300px', borderRadius: '35px', position: 'relative', overflow: 'hidden', gap: '2vw', transition: '0.4s all ease' }}>
              <img src="https://images.unsplash.com/photo-1721367630037-f97ef4bc9a83?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" style={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'center' }} />

            </div>
            <div className=" d-inline-block me-3" style={{ height: '100%', width: '300px', borderRadius: '35px', position: 'relative', overflow: 'hidden', gap: '2vw', transition: '0.4s all ease' }}>
              <img src="https://images.unsplash.com/photo-1722172118908-1a97c312ce8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D" alt="" style={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'center' }} />

            </div>
            <div className=" d-inline-block me-3" style={{ height: '100%', width: '300px', borderRadius: '35px', position: 'relative', overflow: 'hidden', gap: '2vw', transition: '0.4s all ease' }}>
              <img src="https://images.unsplash.com/photo-1722233987129-61dc344db8b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D" alt="" style={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'center' }} />

            </div>
            <div className=" d-inline-block me-3" style={{ height: '100%', width: '300px', borderRadius: '35px', position: 'relative', overflow: 'hidden', gap: '2vw', transition: '0.4s all ease' }}>
              <img src="https://media.istockphoto.com/id/2155876326/photo/serene-tropical-beach-in-bora-bora-french-polynesia.jpg?s=612x612&w=0&k=20&c=E6dvsA9QvpFvPJavxC-zKf9zrXlsIaIa4y2Wa5pxg3E=" alt="" style={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'center' }} />

            </div>
            {/* <div className="elem d-inline-block me-2" style={{ height: '100%', width: '300px', borderRadius: '35px', position: 'relative', overflow: 'hidden', gap: '2vw', transition: '0.4s all ease' }}>
                <img src="https://media.istockphoto.com/id/1961768252/photo/tropical-white-sand-beach-with-palms-and-sea.webp?s=170667a&w=0&k=20&c=zVADCPfrZUWfhnBGDIc7lhZbIi_QJK2BbpK-WyT3iqg=" alt="" style={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'center' }} />

              </div>
              <div className="elem d-inline-block me-2" style={{ height: '100%', width: '300px', borderRadius: '35px', position: 'relative', overflow: 'hidden', gap: '2vw', transition: '0.4s all ease' }}>
                <img src="https://images.unsplash.com/photo-1520520731457-9283dd14aa66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" alt="" style={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'center' }} />

              </div>
              <div className="elem d-inline-block me-2" style={{ height: '100%', width: '300px', borderRadius: '35px', position: 'relative', overflow: 'hidden', gap: '2vw', transition: '0.4s all ease' }}>
                <img src="https://images.unsplash.com/photo-1471989749605-1d14cb3d836e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDh8MjE4MDY3Nnx8ZW58MHx8fHx8" alt="" style={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'center' }} />

              </div>
              <div className="elem d-inline-block me-2" style={{ height: '100%', width: '300px', borderRadius: '35px', position: 'relative', overflow: 'hidden', gap: '2vw', transition: '0.4s all ease' }}>
                <img src="https://images.unsplash.com/photo-1516730241870-cffe363377f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D" alt="" style={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'center' }} />

              </div> */}

          </div>
        </div>

        {/* Features */}
        <div className="px-5 py-2 mx-4 mt-5">
          {/* Grid */}
          <div className="row py-4 align-items-center">
            <div className="col-md-6">
              <img
                className="rounded " style={{ height: ' 100%', width: '750px', objectFit: 'cover' }}
                src="https://havingtime.com/wp-content/uploads/2020/02/5-of-The-Most-Beautiful-Places-to-Visit-in-Europe.jpeg"
                alt="Features Image"
              />
            </div>
            <div className="col-md-6 mt-4 ">

              <div className="mb-4">
                <h1 className="display-3 text-dark fw-normal title">
                  Explore all corners of the world with us
                </h1>
                <p className="fs-5 mt-3 ">
                  Travel is total to prejudice, and narrow mindedness,
                  And many of our people need it sorely on these accounts.
                  It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.
                </p>
                <p className="fs-5 mt-1 ">
                  We take you to the most beautiful places in the world, and make you experience the beauty of nature.
                  We will guide you through the world, and share the joy of exploring.
                  We will make you feel like you are part of the world.
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Features */}
        <div className="container  py-5">
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
        <div className="row px-4">
          <div className="col-md-4 mb-4" >
            <div className="card" style={{ height: '500px', overflow: 'hidden' }} >
              <div className="card-body">
                <img className='card-img-top' style={{ height: "300px", objectFit: 'cover' }} src="https://static.toiimg.com/thumb/msid-102383896,width-748,height-499,resizemode=4,imgsize-238460/.jpg" alt="" />
                <h3>Shimla</h3>
                <p className=' fs-6 text-dark '>Shimla is the capital of the northern Indian state of Himachal Pradesh, in the Himalayan foothills</p>
                <Link className='btn btn-primary' to="/browseplace/shimla">View Places to Visit</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="card" style={{ height: '500px', overflow: 'hidden' }}>
              <div className="card-body">
                <img className='card-img-top' style={{ height: "300px", objectFit: 'cover' }} src="https://cdn-ijojh.nitrocdn.com/wYlENIZbBEepXffmuWvajJfNyYNuqlHx/assets/images/optimized/wp-content/uploads/2023/02/88b025cb3e019dd48c4fe17b716960b5.manali-1024x536.jpg" alt="" />
                <h3>Manali</h3>
                <p>Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state.  </p>
                <Link className='btn btn-primary' to="/browseplace/manali">View Places to Visit</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ height: '500px', overflow: 'hidden' }}>
              <div className="card-body">
                <img className='card-img-top' style={{ height: "300px", objectFit: 'cover' }} src="https://www.travelandleisure.com/thmb/0CP3JWdU_EFnS4c5v8VtLekXb-Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-hawa-mahal-TODOJAIPUR1023-034e1287d12d453fab6d236e8cf7e982.jpg" alt="" />
                <h3>Jaipur</h3>
                <p>Jaipur is the capital of India’s Rajasthan state. It evokes the royal family that once ruled the region </p>
                <Link className='btn btn-primary' to="/browseplace/jaipur">View Places to Visit</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card" style={{ height: '500px', overflow: 'hidden' }}>
              <div className="card-body">
                <img className='card-img-top' style={{ height: "300px", objectFit: 'cover' }} src="https://www.livemint.com/lm-img/img/2024/01/22/600x338/Ayodhya_ram_mandir_jpg_1705897752176_1705901616166.jpg" alt="" />
                <h3>Ayodhya</h3>
                <p>Ayodhya is a city situated on the banks of the Sarayu river in the Indian state of Uttar Pradesh</p>
                <Link className='btn btn-primary' to="/browseplace/ayodhya">View Places to Visit</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ height: '500px', overflow: 'hidden' }}>
              <div className="card-body">
                <img className='card-img-top' style={{ height: "300px", objectFit: 'cover' }} src="https://media.licdn.com/dms/image/D5612AQHYtOBHGCcDPA/article-cover_image-shrink_600_2000/0/1704606295718?e=2147483647&v=beta&t=OKJvfuwjbeJQdL9UzFhPvzHf1kl5RlyNv_qaylhU6Kc" alt="" />
                <h3>Lakshadweep</h3>
                <p>Lakshadweep is a tropical archipelago of 36 atolls and coral reefs in the Laccadive Sea, off the coast of Kerala, India</p>
                <Link className='btn btn-primary' to="/browseplace/lakshdweep">View Places to Visit</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container  py-5 ">

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